import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'
import ImageUrlBuilder from '@sanity/image-url'
import client from '../client'
import Button from './button'
import { ChevronDoubleRightIcon, TrendingUpIcon } from '@heroicons/react/outline'
import categoriesList from './CategoriesList'

export default function PostPreview({
  title,
  coverImage,
  date,
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
    <Link href={`${slug}`} className='cursor-pointer'>
      {/* <Link as={`/post/${slug}`} href="/post/[slug]" className='cursor-pointer'> */}
      <div className='flex flex-col gap-4 p-4 cursor-pointer
      
      bg-skin-card-bg-light dark:bg-skin-card-bg-dark text-skin-light
      
      hover:drop-shadow-neu-light
      hover:translate-y-[-.25rem]
      dark:hover:drop-shadow-neu-dark transition-all

      border-4 border-skin-il-stroke-light dark:border-skin-il-stroke-dark rounded 
      
      '
      
      >
        {/* <div className='flex flex-col gap-4 bg-skin-bg-accent hover:drop-shadow-neu-light hover:translate-y-[-.25rem] dark:hover:drop-shadow-neu-dark transition-all p-4 border-4 border-black rounded text-skin-light cursor-pointer '> */}
        <div className="flex justify-center bg-skin">
          {/* <CoverImage slug={slug} title={title} imageObject={coverImage} url={urlFor(coverImage).url()} /> */}
          <CoverImage slug={slug} title={title} imageObject={coverImage} url={coverImage} />
        </div>
        <h3 className="flex text-3xl md:text-xl lg:text-2xl xl:text-3xl">

          <div className='flex justify-between items-center'>
            <a>{title}</a>
            {/* <TrendingUpIcon className='w-6 flex-none' /> */}
          </div>

        </h3>
        <div className='flex gap-2 text-sm uppercase'>
          <span>{author.name}</span>
          &middot;
          <Date dateString={date} />
        </div>
        {/* <div className="text-lg">
        <Date dateString={date} />
      </div> */}
        <div className='flex text-md min-h-[3rem] text-lg'>
          {summary}
        </div>

        <div className='mt-auto'>
          {categories && (
            <div className='flex gap-2 items-center'>
              <ul className='flex gap-2'>
                {categories.map
                  (category =>
                    <div className='flex gap-2 items-center'>
                      <li
                        key={category}
                        className="bg-skin-card-tag-bg text-skin-card-tag-text text-sm rounded-lg py-1 px-2"
                      >
                        {category}
                      </li>
                    </div>
                  )}
              </ul>
            </div>
          )}

          <categoriesList
            categories={categories}
          />

        </div>
      </div>
    </Link>
  )
}