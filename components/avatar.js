import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

export default function Avatar({ name, picture }) {
    
    function urlFor(source) {
        return imageUrlBuilder(client).image(source)
    }
    
    return (
        <div className="flex items-center">
            {/* <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} /> */}
            <img src={urlFor(picture).url()} className="w-12 h-12 rounded-full mr-4" alt={name} />
            <div className="text-lg">{name}</div>
        </div>
    )
}