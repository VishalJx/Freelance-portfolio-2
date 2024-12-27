import React from 'react'
import { SlPaperClip } from "react-icons/sl";

const PapersPage = () => {

    const paperContent = [
        {
            title: "A Novel Approach for Image Steganography using Cryptography",
            description: "This paper presents a novel approach for image steganography using cryptography. The proposed method uses a combination of cryptography and steganography techniques to hide the secret message within the cover image. The secret message is encrypted using a symmetric key algorithm, and the encrypted message is embedded into the cover image using the least significant bit (LSB) substitution technique. The experimental results show that the proposed method provides a high level of security and robustness against various attacks.",
            date: "Published on 15th June 2021",
            link: "https://www.researchgate.net/publication/352732186_A_Novel_Approach_for_Image_Steganography_using_Cryptography",
            img: "/public/assets/project-1.png",
        },
        {
            title: "A Survey on Image Steganography Techniques",
            description: "This paper presents a survey on image steganography techniques. Image steganography is a method of hiding secret information within an image. The survey covers various image steganography techniques, including LSB substitution, spatial domain techniques, transform domain techniques, and spread spectrum techniques. The paper also discusses the advantages and disadvantages of each technique and provides a comparison of different image steganography methods.",
            date: "Published on 25th May 2021",
            link: "https://www.researchgate.net/publication/352732186_A_Novel_Approach_for_Image_Steganography_using_Cryptography",
            img: "https://www.image.com/image.jpg",
        },
        {
            title: "A Comparative Study of Image Steganography Techniques",
            description: "This paper presents a comparative study of image steganography techniques. Image steganography is a method of hiding secret information within an image. The study compares various image steganography techniques, including LSB substitution, spatial domain techniques, transform domain techniques, and spread spectrum techniques. The paper evaluates the performance of each technique based on factors such as imperceptibility, capacity, robustness, and security.",
            date: "Published on 10th May 2021",
            link: "https://www.researchgate.net/publication/352732186_A_Novel_Approach_for_Image_Steganography_using_Cryptography",
            img: "https://www.image.com/image.jpg",
        }
    ]

  return (
    <section id='papers' className='w-full py-10 mdl:py-16 
    flex flex-col items-center justify-center gap-7 mdl:px-10 xl:px-4'>
      <h2 className='text-3xl lgl:text-4xl font-bold'>My Publications</h2>
      <div className='border w-12 h-2 bg-primary-100 rounded-xl'></div>
      <p className='lgl:text-lg font-normal tracking-wide sm:text-sm sm:px-4 lg:max-w-[60rem] md:max-w-[45rem] text-center mx-auto'>
        Here you will find a list of my research papers and publications in the field of Computer Science and Information Technology
      </p>
      <div className='w-[80%] lgl:max-w-lgContentContainer flex flex-col mt-12'>
        {
          paperContent.map((paper, index) => (
            <div key={index} className='relative w-full flex lgl:flex-row mdl:flex-row sm:flex-col sm:items-center gap-6 border-t-2 border-purple-300 px-4 py-10 lgl:pb-5 sm:pb-4
              hover:bg-purple-100 rounded-xl duration-200'>
              <img 
                className='lgl:w-[30%] object-cover mdl:w-[30%] sm:w-full lgl:h-70 mdl:h-60 sm:h-[8rem] rounded-md'
                src='/assets/project-1.png'
                alt={paper.title}
                >
              </img>
              <div className='lgl:w-[70%] mdl:w-[70%] sm:w-full flex flex-col gap-5'>
                <h3 
                  className='lgl:text-xl font-semibold text-primary-100 sm:text-lg lgl:text-start mdl:text-start sm:text-center'
                >
                  <a href={paper.link}>
                    {paper.title}
                  </a>
                </h3>
                <p className='text-sm sm:text-justify'>{paper.description}</p>
                <a href={paper.link} className='flex items-center gap-3 text-sm text-primary-100 font-medium'>
                  Read More {'>>>'}
                </a>
                <span>
                  <SlPaperClip className='absolute lgl:right-10 lgl:top-6 sm:right-2 sm:top-2 text-xl text-primary-300'/>
                </span>
                <span></span>
              </div>
            </div>
          ))
        }
      </div>
    </section>
    )
}

export default PapersPage