import groq from 'groq'
import ImageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import client from '../../client'
import Avatar from '../../components/avatar'
import { useReadingTime } from 'react-reading-time-estimator'
import { useRef } from 'react'

function urlFor(source) {
  return ImageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className='flex justify-center my-8'>
          <img
            alt={value.alt || ' '}
            loading='lazy'
            src={urlFor(value).width(820).height(440).crop('entropy').fit('max').auto('format')}
          />
        </div>
      )
    },
  },

  list: {
    bullet: ({ children }) => <ul className='mt-xl px-8'>{children}</ul>,
    number: ({ children }) => <ol className='mt-lg'>{children}</ol>,
    checkmarks: ({ children }) => <ol className='m-auto text-lg'>{children}</ol>,
  },

  listItem: {
    bullet: ({ children }) => <li className='' style={{ listStyleType: 'disc' }}>{children}</li>,
  },

  block: {
    h1: ({ children }) => <h1 className="text-6xl">{children}</h1>,
    blockquote: ({ children }) => <blockquote className="italic text-3xl m-8 px-8 border-l-2 border-black">{children}</blockquote>,
  }
}

// const {
//   text,
//   minutes,
//   words,
//   time,
// } = useReadingTime(text);

// function readingTime() {
//   const text = useRef(article)
//   const wpm = 225;
//   const words = text.trim().split(/\s+/).length;
//   const time = Math.ceil(words / wpm);
//   document.getElementById("time").innerText = time;
// }
// readingTime();

const Post = ({ post }) => {
  const { title = 'Missing title', name = 'Missing name', categories, authorImage, coverImage, body = [] } = post
  return (
    <article className='py-16 px-32 flex flex-col gap-4'>
      <div className='header flex flex-col gap-4 mb-12'>
        <img src={urlFor(coverImage).width(500).height(250).url()}></img>

        <h1 className='mt-4'>{title}</h1>
        {/* <span>By {name}</span>
         */}
        <div className='flex justify-between'>
          <Avatar
            name={name}
            picture={authorImage}
          >
          </Avatar>
          <span>readingTime()</span>
        </div>

        <div className=''>
          {categories && (
            <ul className='flex gap-8'>
              {categories.map(category =>
                <li 
                  key={category}
                  className='bg-skin-fill rounded-lg px-4 py-2'
                >
                  {category}
                </li>)}
            </ul>
          )}
        </div>

        <hr className='mt-8 border-t-2 border-black' />
      </div>
      {/* {authorImage && ( */}
      {/*         
      //   )
      // }
      // </div> */}
      < PortableText
        value={body}
        components={ptComponents}
      />
    </article>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
  'coverImage': mainImage.asset->url,
}`

// "author": author->{name, 'picture': image.asset->url},

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post