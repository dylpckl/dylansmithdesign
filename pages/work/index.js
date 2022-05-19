import Link from 'next/link'
import groq from 'groq'
import client from '../../client'
import WorkCard from '../../components/workCard'
import Section from '../../components/section'
import PostPreview from '../../components/post-preview'

const workIndex = ({ posts }) => {
  return (
    <Section>
      <h1 className='mb-8'>portfolio</h1>
      <div class="posts-container flex p-8 gap-8">
        {posts.length > 0 && posts.map(
          // ({ _id, title = '', slug = '', publishedAt = '' }) =>
          (post, _id) =>
            // slug && (

              // <WorkCard
              //   key={_id}
              //   headline={title}
              //   subtitle={'subtitle'}
              //   body={'test'}
              //   image={''}
              //   href={"/post/[slug]"}
              //   linkAs={`/post/${slug.current}`}
              // >
              // </WorkCard>

              <PostPreview
                key={_id}
                title={post.title}
                // coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                summary={post.summary}
                categories={post.categories}
              />

              // <li key={_id}>
              //   <Link href="/post/[slug]" as={`/post/${slug.current}`}>
              //     <a>{title}</a>
              //   </Link>{' '}
              //   ({new Date(publishedAt).toDateString()})
              // </li>
            )
        }
      </div>
    </Section>
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

export default workIndex