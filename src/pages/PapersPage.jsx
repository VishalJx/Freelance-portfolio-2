import React from 'react'
import { SlPaperClip } from "react-icons/sl";
import { publicationsPage } from '../utils/data';

const PapersPage = () => {

  return (
    <section id='papers' className='w-full py-10 mdl:py-16 
    flex flex-col items-center justify-center gap-7 mdl:px-10 xl:px-4'>
      <h2 className='text-3xl lgl:text-4xl font-bold'>My Publications</h2>
      <div className='border w-12 h-2 bg-primary-100 rounded-xl'></div>
      <p className='lgl:text-lg font-normal tracking-wide sm:text-sm sm:px-4 lg:max-w-[60rem] md:max-w-[45rem] text-center mx-auto'>
        Here you will find a list of my research papers and publications in the field of Computer Science and Information Technology
      </p>
      <div className='w-[80%] lgl:max-w-lgContentContainer flex flex-col mt-12'>
        {
          publicationsPage.map((paper, index) => (
            <div key={index} className='relative w-full flex lgl:flex-row mdl:flex-row sm:flex-col sm:items-center gap-6 border-t-2 border-purple-300 px-4 py-10 lgl:pb-5 sm:pb-4
              hover:bg-purple-100 rounded-xl duration-200'>
              <img 
                className='lgl:w-[30%] object-cover mdl:w-[30%] sm:w-full lgl:h-70 mdl:h-60 sm:h-[8rem] rounded-md'
                src={paper.img}
                alt={paper.title}
                >
              </img>
              <div className='lgl:w-[70%] mdl:w-[70%] sm:w-full flex flex-col gap-5'>
                <h3 
                  className='lgl:text-xl font-semibold text-primary-100 sm:text-lg lgl:text-start mdl:text-start sm:text-center'
                >
                  <a href={paper.link}>
                    {paper.title}
                  </a>
                </h3>
                <p className='text-sm sm:text-justify'>{paper.description}</p>
                <a href={paper.link} className='flex items-center gap-3 text-sm text-primary-100 font-medium'>
                  Read More {'>>>'}
                </a>
                <span>
                  <SlPaperClip className='absolute lgl:right-10 lgl:top-6 sm:right-2 sm:top-2 text-xl text-primary-300'/>
                </span>
                <span></span>
              </div>
            </div>
          ))
        }
      </div>
    </section>
    )
}

export default PapersPage