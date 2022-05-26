import Link from 'next/link'
import { CodeIcon, SunIcon } from '@heroicons/react/outline'
import DarkModeSwitch from './darkModeSwitch';
import NavItem from './navItem';
import Logo from '../logo'
import { useState } from 'react'
import { motion } from 'framer-motion';

function navbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const MOBILE_NAV_ITEMS = [
        {
            id: 0,
            slug: '/',
            navTitle: "home"
        },
        {
            id: 1,
            slug: '/work',
            navTitle: "work"
        },
        {
            id: 2,
            slug: '/post',
            navTitle: "blog"
        },
        // {
        //     id: 3,
        //     slug: '/resources',
        //     navTitle: "resources"
        // },
    /*     {
            id: 4,
            slug: '/contact',
            navTitle: "contact"
        } */
    ]

    const hideNavItemsVariant = {
        opened: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        closed: {
            opacity: 1,
            y: "0%",
            transition: {
                delay: 1.1,
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    }

    const mobileMenuVariant = {
        opened: {
            y: "0%",
            transition: {
                delay: 0.15,
                duration: 1.1,
                ease: [0.74, 0, 0.19, 1.02]
            }
        },
        closed: {
            y: "-100%",
            transition: {
                delay: 0.35,
                duration: 0.63,
                ease: [0.74, 0, 0.19, 1.02]
            }
        }
    }

    const fadeInVariant = {
        opened: {
            opacity: 1,
            transition: {
                delay: 1.2
            }
        },
        closed: { opacity: 0 }
    }

    const ulVariant = {
        opened: {
            transition: {
                delayChildren: 1,
                staggerChildren: 0.18
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.06,
                staggerDirection: -1
            }
        }
    }

    const liVariant = {
        opened: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.45,
                ease: "easeOut"
            }
        },
        closed: {
            opacity: 0,
            y: "100%",
            transition: {
                duration: 0.15,
                ease: "easeInOut"
            }
        }
    }

    const fadeInStart = { opacity: 0 }
    const fadeInEnd = { opacity: 1 }
    const fadeInTransition = { duration: 1 }

    return (
        <>
            <div className='flex py-6 gap-12 justify-between text-skin-dark top-0  md:bg-transparent z-40'>

                {/* <div className='md:hidden flex flex-col justify-start'> */}

                {/* Mobile Nav */}
                <motion.div
                    initial='closed'
                    animate={mobileNavOpen ? 'opened' : 'closed'}
                    className='flex md:hidden'
                >
                    <motion.div
                        variants={hideNavItemsVariant}
                        onClick={() => setMobileNavOpen(true)}
                        className='overflow-y-hidden'
                    >
                        <svg
                            className="w-6 h-6 text-skin-dark"
                            x-show="!showMenu"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>

                        {/* {mobileNavOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="black" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                class="w-6 h-6 text-skin-dark"
                                x-show="!showMenu"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )} */}
                    </motion.div>

                    <motion.div
                        variants={mobileMenuVariant}
                        className="mobile-menu fixed flex flex-col w-full gap-2 p-4 bg-indigo-300 top-0 left-0"
                    >
                        <motion.button
                            variants={fadeInVariant}
                            onClick={() => setMobileNavOpen(false)}
                            className='px-2'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="black" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>
                        <motion.ul variants={ulVariant}>
                            
                            getNavItems(false)
                            {MOBILE_NAV_ITEMS.map(navItem => (
                                <motion.li
                                    whileTap={{ scale: 0.95 }}
                                    key={navItem.id}
                                    className='overflow-y-hidden text-skin-light'
                                    onClick={() => setMobileNavOpen(false)}
                                >
                                    <motion.div
                                        variants={liVariant}
                                    >
                                        <NavItem
                                            slug={navItem.slug}
                                            text={navItem.navTitle}
                                        />
                                    </motion.div>
                                </motion.li>
                            ))}


                        </motion.ul>
                    </motion.div>
                </motion.div>



                {/* Non-mobile Nav */}
                <div className='hidden md:flex justify-between w-full'>
                    {/* <div className="left flex gap-4 lg:gap-12 items-center">
                        <Link href='/' className='cursor-pointer' >
                            <div>
                                <Logo
                                    size='48'
                                    cursor='pointer'
                                    fill='white'
                                />
                            </div>
                        </Link>
                        <NavItem
                            slug='/work'
                            text='work'
                        />
                        <NavItem
                            slug='/post'
                            text='blog'
                        />
                        <NavItem
                            slug='/resources'
                            text='resources'
                        />
                        <NavItem
                            slug='/contact'
                            text='contact'
                        />
                    </div> */}

                    <motion.ul variants={ulVariant} className='left flex gap-4 lg:gap-12 items-center'>
                        {MOBILE_NAV_ITEMS.map(navItem => (
                            <motion.li
                                whileTap={{ scale: 0.95 }}
                                key={navItem.id}
                                className='text-skin-dark'
                            >
                                <motion.div
                                    variants={liVariant}
                                >
                                    <NavItem
                                        slug={navItem.slug}
                                        text={navItem.navTitle}
                                    />
                                </motion.div>
                            </motion.li>
                        ))}
                    </motion.ul>



                    <div className="right flex gap-4 lg:gap-12 items-center text-sm lg:text-lg font-bold">
                        <a className='flex items-center gap-4 list-none uppercase' href='https://github.com/dylpckl/dylansmithdesign' target='_blank'>
                            <li className='flex items-center gap-4 bg-transparent p-2 hover:bg-black hover:drop-shadow-neu-dark-sm hover:text-skin-accent list-none uppercase transition-all rounded-md cursor-pointer'>
                                source
                                <CodeIcon
                                    className='h-6'
                                />
                            </li>
                        </a>
                        <li className='list-none uppercase'>
                            <DarkModeSwitch />
                        </li>
                    </div>
                </div>
                {/* </div> */}


            </div>
        </>
    )
};

export default navbar