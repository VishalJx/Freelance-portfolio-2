import React from 'react'

const projectDetails = [
  {
      title: "Speech Transcription with User Diarization",
      description: "Speech transcription system with user diarization that leverages machine learning technologies to provide precise, speaker-labeled transcripts. By integrating OpenAI's Whisper and advanced speaker recognition techniques, the project delivers high-quality transcription that can distinguish between multiple speakers in complex audio environments.",
      techStack: ["Fast API", "Python", "NExtJs"],
      img: "/assets/project-1.png",
  },
  {
      title: "Real-Time Object Detection with YOLOv4",    
      description: "Real-time object detection system that uses the YOLOv4 model to detect and classify objects in images and videos. The project leverages the power of deep learning and computer vision to provide accurate and efficient object detection capabilities that can be used in a wide range of applications.",
      techStack: ["YOLOv4", "Python", "OpenCV"],
      img: "/public/assets/project-2.png",
  },
  {
      title: "Sentiment Analysis with BERT",
      description: "Sentiment analysis system that uses the BERT model to analyze and classify text data based on sentiment. The project leverages the power of natural language processing and deep learning to provide accurate sentiment analysis capabilities that can be used in a wide range of applications.",
      techStack: ["BERT", "Python", "TensorFlow"],
      img: "/public/assets/project-3.png",
  },
  {
      title: "Chatbot with GPT-3",
      description: "Chatbot system that uses the GPT-3 model to generate human-like responses to user queries. The project leverages the power of natural language processing and deep learning to provide conversational capabilities that can be used in a wide range of applications.",
      techStack: ["GPT-3", "Python", "Flask"],
      img: "/public/assets/project-4.png",
  },
  {
      title: "Image Segmentation with U-Net",
      description: "Image segmentation system that uses the U-Net model to segment and classify objects in images. The project leverages the power of deep learning and computer vision to provide accurate image segmentation capabilities that can be used in a wide range of applications.",
      techStack: ["U-Net", "Python", "TensorFlow"],
      img: "/public/assets/project-5.png",
  },
  {
      title: "Recommendation System with Filtering",
      description: "Recommendation system that uses collaborative filtering to provide personalized recommendations to users. The project leverages the power of machine learning and data mining to provide accurate and efficient recommendation capabilities that can be used in a wide range of applications.",
      techStack: ["Collaborative Filtering", "Python", "Scikit-learn"],
      img: "/public/assets/project-6.png",
  }
]

const ProjectPage = () => {
  return (
    <section id='projects' className='w-full py-10 mdl:py-24 
    flex flex-col items-center justify-center gap-7 mdl:px-10 xl:px-4 bg-secondary-700'>
      <h2 className='text-3xl lgl:text-4xl font-bold'>PROJECTS</h2>
      <div className='border w-12 h-2 bg-primary-100 rounded-xl'></div>
      <p className='lgl:text-lg font-normal tracking-wide sm:text-sm sm:px-4 lg:max-w-[60rem] md:max-w-[45rem] text-center mx-auto'>
          Here you will find more information about me, 
          what I do, and my current skills mostly in 
          terms of programming and technology
      </p>
      <div className='flex flex-col gap-20'>
      {
        projectDetails.map((project, index) => (
        <div key={index} className={`${index%2 === 0 ?"flex lgl:flex-row sm:flex-row -translate-x-10 mdl:-translate-x-0 sm:-translate-x-0":"flex lgl:flex-row-reverse mdl:flex-row-reverse translate-x-10 md:translate-x-0 sm:translate-x-0"} lgl:max-w-contentContainer sm:px-10 mdl:flex-col mdl:items-center sm:flex-col sm:items-center justify-center`}>
          <div className={`w-full h-[15rem] flex items-center lgl:w-1/2 mdl:w-40% sm:w-30% `}>
              <img src="/assets/project-1.png" alt="" className={`w-[40rem] mt-8 object-contain shadow-md ${index%2===0?"":""}`}/>
          </div>
          <div className={`w-full lgl:w-1/2 flex flex-col gap-2 lgl:justify-between
              items-end text-right transform lgl:${index%2===0?" lgl:-translate-x-16":" lgl:translate-x-16 mdl:-translate-x-0 sm:-translate-x-0"} z-20`}>
              <p className={`w-full text-sm text-primary-100 font-semibold transform lgl:text-right mdl:text-center sm:text-center ${index%2===0 ? '':' lgl:-translate-x-20 mdl:-translate-x-0 sm:-translate-x-0'}`}>Featured Project</p>
              <h3 className={`w-full text-xl font-bold lgl:text-right mdl:text-center sm:text-center ${index%2===0 ? '':' lgl:-translate-x-20 mdl:-translate-x-0 sm:-translate-x-0'} `}>{project.title}</h3>
              <p className={`bg-[#112240] max-h-[14rem] text-sm text-white font-medium md:text-base p-2 md:p-6 rounded-md xs:text-justify`}>
                  {project.description}
              </p>
              <ul className={`w-full text-xs mdl:justify-center sm:justify-center lgl:justify-end md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5
                      -justify-between text-textDark ${index%2===0?"":"lgl:-translate-x-20 mdl:-translate-x-0 sm:-translate-x-0"}`}>                
                {
                  project.techStack.map((tech, index) => (
                    <li key={index} className='text-secondary-400 italic'>
                      {tech}
                    </li>
                  ))
                }
              </ul>
          </div>
        </div>
        ))
      }
      </div>
    </section>
  )
}

export default ProjectPage