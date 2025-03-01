import React from 'react'
import ProjectCard from './projectCard'
import LikeButton from '../like-button/like-button'

function Projects() {
  return (
    <div className='p-10 md:p-24 text-white' id='project'>
      <h1 className='text-2xl md:text-4xl font-bold'>Projects</h1>
      <div className='py-9 px-6 flex flex-wrap gap-3'>
        <ProjectCard title="CRUD OPERATIONS" main="In this I build a CRUD operation using Firebase"
         demoLink="https://merry-blancmange-990837.netlify.app/"
         sourceLink="https://github.com/nrain78/crud-oper.git"/>
        <ProjectCard title="kababjees Website" main="In this project I build a webiste of Kababjees using Html, Css and Javascript"
        demoLink=" https://lnkd.in/eCsbh6Q5"
        sourceLink="https://github.com/nrain78/Kababjess-website-saylani.git"/>
        <ProjectCard title="TODO-APP" main="In this I build a todo app using ReactJS and Tailwind CSS"
        demoLink=""
        sourceLink="https://lnkd.in/e8v9T8fq"/>
       {/* Positioning the Like Button */}
      <LikeButton />
      </div>
    </div>
  )
}

export default Projects