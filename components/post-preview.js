import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'
import ImageUrlBuilder from '@sanity/image-url'
import client from '../client'
import Button from './button'
import { ChevronDoubleRightIcon } from '@heroicons/react/outline'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
  summary,
}) {
  // const builder = ImageUrlBuilder(client)

  // function urlFor(source) {
  //   return builder.image(source)
  // }

  return (
    <div className='flex flex-col gap-4 bg-skin-fill hover:shadow-xl transition-all border-2 border-black p-4 rounded'>
      <div className="flex justify-center">
        {/* <CoverImage slug={slug} title={title} imageObject={coverImage} url={urlFor(coverImage).url()} /> */}
        <CoverImage slug={slug} title={title} imageObject={coverImage} url={coverImage} />
      </div>
      <h3 className="flex justify-between items-center text-3xl md:text-xl lg:text-2xl xl:text-3xl leading-snug">
        <Link as={`/post/${slug}`} href="/post/[slug]">
          <a className="">{title}</a>
        </Link>
        <ChevronDoubleRightIcon className='w-6' />
      </h3>
      <div className='flex gap-2'>
        <span>{author.name}</span>
        &middot;
        <Date dateString={date} />
      </div>
      {/* <div className="text-lg">
        <Date dateString={date} />
      </div> */}
      <div className='text-md min-h-[3rem]'>
        {summary}
      </div>

      <div>
        {categories && (
          <div className='flex gap-2 items-center'>
            <ul className='flex gap-2'>
              {categories.map
                (category =>
                  <div className='flex gap-2 items-center'>
                    <li
                      key={category}
                      className="bg-gray-300 text-black text-sm rounded-lg py-1 px-2"
                    >
                      {category}
                    </li>
                  </div>
                )}
            </ul>
          </div>
        )}
      </div>

      {/* <div className='flex justify-end'>
        <Button
          size='sm'
          textColor='skin-base'
          bgColor='black'
        >
          <Link as={`/post/${slug}`} href="/post/[slug]">
            read post
          </Link>
        </Button>
      </div> */}
      {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author?.name} picture={author?.picture} /> */}
    </div>
  )
}