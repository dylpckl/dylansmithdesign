import Navbar from './navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      {/* <div class="announcement w-screen bg-black text-white text-center">stand with ukraine</div> */}
      <div className='w-full min-h-screen bg-gradient-to-br px-24 md:px-32 2xl:px-96 from-sky-500 to-indigo-500'>
        <Navbar />
        <main className='bg-sky-400 min-h-[80vh] rounded-lg p-16 flex flex-col items-center'>
          {children}
        </main>
        <Footer />
      </div>
    </>

  )
}