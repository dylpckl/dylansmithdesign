import Link from 'next/link'
import groq from 'groq'
import client from '../../client'
// import WorkCard from '../../components/workCard'
import Section from '../../components/section'
import PostPreview from '../../components/post-preview'
import MoreStories from '../../components/more-stories'
import { useEffect, useState } from 'react'

// const [posts, setPosts] = useState();

// useEffect(() => {
//   client.fetch(
//     `*[_type == "post" && publishedAt < now() && "${category}" in categories[]->title] | order(publishedAt desc)
//     {${postFields}}
//     `
//   )
//     .then((data) => setPosts(data))
//     .then((data) => console.log(postData))
//     .catch(console.error);
// }, [])

const workIndex = ({ projects }) => {

  
  // const menuItems = [...new Set(posts.map((post) => post.categories))];

  // const Buttons = ({ setItem, menuItems }) => {
  //   return (
  //     <>
  //       <div className="d-flex justify-content-center">
  //         {menuItems.map((post, _id) => {
  //           return (
  //             <button
  //               className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
  //               key={_id}
  //             >
  //               {post.categories}
  //             </button>
  //           );
  //         })}
  //         <button
  //           className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
  //           onClick={() => setItem(post)}
  //         >
  //           All
  //         </button>
  //       </div>
  //     </>
  //   );
  // };


  return (
    
    
    <Section
      justify='start'
    >
      <h1 className='mb-8'>portfolio</h1>
      {/* <div>
        {menuItems}
      </div> */}
      {/* <div class="posts-container flex p-8 gap-8"> */}
      <div className='grid grid-cols-3 gap-12'>
        {projects.length > 0 && projects.map(
          // ({ _id, title = '', slug = '', publishedAt = '', mainImage = '' }) =>
          (project) =>
            project.slug && (
              <PostPreview
                key={project.slug}
                title={project.title}
                coverImage={project.coverImage}
                date={project.date}
                author={project.author}
                slug={`/work/${project.slug}`}
                summary={project.summary}
                categories={project.categories}
              />
            )
        )}
      </div>
      {/* </div> */}
    </Section>
  )
}

const projectFields = `
  _id,
  name,
  title,
  body,
  'date': publishedAt,
  mainImage,
  summary,
  'categories': categories[]->title,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`

export async function getStaticProps() {
  const projects = await client.fetch(groq`
      *[_type == "project" && publishedAt < now()] | order(publishedAt desc)
      {${projectFields}}
    `)
  return {
    props: {
      projects
    }
  }
}

export default workIndex