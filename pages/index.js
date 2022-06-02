// Next.js
import Image from 'next/image'
import Link from 'next/link'
// Styles & Images
// import styles from '../styles/Home.module.css'
import profilePic from '../public/images/me.jpg'
// External
import TypewriterComponent from 'typewriter-effect'
import { motion } from "framer-motion"
// Components
// import WorkCard from '../components/workCard'
import Section from '../components/section'
import Button from '../components/button'
import { ChevronDoubleRightIcon, SunIcon } from '@heroicons/react/outline'
import { darkMode } from '../tailwind.config'
import React, { useState } from 'react'
import HeroPost from '../components/hero-post'
import MoreStories from '../components/more-stories'
import { getAllPostsForHome, getPostAndMorePosts } from './api/api'
import ProjectCard from '../components/ProjectCard'

export default function Home({ allPosts, preview }) {

  const container = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const section = {
    visible: { opacity: 1, y: 0 },
    // visible: { opacity: 1, x: 0, y: 0 },
    hidden: { opacity: 0, y: 10 },
    // transition: { duration: 5 },
    // hidden: { opacity: 0, x: -100, y: 10 },
    // initial={{ y: 10, opacity: 0 }}
    // animate={{ y: 0, opacity: 1 }}
  }

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(0, 3)

  return (


    <div className='py-0 px-8'>
 
      <main>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          transition={{ duration: 0.8 }}
          className='flex flex-col justify-center gap-24'

        >
      
          <Section
            align='center'
          >
            <div className="flex-col md:flex md:flex-row items-center gap-12 xl:gap-16">
              <div className="mx-auto md:mx-0 w-64 rounded-full overflow-hidden object-contain mb-8 md:mb-0 md:mr-8 border-4 border-black dark:border-white">
                <Image
                  src={profilePic}
                  alt="Picture of Dylan Smith"
                  layout='responsive'
                  objectFit='cover'
                  // width={16}
                  // height={9}
                  width={'200px'}
                  height={'200px'}
                />
              </div>

              <div className='flex flex-col justify-between'>
                <h1 className='text-4xl md:text-7xl'>hi, I&apos;m dylan</h1>
         
                <div className='right text-3xl md:text-4xl flex flex-col'>
                  <TypewriterComponent
                    options={{
                      strings: ['', 'front-end developer', 'ui/uix designer', 'logo designer', 'husband', 'dad'],
                      autoStart: true,
                      loop: true,
                      delay: 'natural',
                      deleteSpeed: 'natural'
                    }}
                  />
                  <span>and lover of all things web related.</span>
                  <span>based in new york</span>
                </div>
              </div>

            </div>
          </Section>


          <Section gap={12}>
            <h1 className='text-center'>featured project</h1>
            <ProjectCard
              headline='steamparty.io'
              subtitle='A React Webapp to find common games between multiple Steam libraries.'
              image='https://picsum.photos/1000'
              featured={true}
              externalLink='https://steamparty.io'
              external={true}
              caseStudyLink='/post/steamparty-io'
              external2={false}
            >

            </ProjectCard>
            <span className='w-full h-[3px] dark:bg-sky-300 bg-slate-500'></span>
          </Section>

          <Section
            justify='center'
            align='center'
            gap={12}
          >
 
            <h1>recent blog posts</h1>
            
            {morePosts.length > 0 && <MoreStories posts={morePosts} />
            }

            <span className='w-full h-[2px] bg-sky-300'></span>
            <div className='mt-8 flex gap-16'>
              <Button
                bgColor='skin-bg-accent'
                textColor='skin-light'
                href='/post'
              >
                all posts
              </Button>

              <Button
                bgColor='skin-bg-accent'
                textColor='skin-light'
                href='/work'
              >
                my work
              </Button>
            </div>

 
          </Section>

 

        </motion.div>
      </main >
    </div >
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
    revalidate: 1
  }
}