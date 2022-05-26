import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      {/* <h2 className="mb-8 text-3xl font-bold tracking-tighter leading-tight text-center">
        recent blog posts
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12 md:gap-16">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={`/post/${post.slug}`}
            summary={post.summary}
            categories={post.categories}
          />
        ))}
      </div>
    </section>
  )
}