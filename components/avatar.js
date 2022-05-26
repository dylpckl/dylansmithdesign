import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import Image from 'next/image'

export default function Avatar({ name, picture }) {

    function urlFor(source) {
        return imageUrlBuilder(client).image(source)
    }

    return (
        <div className="flex items-center gap-4">
            {/* <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} /> */}
            {/* <img src={urlFor(picture).url()} className="w-12 w-12h-12 rounded-full mr-4" alt={name} /> */}
            {picture && (
                <Image
                    src={urlFor(picture).url()}
                    className="w-12 h-12 rounded-full mr-4"
                    alt={name}
                    width={'48px'}
                    height={'48px'}
                />
            )}
            <div className="text-lg">{name}</div>
        </div>
    )
}