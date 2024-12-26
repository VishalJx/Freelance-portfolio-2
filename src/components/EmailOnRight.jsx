import React from "react"
import {FiMail} from "react-icons/fi"

function EmailOnRight(){
  return (
    <div className="w-full h-full flex flex-col items-center justify-end
    gap-9">
      <FiMail className="text-2xl fixed bottom-[21.3rem]"/>
      <a href="mailto:itsmevishal360@gmail.com">
        <h6 className="text-sm rotate-90 w-72 tracking-wide font-semibold bottom-5">itsmevishal360@gmail.com</h6>
      </a>
      <div className="w-[2px] h-32 mt-7 bg-secondary-500"></div>
    </div>
  )
};

export default EmailOnRight;