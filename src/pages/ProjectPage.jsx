import React from 'react';
import { projectsPage } from '../utils/data';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const effectInitial = (index) => ({
  x: index % 2 === 0 ? -30 : 30,
  opacity: 0,
});

const effectInView = {
  x: 0,
  opacity: 1,
};

const ProjectPage = () => {
  return (
    <motion.section
      id="projects"
      className="w-full py-10 mdl:py-24 flex flex-col items-center justify-center gap-7 mdl:px-10 xl:px-4 bg-[#eeeeee]"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeIn}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.h2
        className="text-3xl lgl:text-4xl font-bold"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        PROJECTS
      </motion.h2>
      <motion.div
        className="border w-12 h-2 bg-primary-100 rounded-xl"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.4 }}
      ></motion.div>
      <motion.p
        className="lgl:text-lg font-normal tracking-wide sm:text-sm sm:px-4 lg:max-w-[60rem] md:max-w-[45rem] text-center mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology.
      </motion.p>
      <div className="flex flex-col lgl:gap-20 mdl:gap-16 sml:gap-16 sml:mt-10">
        {projectsPage.map((project, index) => (
          <motion.div
            key={index}
            className={`${
              index % 2 === 0
                ? 'flex lgl:flex-row sm:flex-row -translate-x-10 mdl:-translate-x-0 sm:-translate-x-0'
                : 'flex lgl:flex-row-reverse mdl:flex-row-reverse translate-x-10 md:translate-x-0 sm:translate-x-0'
            } lgl:max-w-contentContainer sm:px-10 mdl:flex-col mdl:items-center sm:flex-col sm:items-center justify-center`}
            initial={effectInitial(index)}
            whileInView={effectInView}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="w-full h-[15rem] flex items-center mdl:justify-center mdl:items-center lgl:w-1/2 mdl:w-40% sm:w-30%">
              <motion.img
                src={project.img}
                alt=""
                className="w-[40rem] mt-8 object-contain shadow-md"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <div className={`w-full lgl:w-1/2 flex flex-col gap-2 lgl:justify-between lgl:items-end text-right transform ${index===0?'lgl:-translate-x-10':'lgl:translate-x-10'}`}>
              <motion.p
                className={`w-full text-sm text-primary-100 font-semibold transform lgl:text-right mdl:text-center sm:text-center ${index%2===0 ? '':' lgl:-translate-x-16 mdl:-translate-x-0 sm:-translate-x-0'}`}                
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Featured Project
              </motion.p>
              <motion.h3
                className={`w-full text-xl font-bold lgl:text-right mdl:text-center sm:text-center ${index%2===0 ? '':'lgl:mr-16  mdl:-translate-x-0 sm:-translate-x-0'} `}                
                initial={{ x: 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className={`bg-[#112240] max-h-[14rem] text-sm text-white font-medium md:text-base p-2 md:p-6 rounded-md xs:text-justify`}                
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {project.description}
              </motion.p>
              <motion.ul
                className={`w-full text-xs mdl:justify-center sm:justify-center lgl:justify-end md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5
                -justify-between text-textDark ${index%2===0?"":"lgl:-translate-x-16 mdl:-translate-x-0 sm:-translate-x-0"}`}                
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {project.techStack.map((tech, techIndex) => (
                  <li key={techIndex} className="text-secondary-400 italic">
                    {tech}
                  </li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectPage;
