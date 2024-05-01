import React from 'react'

const Second = () => {
  return (
    <div className='flex flex-col '>
        <h1 className='text-center text-3xl font-bold'>Everyday Elegance Get The Most Out Of Your Creed</h1>
       <div className='flex gap-16 mx-auto my-8 flex-wrap justify-center items-center'>
       <div className='relative'>
            <img className=' w-80 h-96 rounded-3xl' src='/first.jpg'/>
            <div className=' bg-black absolute w-full text-center h-40 border-b rounded-b-3xl top-56 text-white'>
            <h1 className='text-2xl font-semibold'>Experience Creed</h1>
            <p className=' font-light'>Use this example to show a CTA button inside the navbar component for marketing advantages and to increase the conversion rate of your website.</p>
            </div>
        </div>
       <div className='relative'>
            <img className=' w-80 h-96 rounded-3xl' src='/s.jpg'/>
            <div className=' bg-black absolute w-full text-center h-40 border-b rounded-b-3xl top-56 text-white'>
            <h1 className='text-2xl font-semibold'>Explore Our Collections</h1>
            <p className=' font-light'>Use this example to show a CTA button inside the navbar component for marketing advantages and to increase the conversion rate of your website.</p>
            </div>
        </div>
       <div className='relative'>
            <img className=' w-80 h-96 rounded-3xl' src='/first.jpg'/>
            <div className=' bg-black absolute w-full text-center h-40 border-b rounded-b-3xl top-56 text-white'>
            <h1 className='text-2xl font-semibold'>Understand Our Craft</h1>
            <p className=' font-light'>Use this example to show a CTA button inside the navbar component for marketing advantages and to increase the conversion rate of your website.</p>
            </div>
        </div>
      
       </div>
    </div>
  )
}

export default Second