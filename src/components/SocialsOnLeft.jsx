import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'


const SocialsOnLeft = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end
    gap-9">
    <FaInstagram className="text-2xl fixed bottom-[17.3rem]"/>
    <FaLinkedinIn className="text-2xl fixed bottom-[13.3rem]"/>
    <FaGithub className="text-2xl fixed bottom-[9.3rem]"/>
      <div className="w-[2px] h-32 mt-7 bg-secondary-500"></div>
    </div>
  )
}

export default SocialsOnLeft