import React from 'react'
import WorkCard from '../components/WorkCard'
import Section from '../components/section'
import { motion } from 'framer-motion'

const list = {
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

const listItem = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

function work() {
  return (
    <div class="work-container">
      <Section className='text-center'>
        <h1>stuff i've done</h1>
      </Section>

      <Section>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={list}
          transition={{ duration: 0.8 }}
          className='grid grid-cols-3 gap-4'
        >
          <motion.li variants={listItem}>
            <WorkCard
                  key={'_id'}
                  headline={'title'}
                  subtitle={'subtitle'}
                  body={'test'}
                  image={''}
                  href={"/post/[slug]"}
                  linkAs={'`/post/${slug.current}`'}
                >
                </WorkCard>
          </motion.li>

          <motion.li variants={listItem}>
            <WorkCard
                  key={'_id'}
                  headline={'title'}
                  subtitle={'subtitle'}
                  body={'test'}
                  image={''}
                  href={"/post/[slug]"}
                  linkAs={'`/post/${slug.current}`'}
                >
                </WorkCard>
          </motion.li>

          <motion.li variants={listItem}>
            <WorkCard
                  key={'_id'}
                  headline={'title'}
                  subtitle={'subtitle'}
                  body={'test'}
                  image={''}
                  href={"/post/[slug]"}
                  linkAs={'`/post/${slug.current}`'}
                >
                </WorkCard>
          </motion.li>

          <motion.li variants={listItem}>
            <WorkCard
                  key={'_id'}
                  headline={'title'}
                  subtitle={'subtitle'}
                  body={'test'}
                  image={''}
                  href={"/post/[slug]"}
                  linkAs={'`/post/${slug.current}`'}
                >
                </WorkCard>
          </motion.li>

        </motion.ul>

      </Section>

    </div>
  )
}

export default work