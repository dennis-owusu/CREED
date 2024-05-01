import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Third = () => {
  return (
    <div className='flex flex-col'>
        <h1 className='text-center text-3xl font-bold'>Complete Your Order with Confidence</h1>
        <div className='flex my-9 flex-col justify-center items-center mx-auto w-full lg:flex-row'>
            {/* Left */}
            <div className='flex-1 justify-center items-center'>
                <img className='justify-center w-96 h-96 mx-auto rounded-3xl' src='/s.jpg'/>
            <div className='flex gap-6 mt-3 justify-center'>
                        <img className='w-24 h-24 rounded-3xl' src='/first.jpg'/>
                        <img className='w-24 h-24 rounded-3xl' src='/s.jpg'/>
                        <img className='w-24 h-24 rounded-3xl' src='/first.jpg'/>
                    </div>
            </div>
            <div className='flex-1 my-9 justify-center items-center mx-auto text-center'>
                {/* Right */}
                <h1 className='text-3xl font-bold'>Creed: Green irish Tweed</h1>
                <p>Use this example to show a CTA button</p>
                <p className='my-3'>Elevate your essence with our signature collection of finely crafted fragrances
                your essence with our signature collection of finely crafted fragrances
                </p>
                <div className='flex flex-col justify-center items-center'>
                <div className='bg-black text-white rounded-2xl my-9 px-16 lg:ml[460px] sm:ml-0'>
                    <p className='text-center'>Complete Your Order with Confidence</p>
                    <h1 className='font-bold text-2xl py-3'>GHC 1,500</h1>
                </div>
                <div className='border-2 border-black flex justify-center rounded-3xl mx-auto py-1 gap-9 px-1'>
                    <button className='bg-gray-400 rounded-[50%] w-10 h-10'><FaPlus className='ml-3'/></button>
                    <span className='text-2xl font-semibold h-4 mt-1'>1</span>
                    <button className='bg-gray-400 rounded-[50%] w-10 h-10'><FaMinus className='ml-3'/></button>
                </div>
                </div>
                <div className='flex flex-col gap-3 mt-3 max-w-80 mx-auto'>
                        <button className='bg-black text-white py-2 rounded-2xl'>Add to cart</button>
                        <button className='bg-black text-white py-2 rounded-2xl flex justify-center gap-3'>Buy with <span><FcGoogle className='mt-1'/></span> pay</button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Third