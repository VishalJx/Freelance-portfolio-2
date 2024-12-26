import React from 'react'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <section id='home' className='w-full bg-home-bg bg-cover h-[91vh] py-10 
    mdl:py-24 flex flex-col items-center justify-center gap-10 lgl:gap-16 mdl:px-10 xl:px-4 bg-gray-200'>
        <motion.h1 
          className='uppercase text-5xl lgl:text-6xl sml:text-3xl sm:text-2xl sm:px-2 font-extrabold mx-auto'
          initial={{opacity: 0, y:10}}
          animate={{opacity: 1, y:0}}
          transition={{delay: 0.5, duration: 0.6}}
          >Hey, I'm Ram Maheshwari
        </motion.h1>
        <motion.p 
          className='lgl:text-lg sm:text-sm sm:px-2 font-medium tracking-wider lgl:max-w-[58rem] md:max-w-[45rem] text-center mx-auto'
          initial={{opacity: 0, y:10}}
          animate={{opacity: 1, y:0}}
          transition={{delay: 0.5, duration: 0.6}}
          >A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
        </motion.p>
        <span className='mx-auto mb-16'>
            <motion.button 
              className='uppercase text-white px-20 py-4 font-extrabold rounded-md tracking-wide bg-primary-100'
              initial={{opacity: 0, y:10}}
              animate={{opacity: 1, y:0}}
              transition={{delay: 0.5, duration: 0.6}}
              >
                Projects
            </motion.button>
        </span>
    </section>
  )
}

export default HomePage