import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { socialLinks } from '../utils/data'


const SocialsOnLeft = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end
    gap-9">
      <a href={socialLinks[0].link} className='flex justify-center'>
        <FaInstagram className="text-2xl fixed bottom-[17.3rem] hover:text-primary-100 hover:shadow-lg duration-200"/>
      </a>
      <a href={socialLinks[1].link} className='flex justify-center'>
        <FaLinkedinIn className="text-2xl fixed bottom-[12.3rem] hover:text-primary-100 hover:shadow-lg duration-200" />
      </a>
      <a href={socialLinks[2].link} className='flex justify-center'>
        <FaGithub className="text-2xl fixed bottom-[7.3rem] hover:text-primary-100 hover:shadow-lg duration-200"/>
      </a>
      <div className="w-[2px] h-32 mt-7 bg-secondary-500"></div>
    </div>
  )
}

export default SocialsOnLeft