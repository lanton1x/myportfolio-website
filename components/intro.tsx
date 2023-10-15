'use client';

import Image from "next/image";
import My_Picture from "/public/My_Picture.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {

  const { ref } = useSectionInView('Home', 0.5);
  const {
    setActiveSection,
    setTimeOfLastClick,
  } = useActiveSectionContext();

  return (
    <section 
      ref={ref}
      id='home' 
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "tween", duration: 0.2 }}
          >
            <Image 
              src={My_Picture} 
              width='192' 
              height='192' 
              quality='95' 
              priority={true}
              alt='Luis Flores Portrait' 
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl border-opacity-40 shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-32 sm:w-32 sm:border-[0.25rem] sm:backdrop-blur-[0.25rem]'
            />
          </motion.div>
        </div>
      </div>
      <div>
        <motion.h1 
          className='mt-4 text-center text-3xl font-bold text-gray-950 sm:text-4xl dark:text-white/80'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >Luis Flores</motion.h1>
        <motion.p 
          className='mb-10 mt-8 px-4 text-1.5xl font-medium text-gray-600 !leading-[1.5] sm:text-2xl dark:text-white/80'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>I am a seasoned{' '}</span>
          <span className='font-bold'>QA Engineer/DevOps, Full Stack Developer,</span>{' '}and{' '}
          <span className='font-bold'>Entrepreneur</span> with{' '}
          <span className='font-bold'>20+ years{' '}</span>experience on multiple platforms, from{' '}
          <span className='italic'>Mainframe</span> to{' '}
          <span className='italic'>Edge</span> and{' '}
          <span className='italic'>Cloud Computing,</span> across several domains. I enjoy creating{' '}
          <span className='italic'>testing strategies</span> and{' '} 
          <span className='italic'>automation frameworks</span>, and as a developer enthusiast, delivering solutions created with{' '}
          <span className='italic font-bold'>React</span> and{' '}
          <span className='italic font-bold'>NextJS.</span>
        </motion.p>
      </div>
      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium mb-10'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}>
        <Link href='#contact' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:bg-purple-800 transition'
        onClick={() => {
          setActiveSection('Contact');
          setTimeOfLastClick(Date.now());
        }}>Contact me{' '}<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>
        <a 
          className='group bg-white rounded-full px-7 py-3 flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-200 group-active:bg-purple-600 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='/CV.pdf'
          download='Luis_Flores_CV.pdf'
          target='_blank'
        >
          Download CV{' '}<HiDownload 
            className='opacity-60 group-hover:translate-y-1 transition' />
        </a>
        <a 
          className='bg-white rounded-full px-6 text-gray-700 flex items-center gap-2 text-[1.5rem] focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-200 hover:text-gray-950 group-active:bg-purple-600 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://www.linkedin.com/in/luis-a-flores' 
          target='_blank'
        >
          <BsLinkedin />
        </a>
        <a className='bg-white rounded-full px-6 text-gray-700 flex items-center gap-2 text-[1.5rem] focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-200 hover:text-gray-950 group-active:bg-purple-600 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60' href='https://github.com/lanton1x' target='_blank'>
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
