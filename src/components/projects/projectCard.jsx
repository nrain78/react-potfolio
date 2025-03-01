import React from 'react'
import LikeButton from '../like-button/like-button'

function ProjectCard({ title, main, demoLink, sourceLink }) {
    return (
        <div className='p-2 md:p-2 flex flex-col items-center ml-5 w-80 bg-[#444146] 
        shadow-xl shadow-slate-700 rounded-2xl'>
            <img src="/card.avif" alt="" className='p-4' />
            <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
                {title}
            </h3>
            <p className='px-4 text-sm md:text-md py-2'>
                {main}
            </p>
            <div className='mt-2 p-2 md:p-2 flex justify-center gap-2 md:gap-4'>
                <a href={demoLink} target='_blank' rel='noreferrer'>
                <button className='md:mt-10 text-white py-4 px-4 md:text-lg md:py-3 md:px-5 
                 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-2xl
                 bg-purple-900'>Demo
                 </button>
                </a>
                 <a href={sourceLink}>
                 <button className='md:mt-10 text-white py-4 px-4 md:text-lg md:py-3 md:px-5 
                 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl
                 bg-purple-900'>Source Code
                 </button>
                 </a>
            </div>
            {/* Here we are including the LikeButton component */}
            <div >
                <LikeButton />
            </div>
        </div>
    )
}

export default ProjectCard