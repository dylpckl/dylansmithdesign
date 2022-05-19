import Navbar from './navbar'
import Footer from './Footer'
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
      className='w-full min-h-screen bg-gradient-to-br px-12 md:px-32 xl:px-48 from-skin-hue via-skin-hue to-[#348AC7]'
    >
      <Head>
        <title>Dylan Smith Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Arya:wght@400;700&family=Josefin+Sans:wght@300;400;700&family=Voces&display=swap" rel="stylesheet" />

      </Head>
      <Navbar />
      <main className='bg-skin-bg-light dark:bg-skin-bg-dark dark:text-skin-dark min-h-[80vh] rounded-lg sm:p-2 p-16 flex flex-col gap-12 items-center text-skin-light'>
        {children}
        <Link href='/' className='text-skin-base'>
          Back to Home
        </Link>
      </main>
      <Footer />
    </motion.div>
  )
}

// bg-pink-400