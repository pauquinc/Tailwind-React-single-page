import React from 'react'
import {
    FaInstagram,
    FaFacebookF,
    FaPinterestP,
    FaLinkedin,
    FaDribbbleSquare
} from "react-icons/fa"

const Footer = () => {
    return (
        <div className='bg-white w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full px-4 py-4 text-3xl font-bold text-[#00df9a]'>
                    Hello Footer
                </h1>
                <p className='text-black px-4 py-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eum numquam adipisci hic, repellat labore ab exercitationem dolorem consectetur quia commodi tempore recusandae autem quod officiis repudiandae ipsa ipsum ratione.</p>
                <div className='text-black px-4 py-4 flex justify-between md:w-[75%] my-6'>
                    <FaInstagram size={30}/>
                    <FaFacebookF size={30}/>
                    <FaPinterestP size={30}/>
                    <FaLinkedin size={30}/>
                    <FaDribbbleSquare size={30}/>

                </div>
            </div>
        </div>
    )
}

export default Footer