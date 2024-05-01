import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { RiShoppingBag3Line } from "react-icons/ri";
const Navbar = () => {
  return (
    <div>
        <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center flex gap-3 md:gap-6">
       <div className='text-md font-semibold'>INFO</div>
       <div className='text-md font-semibold'>EXPLORE</div>
       <div className='text-md font-semibold'>ENQ</div>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
                <img  style={{
          backgroundColor: "black",
          opacity: 0.8,
          position: "relative",
        }} className='mb-16 w-44 h-32 shadow-xl' src='/creed-removebg.png'/>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">

          <div className="hidden sm:flex gap-3">
           <IoPersonOutline/>
                |  
               <RiShoppingBag3Line/>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
    </div>
  )
}

export default Navbar