import Link from 'next/link'
import groq from 'groq'
import client from '../../client'
import WorkCard from '../../components/workCard'

const Index = ({ posts }) => {
  return (
    <div className='flex flex-col'>
      <h1 className='mb-8'>my posts</h1>
      <div class="posts-container flex p-8 gap-8">
        {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' }) =>
            slug && (

              <WorkCard
                key={_id}
              >
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({new Date(publishedAt).toDateString()})
              </WorkCard>

              // <li key={_id}>
              //   <Link href="/post/[slug]" as={`/post/${slug.current}`}>
              //     <a>{title}</a>
              //   </Link>{' '}
              //   ({new Date(publishedAt).toDateString()})
              // </li>
            )
        )}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now() && "Project" in categories[]->title] | order(publishedAt desc)
    `)
  return {
    props: {
      posts
    }
  }
}

export default Index