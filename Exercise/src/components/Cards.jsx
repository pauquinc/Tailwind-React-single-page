import React from 'react'


const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-2xl font-bold text-center py-8'>Could be work Title</h2>
                    <p className='text-center text-md font-bold'>image instead</p>
                    <div>
                        <p className='py-2 border-b mx-8'>Work Description</p>
                        <p className='py-2 border-b mx-8'>Year</p>
                    </div>

                    <button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-6 px-6 ml-4 mx-auto py-2 text-black'>Learn More</button>

                </div>

                <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-2xl font-bold text-center py-8'>Could be work Title</h2>
                    <p className='text-center text-md font-bold'>image instead</p>
                    <div>
                        <p className='py-2 border-b mx-8'>Work Description</p>
                        <p className='py-2 border-b mx-8'>Year</p>
                    </div>

                    <button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-6 px-6 ml-4 mx-auto py-2 text-black'>Learn More</button>

                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-2xl font-bold text-center py-8'>Could be work Title</h2>
                    <p className='text-center text-md font-bold'>image instead</p>
                    <div>
                        <p className='py-2 border-b mx-8'>Work Description</p>
                        <p className='py-2 border-b mx-8'>Year</p>
                    </div>

                    <button className='bg-[#00df9a] w-[100px] text-center rounded-md font-medium my-6 px-6 ml-4 mx-auto py-2 text-black'>Learn More</button>

                </div>

            </div>

        </div>
    )
}

export default Cards