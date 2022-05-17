import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button'
import { LinkIcon } from '@heroicons/react/outline'

function WorkCard({ headline, subtitle, body, image, href, linkAs }) {
    return (
        <div className="card flex flex-col gap-4 border-2 border-black rounded-md shadow-lg bg-pink-300 p-10 text-skin-inverted">
            <Image
                src="https://picsum.photos/200/300"
                // src={image}
                width={'300px'}
                height={'200px'}
                className='rounded-md'
            />
            <h1 className='text-4xl text-skin-inverted'>{headline}</h1>
            <h3 className='text-lg'>{subtitle}</h3>
            <p className=''>{body}</p>
            <div className='flex justify-end'>

                <Button
                    size='sm'
                    textColor='skin-base'
                    bgColor='black'
                >
                    <Link href={href} as={linkAs}>
                        action
                    </Link>
                </Button>
            </div>

        </div>
    )
}

export default WorkCard