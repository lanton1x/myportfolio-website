'use client';

import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, titulo, description, descripcion, tags, imageUrl, lang }: ProjectProps & { lang: string }) {
  
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  let cardTitle;
  let cardDescription;

  if (lang === 'es') {
    cardTitle = titulo;
    cardDescription = descripcion;
  } else {
    cardTitle = title;
    cardDescription = description;
  }

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    
  return (
    <motion.section
      ref={ref} 
      style={{ 
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className='group bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 group-even:pl-8 hover:bg-gray-200 transition dark:text-white dark:bg-white/20 dark:hover:bg-white/30 '>
      <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
        <h3 className='text-xl font-semibold'>{cardTitle}</h3>
        <p className='mt-1 mb-1 leading-normal text-base text-gray-700 dark:text-white/60'>{cardDescription}</p>
        <ul className='flex flex-wrap mt-4 gap-1 sm:mt-auto'>
          {tags.map((tag, index) => (
            <li 
              className='bg-black/[0.7] px-3 py-1 text-[0.5rem] uppercase text-white rounded-full dark:text-white/60'
              key={index}
            >{tag}</li>
          ))}
        </ul>
      </div>
      <Image 
        src={imageUrl} 
        alt={"Project I worked on"}
        quality={95}
        className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial]
        group-even:-left-40'
      />
    </motion.section>
  );
}
