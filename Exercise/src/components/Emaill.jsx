import React from 'react'

const Emaill = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Contact Part</h1>
                <p>Put your email here</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className=' mr-2 p-3 w-full rounded-md' type="email" placeholder='Enter Email' />
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 ml-4 mx-auto py-2 text-black'>Send</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Emaill