import Link from 'next/link'
import CoverImage from './cover-image'
import Avatar from './avatar'
import Date from './date'
import imageUrlBuilder from '@sanity/image-url'

export default function HeroPost({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
    summary,
}) {

    // const builder = imageUrlBuilder(client)
    // function urlFor(source) {
    //     return builder.image(source)
    // }
    // console.log({title},{coverImage},{author})

    return (

        <section className='border'>
            <div className=''>
                <CoverImage slug={slug} imageObject={coverImage} title={title} url={coverImage} />
                {/* <img
                    width={400}
                    height={240}
                    alt={`Cover image for ${title}`}
                    className={cn('shadow-sm', {
                    'hover:shadow-md transition-shadow duration-200': slug,
                    })}
                    // src={urlFor(coverImage).width(1240).height(540).url()}
                    src={coverImage}
                /> */}
            </div>
            {/* <div className='md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8'>
                <div>
                    <h3 className='mb-4 leading-tight'>
                        <Link href='/post/[slug]' as={`/post/${slug}`}>
                            <a className='hover:underline'>
                                {title}
                            </a>
                        </Link>
                    </h3>
                    <div className='mb-4 md:mb-0 text-lg'>
                        <Date datestring={date} />
                    </div>
                </div>
                <div>
                    <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
                    <Avatar name={author?.name} picture={author?.picture} />
                </div>
            </div> */}
            <div>
                <div>
                    {title}
                </div>
                <div>
                    {summary}
                </div>
            </div>
        </section>
    )
}