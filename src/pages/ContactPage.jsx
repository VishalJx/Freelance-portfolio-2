import React from 'react'
import { motion } from 'framer-motion'

const ContactPage = () => {
  return (
    <section id='contact' className='w-full py-10 mdl:py-24 
    flex flex-col items-center justify-center gap-7 mdl:px-10 xl:px-4 bg-secondary-700'>
        <h2 className='text-3xl lgl:text-4xl font-bold'>CONTACT ME</h2>
        <div className='border w-12 h-2 bg-primary-100 rounded-xl'></div>
        <p className='lgl:text-lg font-normal tracking-wide sm:text-sm sm:px-4 lg:max-w-[60rem] md:max-w-[45rem] text-center mx-auto'>
            Here you will find more information about me, 
            what I do, and my current skills mostly in 
            terms of programming and technology
        </p>
        <form 
          className='w-full lgl:w-[40%] sml:w-[70%] flex flex-col gap-8 bg-secondary-100 h-[60vh] p-8 rounded-lg shadow-lg'
          action='https://formspree.io/f/mqakjvke'
          method='POST'
        >
          <div className='flex flex-col gap-3'>
            <label htmlFor="name" className='text-sm font-semibold'>Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder='Enter Your Name' 
              className='bg-secondary-700 text-secondary-500 border rounded-md p-4 outline-none'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor="email" className='text-sm font-semibold'>Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder='Enter Your Email' 
              className='bg-secondary-700 text-secondary-500 border rounded-md p-4 outline-none'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor="message" className='text-sm font-semibold'>Message</label>
            <textarea 
              name="message" 
              id="message" 
              placeholder='Enter Your Message' 
              className='bg-secondary-700 text-secondary-500 border rounded-md p-4 outline-none'
            />
          </div>
          <motion.button 
              className='uppercase text-white px-20 py-4 font-extrabold rounded-md tracking-wide bg-primary-100 hover:bg-primary-200 hover:shadow-lg duration-200'
              type="submit"
              initial={{opacity: 0, y:10}}
              animate={{opacity: 1, y:0}}
              transition={{delay: 0.5, duration: 0.6}}
              >
                Submit
            </motion.button>
        </form>
    </section>  )
}

export default ContactPage