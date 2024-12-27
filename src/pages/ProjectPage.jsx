import React from 'react'
import { projectsPage } from '../utils/data'


const ProjectPage = () => {
  return (
    <section id='projects' className='w-full py-10 mdl:py-24 
    flex flex-col items-center justify-center gap-7 mdl:px-10 xl:px-4 bg-secondary-700'>
      <h2 className='text-3xl lgl:text-4xl font-bold'>PROJECTS</h2>
      <div className='border w-12 h-2 bg-primary-100 rounded-xl'></div>
      <p className='lgl:text-lg font-normal tracking-wide sm:text-sm sm:px-4 lg:max-w-[60rem] md:max-w-[45rem] text-center mx-auto'>
          Here you will find more information about me, 
          what I do, and my current skills mostly in 
          terms of programming and technology
      </p>
      <div className='flex flex-col gap-20'>
      {
        projectsPage.map((project, index) => (
        <div key={index} className={`${index%2 === 0 ?"flex lgl:flex-row sm:flex-row -translate-x-10 mdl:-translate-x-0 sm:-translate-x-0":"flex lgl:flex-row-reverse mdl:flex-row-reverse translate-x-10 md:translate-x-0 sm:translate-x-0"} lgl:max-w-contentContainer sm:px-10 mdl:flex-col mdl:items-center sm:flex-col sm:items-center justify-center`}>
          <div className={`w-full h-[15rem] flex items-center lgl:w-1/2 mdl:w-40% sm:w-30% `}>
              <img src={project.img} alt="" className={`w-[40rem] mt-8 object-contain shadow-md ${index%2===0?"":""}`}/>
          </div>
          <div className={`w-full lgl:w-1/2 flex flex-col gap-2 lgl:justify-between
              items-end text-right transform lgl:${index%2===0?" lgl:-translate-x-16":" lgl:translate-x-16 mdl:-translate-x-0 sm:-translate-x-0"} z-20`}>
              <p className={`w-full text-sm text-primary-100 font-semibold transform lgl:text-right mdl:text-center sm:text-center ${index%2===0 ? '':' lgl:-translate-x-20 mdl:-translate-x-0 sm:-translate-x-0'}`}>Featured Project</p>
              <h3 className={`w-full text-xl font-bold lgl:text-right mdl:text-center sm:text-center ${index%2===0 ? '':' lgl:-translate-x-20 mdl:-translate-x-0 sm:-translate-x-0'} `}>{project.title}</h3>
              <p className={`bg-[#112240] max-h-[14rem] text-sm text-white font-medium md:text-base p-2 md:p-6 rounded-md xs:text-justify`}>
                  {project.description}
              </p>
              <ul className={`w-full text-xs mdl:justify-center sm:justify-center lgl:justify-end md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5
                      -justify-between text-textDark ${index%2===0?"":"lgl:-translate-x-20 mdl:-translate-x-0 sm:-translate-x-0"}`}>                
                {
                  project.techStack.map((tech, index) => (
                    <li key={index} className='text-secondary-400 italic'>
                      {tech}
                    </li>
                  ))
                }
              </ul>
          </div>
        </div>
        ))
      }
      </div>
    </section>
  )
}

export default ProjectPage