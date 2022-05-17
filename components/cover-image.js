import cn from 'classNames'
import Link from 'next/link'
import ImageUrlBuilder from '@sanity/image-url'
import client from '../client'

function urlFor(source) {
    return ImageUrlBuilder(client).image(source)
}


export default function CoverImage({ title, url, imageObject, slug }) {

    // const image = (

    //     <img
    //         width={1240}
    //         height={540}
    //         alt={`Cover image for ${title}`}
    //         className={cn('shadow-sm', {
    //             'hover:shadow-md transition-shadow duration-200': slug,
    //         })}
    //         src={urlFor(imageObject).width(1240).height(540).url()}
    //     />
    // )


    return (
        <div className='mx-5 sm:mx-0'>
            {slug ? (
                <Link href="/posts/[slug]" as={`/posts/${slug}`}>
                    <a aria-label={title}>txt</a>
                    {/* <a aria-label={title}>{image}</a> */}
                </Link>
            ) : (
                'image'
            )}
        </div>
    )
}