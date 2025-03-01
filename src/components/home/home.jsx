import React from 'react'
import AutoText from '../auto-text/auto-text'

const Home = () => {
  return (
  <>
  <div className="flex flex-col sm:flex-row  justify-center items-center h-[calc(100vh-64px)] px-8 ">
  
  <div className="text-center sm:text-left sm:max-w-md ">
    <h1 className="text-2xl sm:text-[2.4rem] font-sans font-bold text-gray-900 drop-shadow-md mb-4">
      Welcome to my Portfolio!
    </h1>
    <p className="text-lg text-center sm:text-3xl text-black font-sans ">
      I am <span className="inline-block  text-blue-900 text-2xl font-medium"><AutoText /></span>
    </p>
      {/* button */}
    <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4
                hover-opacity-80 duration-300 hover:scale-105 font-semibold rounded-3xl bg-purple-900'>
                    Contact Me</button>
  </div>

  {/* Image Section */}
  <div className="mt-8 sm:mt-0 sm:ml-8">
    <img src="/home.png" alt="Profile Image" className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-full shadow-lg" />
  </div>

  
</div>

  </>

  )
}

export default Home