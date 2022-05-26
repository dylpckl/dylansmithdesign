import React from 'react'
import Link from 'next/link'

function NavItem({ slug, text }) {
    return (
        <Link href={`${slug}`}>
            <div className='bg-transparent p-2 hover:bg-black hover:drop-shadow-neu-dark-sm hover:text-skin-accent list-none uppercase transition-all text-sm lg:text-lg font-bold rounded-md cursor-pointer'>{text}</div>
            {/* <li className='bg-transparent p-2 hover:bg-black hover:drop-shadow-neu-dark-sm hover:text-skin-accent list-none uppercase transition-all text-sm lg:text-lg font-bold rounded-md cursor-pointer'>{text}</li> */}
        </Link>
    )
}

export default NavItem