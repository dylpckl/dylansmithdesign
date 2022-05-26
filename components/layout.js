import Navbar from './nav/navbar'
import Footer from './footer'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

export default function Layout({ children }) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
      className='w-full min-h-screen bg-gradient-to-br px-8 md:px-16 lg:px-24 xl:px-48 from-skin-hue via-skin-hue to-[#348AC7]'
    >
      <Head>
        <title>Dylan Smith Design</title>
        <meta name="description" content="Dylan Smith - Front-End Developer & Designer" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Arya:wght@400;700&family=Josefin+Sans:wght@300;400;700&family=Voces&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <main className='flex flex-col justify-start bg-skin-el-bg-light dark:bg-skin-el-bg-dark text-skin-light dark:text-skin-dark min-h-[80vh] rounded-lg p-8 md:p-16 gap-12 items-center'>
        {children}
        <div className='mt-auto mb-8'>
          <Link href='/' className='text-skin-base'>
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </motion.div>
  )
}