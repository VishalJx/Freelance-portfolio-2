import React from 'react';
import { aboutPage } from '../utils/data';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const effectInitial = (index) => ({
    x: index % 2 === 0 ? -30 : 30,
    opacity: 0,
  });

  const effectInView = {
    x: 0,
    opacity: 1,
  };

  const transitionEffect = {
    duration: 0.8,
  };

  return (
    <motion.section
      id="about"
      className="w-full py-10 mdl:py-24 flex flex-col items-center justify-center gap-7 mdl:px-10 xl:px-4 bg-secondary-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl lgl:text-4xl font-bold"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transitionEffect}
      >
        ABOUT ME
      </motion.h2>
      <motion.div
        className="border w-12 h-2 bg-primary-100 rounded-xl"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={transitionEffect}
      />
      <motion.p
        className="lgl:text-lg font-normal tracking-wide sm:text-sm sm:px-4 lg:max-w-[60rem] md:max-w-[45rem] text-center mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transitionEffect}
      >
        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
      </motion.p>
      <div className="flex w-full lgl:max-w-lgContentContainer flex-col gap-10 lgl:gap-4 lgl:flex-row mt-12">
        <motion.div
          className="lgl:w-1/2 flex flex-col lgl:gap-8 items-center lgl:items-start gap-3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transitionEffect}
        >
          <h3 className="font-bold text-2xl">Get to know me!</h3>
          <div className="flex flex-col lgl:items-start items-center gap-5">
            {aboutPage.description.map((desc, index) => (
              <motion.h4
                key={index}
                className="tracking-wider lgl:text-base mdl:text-base sm:text-sm sm:px-4"
                initial={effectInitial(index)}
                whileInView={effectInView}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {desc}
              </motion.h4>
            ))}
            <motion.a
              className="uppercase text-white px-10 py-3 font-extrabold rounded-lg tracking-wide bg-primary-100 mt-4 lgl:mt-6 hover:bg-primary-200 hover:shadow-lg duration-200"
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={transitionEffect}
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="lgl:w-1/2 flex flex-col gap-5 lgl:gap-8 items-center lgl:items-start mt-5 lgl:mt-0 lgl:ml-16 lgl:pl-7"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transitionEffect}
        >
          <h3 className="font-bold text-2xl">My Skills</h3>
          <div className="flex flex-wrap gap-4 justify-center lgl:justify-start">
            {aboutPage.skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-wrap gap-5"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="border px-4 py-2 bg-gray-300 font-semibold rounded-lg sm:text-sm sm:px-3">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
