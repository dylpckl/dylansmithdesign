import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'
import ImageUrlBuilder from '@sanity/image-url'
import client from '../client'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
    const builder = ImageUrlBuilder(client)

    function urlFor(source) {
        return builder.image(source)
      }

    return (
    <div>
      <div className="mb-5">
        {/* <CoverImage slug={slug} title={title} imageObject={coverImage} url={urlFor(coverImage).url()} /> */}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/post/${slug}`} href="/post/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author?.name} picture={author?.picture} />
    </div>
  )
}