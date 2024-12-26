import React from 'react'

const AboutPage = () => {

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Bootstrap",
        "Framer Motion",
        "React Router",
        "Redux",
        "Context API",
        "Firebase",
        "Node.js",
    ]

  return (
    <section id='about' className='w-full py-10 mdl:py-24 
    flex flex-col items-center justify-center gap-7 mdl:px-10 xl:px-4 bg-secondary-700'>
        <h2 className='text-3xl lgl:text-4xl font-bold'>ABOUT ME</h2>
        <div className='border w-12 h-2 bg-primary-100 rounded-xl'></div>
        <p className='lgl:text-lg font-normal tracking-wide sm:text-sm sm:px-4 lg:max-w-[60rem] md:max-w-[45rem] text-center mx-auto'>
            Here you will find more information about me, 
            what I do, and my current skills mostly in 
            terms of programming and technology
        </p>
        <div className='flex w-full lgl:max-w-lgContentContainer flex-col gap-10 lgl:gap-4 lgl:flex-row mt-12'>
            <div className='lgl:w-1/2 flex flex-col lgl:gap-8 items-center lgl:items-start gap-3'>
                <h3 className='font-bold text-2xl'>Get to know me!</h3>
                <div className='flex flex-col lgl:items-start items-center gap-5'>
                    <h4 className='tracking-wider sm:text-sm sm:px-4'>
                        I'm a Frontend Focused Web Developer building 
                        and managing the Front-end of Websites and 
                        Web Applications that leads to the success of 
                        the overall product. Check out some of my work 
                        in the Projects section.
                    </h4>
                    <h4 className='tracking-wider sm:text-sm sm:px-4'>
                        I also like sharing content related to the stuff 
                        that I have learned over the years in Web Development
                        so it can help other people of the Dev Community. 
                        Feel free to Connect or Follow me on my Linkedin and 
                        Instagram where I post useful content related to Web 
                        Development and Programming 
                    </h4>
                    <h4 className='tracking-wider sm:text-sm sm:px-4'>
                        I'm open to Job opportunities where I can contribute, 
                        learn and grow. If you have a good opportunity that 
                        matches my skills and experience then don't hesitate 
                        to contact me.
                    </h4>
                    <button className='uppercase text-white px-10 py-3 font-extrabold rounded-lg tracking-wide bg-primary-100 mt-4 lgl:mt-6'>
                        Contact
                    </button>
                </div>
            </div>
            <div className='lgl:w-1/2 flex flex-col gap-5 lgl:gap-8 items-center lgl:items-start mt-5 lgl:mt-0 lgl:ml-16 lgl:pl-7'>
                <h3 className='font-bold text-2xl'>My Skills</h3>
                <div className='flex flex-wrap gap-4 justify-center lgl:justify-start'>
                    {
                        skills.map((skill, index) => (
                            <div key={index} className='flex flex-wrap gap-5'>
                                <span className='border px-4 py-2 bg-gray-300 font-semibold rounded-lg sm:text-sm sm:px-3'>{skill}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutPage