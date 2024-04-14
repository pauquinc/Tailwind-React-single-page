import React from 'react';
// import Typed from 'react-typed';
import { ReactTyped } from "react-typed";

const Heroo = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='uppercase text-[#00df9a] font-bold p-2'>Doing my First Single Page using</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>React JS & Tailwind</h1>
                <div className='justify-center items-center '>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>It took time but it</p>
                    <ReactTyped
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                        strings={['was', 'totally', 'worth', 'it']} typeSpeed={120} backSpeed={200} loop />
                </div>
                <div>
                    <p className='md:text-2xl text-xl font-bold text-gray-400'>I will integrate some of this to my portfolio's Code</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black'>A button</button>
                </div>
            </div>
        </div>
    )
}

export default Heroo