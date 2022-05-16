import React from 'react'
import Image from 'next/image'

function WorkCard() {
    return (
        <div className="card flex flex-col border-2 border-black rounded-md shadow-lg bg-pink-300 p-10">
            <Image
                src="https://picsum.photos/200/300"
                width={'300px'}
                height={'200px'}
            />
            <h1 className='text-4xl'>work headline</h1>
            <h3 className='text-lg'>work subheader</h3>
            <p className=''>work body</p>
        </div>
    )
}

export default WorkCard