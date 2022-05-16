import { React, useState } from 'react'
import Link from 'next/link'
import { CodeIcon, SunIcon } from '@heroicons/react/outline'

function navbar() {
const [darkMode, setDarkMode] = useState(false);

    return (
        <nav className='flex py-8 gap-12 justify-between'>
                <div class="left flex gap-12 items-center">
                    <Link href='/'>
                        <li className='mr-8 list-none cursor-pointer'>logo</li>
                    </Link>
                    <Link href="/work">
                        <li className='list-none uppercase cursor-pointer'>work</li>
                    </Link>
                    <li className='list-none uppercase'>//</li>
                    <Link href='/posts'>
                        <li className='list-none uppercase cursor-pointer'>posts</li>
                    </Link>
                    <li className='list-none uppercase'>//</li>
                    <Link href='/contact'>
                        <li className='list-none uppercase cursor-pointer'>contact</li>
                    </Link>
                </div>
                <div class="right flex gap-12 items-center">
                    <Link  className='flex items-center gap-4 list-none uppercase' href='/'>
                        <li className='flex items-center gap-4 list-none uppercase cursor-pointer'>
                            source
                            <CodeIcon
                                className='h-6'
                            />
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className='list-none uppercase'>
                            <button
                                onClick={()=> setDarkMode(!darkMode)}
                                className='flex w-10 h-10 justify-center items-center bg-black rounded-md'>
                                <SunIcon
                                    className='h-6 text-pink-400'
                                />
                            </button>
                        </li>
                    </Link>

                </div>
        </nav>
    )
};

export default navbar