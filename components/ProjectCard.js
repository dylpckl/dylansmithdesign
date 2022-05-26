import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button'
import { LinkIcon } from '@heroicons/react/outline'
import cn from 'classnames'

function ProjectCard({ headline, subtitle, body, image, href, externalLink, external, external2, linkAs, featured, caseStudyLink }) {
    const isFeatured = featured
    let parentWidth;
    let childWidth;
    let flexDirection;
    // const { subtitleText } = subtitle;
    let MAX_LENGTH;
    let parentMinHeight;
    let layout;
    let imageContainerDisplay;

    if (isFeatured) {
        parentWidth = 'col-span-2';
        parentMinHeight = 'min-h-[40vh]';
        flexDirection = 'flex';
        childWidth = 'w-full';
        MAX_LENGTH = 500;
        layout = 'responsive';
        imageContainerDisplay = 'relative';
    } else {
        parentWidth = 'col-span-1';
        parentMinHeight = 'min-h-fit';
        flexDirection = 'flex-col md:flex';
        childWidth = 'w-full';
        MAX_LENGTH = 100;
        layout = 'responsive';
        imageContainerDisplay = 'block';
    }

    return (
        <div className={cn(`${parentWidth} ${flexDirection} ${parentMinHeight} text-black hover:drop-shadow-neu-light dark:hover:drop-shadow-neu-dark hover:translate-y-[-0.25rem] transition-all border-4 rounded-lg border-skin-il-stroke-light dark:border-skin-il-stroke-dark relative flex-col md:flex `)}>
            {/* <div className='col-span-1 text-black flex flex-col hover:drop-shadow-neu-light dark:hover:drop-shadow-neu-dark hover:translate-y-[-0.25rem] transition-all border-4 rounded-lg border-skin-il-stroke-light dark:border-skin-il-stroke-dark'> */}
            <div className={cn(`${childWidth} ${imageContainerDisplay}`)}>
                <Image
                    // src="https://picsum.photos/200/300"
                    src={image}
                    width={16}
                    height={9}
                    layout={layout}
                    objectFit='cover'
                    alt=''
                // className=' min-h'
                />
            </div>

            <div className={cn(`${childWidth} flex flex-col gap-4 p-4 lg:gap-8 lg:p-8 bg-skin-card-bg-light dark:bg-skin-card-bg-dark`)}>
                <h1 className='text-4xl text-skin-inverted'>{headline}</h1>
                <h3 className='text-lg'>{`${subtitle.substring(0, MAX_LENGTH)}`}</h3>
                {/* <h3 className='text-lg'>{subtitle}</h3> */}
                {/* <p className=''>{body}</p> */}
                <div className="mt-auto flex justify-around lg:justify-end gap-2 lg:gap-8">
                    <Button href={externalLink} external={external}>
                        check it out
                    </Button>
                    <Button href={caseStudyLink} external={external2}>
                        case study
                    </Button>
                </div>
            </div>
            {featured &&
                <span className='absolute top-8 left-8 -rotate-12 drop-shadow-neu-light-sm text-xl align-baseline bg-yellow-300 p-4 rounded-lg text-center pointer-events-none'>featured project!</span>
            }
        </div >
    );
};

export default ProjectCard