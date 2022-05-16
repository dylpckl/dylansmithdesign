// import { useRouter } from 'next/router'

// const Post = () => {
//   const router = useRouter()
  
//   return (
//     <article>
//       <h1>{router.query.slug}</h1>
//     </article>
//   )
// }

// export default Post

import client from '../../dylansmithdesign-blog/client'

const Post = ({post}) => {
  
  return (
    <article>
      <h1>{post?.slug?.current}</h1>
    </article>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]
  `, { slug })
  return {
    props: {
      post
    }
  }
}

export default Post