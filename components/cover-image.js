import cn from 'classNames'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import Image from 'next/image'

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

// export const imageBuilder = source => createImageUrlBuilder(config).image(source)

export default function CoverImage({ title, url, imageObject, slug }) {
    // const image = (
    //     // <img
    //     //     // width={340}
    //     //     // height={340}
    //     //     alt={`Cover image for ${title}`}
    //     //     className='rounded'
    //     //     // className={cn('shadow-sm rounded-md', {
    //     //     //     'hover:shadow-md transition-shadow duration-200': slug,
    //     //     // })}
    //     //     src={urlFor(imageObject).width(340).height(200).crop('top', 'left').fit('crop').url()}
    //     // // src={imageBuilder(imageObject).width(1240).height(540).url()}
    //     // />

    // )

    return (
        // <div className='mx-5 sm:mx-0'>
        //     {image}
        // </div>
        <Image
            src={urlFor(imageObject).url()}
            alt={`Cover image for ${title}`}
            width={16}
            height={9}
            layout='responsive'
            objectFit='cover'
        // className=' min-h'
        />
    )
    // return (
    //     <div className='mx-5 sm:mx-0'>
    //         {slug ? (
    //             <Link href="/post/[slug]" as={`/post/${slug}`}>
    //                 <a aria-label={title}>{image}</a>
    //             </Link>
    //         ) : (
    //             'image'
    //         )}
    //     </div>
    // )
}