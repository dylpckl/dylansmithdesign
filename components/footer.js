import React from 'react'
// import styles from '../styles/Home.module.css'
import Image from 'next/image'

// .footer {
//     display: flex;
//     flex: 1;
//     padding: 2rem 0;
//     border-top: 1px solid #eaeaea;
//     justify-content: center;
//     align-items: center;
//   }
  
//   .footer a {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-grow: 1;
//   }

function Footer() {
    return (
        <footer className='flex flex-1 p-8 justify-center items-center text-skin-base'>
            <a
                className='flex justify-center items-center grow'
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                &copy; 2022 Dylan Smith
                {/* {' '}
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span> */}
            </a>
        </footer>
    )
}

export default Footer