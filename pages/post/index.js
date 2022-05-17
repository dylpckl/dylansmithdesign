import Link from 'next/link'
import groq from 'groq'
import client from '../../client'
import WorkCard from '../../components/workCard'
import ImageUrlBuilder from '@sanity/image-url'
import Button from '../../components/button'
import Section from '../../components/section'

function urlFor(source) {
  return ImageUrlBuilder(client).image(source)
}

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const listItem = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const Index = ({ posts }) => {
  return (
    <Section>
      <div className='flex flex-col'>
        <h1 className='mb-8'>my posts</h1>
        {/* <div class="posts-container flex p-8 gap-8"> */}


        {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', publishedAt = '', mainImage = '' }) =>
            slug && (

              // <WorkCard
              //   key={_id}
              //   headline={title}
              //   subtitle={'subtitle'}
              //   body={'test'}
              // >
              //   <Link href="/post/[slug]" as={`/post/${slug.current}`}>
              //     <a>{title}</a>
              //   </Link>{' '}
              //   ({new Date(publishedAt).toDateString()})
              // </WorkCard>

              <>
                {/* <Link href="/post/[slug]" as={`/post/${slug.current}`}> */}
                <WorkCard
                  key={_id}
                  headline={title}
                  subtitle={'subtitle'}
                  body={'test'}
                  image={''}
                  href={"/post/[slug]"}
                  linkAs={`/post/${slug.current}`}
                >
                </WorkCard>
                {/* <Button
                  size='sm'
                  textColor='skin-base'
                  bgColor='black'
                >
                  <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                    action
                  </Link>
                </Button> */}
                {/* </Link> */}
              </>

              // <li key={_id}>
              //   <Link href="/post/[slug]" as={`/post/${slug.current}`}>
              //     <a>{title}</a>
              //   </Link>{' '}
              //   ({new Date(publishedAt).toDateString()})
              // </li>
            )
        )}
      </div>
    </Section>


  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now() && "Blog Post" in categories[]->title] | order(publishedAt desc)
    `)
  return {
    props: {
      posts
    }
  }
}

export default Index