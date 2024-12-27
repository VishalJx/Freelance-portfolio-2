import React from 'react';
import { motion } from 'framer-motion';
import { SlPaperClip } from "react-icons/sl";
import { publicationsPage } from '../utils/data';

const PapersPage = () => {
  const effectInitial = (index) => {
    return {
      x: index % 2 === 0 ? -100 : 100,
      opacity: 0,
    };
  };

  const effectInView = (index) => {
    return {
      x: 0,
      opacity: 1,
    };
  };

  return (
    <section
      id="papers"
      className="w-full py-10 mdl:py-20 lgl:mt-0 mdl:mt-0 sm:mt-10 
      flex flex-col items-center justify-center gap-7 mdl:px-10 xl:px-4"
    >
      <motion.h2
        className="text-3xl lgl:text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Publications
      </motion.h2>
      <motion.div
        className="border w-12 h-2 bg-primary-100 rounded-xl"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      ></motion.div>
      <motion.p
        className="lgl:text-lg font-normal tracking-wide sm:text-sm sm:px-4 lg:max-w-[60rem] md:max-w-[45rem] text-center mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        Here you will find a list of my research papers and publications in the
        field of Computer Science and Information Technology.
      </motion.p>
      <motion.div
        className="w-[80%] lgl:max-w-lgContentContainer flex flex-col mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        {publicationsPage.map((paper, index) => (
          <motion.div
            key={index}
            className="relative w-full flex lgl:flex-row mdl:flex-row sm:flex-col sm:items-center gap-6 border-t-2 border-purple-300 px-4 py-10 lgl:pb-5 sm:pb-4
              hover:bg-purple-100 rounded-xl duration-200"
            initial={effectInitial(index)}
            whileInView={effectInView(index)}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              className="lgl:w-[30%] object-cover mdl:w-[30%] sm:w-full lgl:h-70 mdl:h-60 sm:h-[8rem] rounded-md"
              src={paper.img}
              alt={paper.title}
            ></img>
            <div className="lgl:w-[70%] mdl:w-[70%] sm:w-full flex flex-col gap-5">
              <motion.h3
                className="lgl:text-xl font-semibold text-primary-100 sm:text-lg lgl:text-start mdl:text-start sm:text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <a href={paper.link}>{paper.title}</a>
              </motion.h3>
              <motion.p
                className="text-sm sm:text-justify"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {paper.description}
              </motion.p>
              <motion.a
                href={paper.link}
                className="flex items-center gap-3 text-sm text-primary-100 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Read More {'>>>'}
              </motion.a>
              <SlPaperClip className="absolute lgl:right-10 lgl:top-6 sm:right-2 sm:top-2 text-xl text-primary-300" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PapersPage;
