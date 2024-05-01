

const First = () => {
  return (
    <>
    <div className='flex md:flex-row gap-12 flex-col-reverse my-6 items-center'>
        {/* Left */}
        <div className='flex-1 text-center my-14'>
            <h1 className='text-3xl text-center md:text-4xl font-bold flex flex-col gap-2'>Discover Timeless <span>Elegance with Creed</span></h1>
            <p className='my-7 font-md mx-auto items-center text-wrap'>Elevate your essence with our signature collection of finely crafted fragrances</p>
            <button className='text-white bg-black w-56 py-2'>BUY NOW</button>
        </div>
        {/* Right */}
        <div className='flex-1 items-center'>
            <img className='md:w-3/4 w-96 justify-center md:h-[450px] object-cover rounded-3xl' src='/first.jpg'/>
        </div>
    </div>
    <div className="border-b-4 border-gray-400 mb-9">
    <div className='flex justify-center gap-56 my-7 flex-wrap mb-16'>
        <div className='relative'>
        <div className='border-4 border-black rounded-full'>
        <img className='w-28 h-28 rounded-full border-2 border-black m-1' src='/s.jpg'/>
    </div>
        <div className="absolute font-semibold flex gap-2 text-center mr-4">
       Seasonal <span>Scents</span>
    </div>
        </div>
        <div className='relative'>
        <div className='border-4 border-black rounded-full'>
        <img className='w-28 h-28 rounded-full border-2 border-black m-1' src='/first.jpg'/>
    </div>
        <div className="absolute font-semibold flex gap-2 text-center mr-4">
        Travel <span>with</span><span> Creed</span>
    </div>
        </div>
        <div className='relative'>
        <div className='border-4 border-black rounded-full'>
        <img className='w-28 h-28 rounded-full border-2 border-black m-1' src='/spr.jpg'/>
    </div>
        <div className="absolute flex gap-2 font-semibold text-center mr-4">
      24/7 <span>Support</span>
    </div>
        </div>
        <div className='relative'>
        <div className='border-4 border-black rounded-full'>
        <img className='w-28 h-28 rounded-full border-2 border-black m-1' src='/sp.jpg'/>
    </div>
        <div className="absolute flex gap-2 text-center font-semibold mr-4">
      One <span>Spray</span><span> wonder</span>
    </div>
        </div>
       
    </div>
    </div>
    </>
    
  )
}

export default First