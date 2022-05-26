import React from 'react'

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