'use client';

import { useSectionInView } from '@/lib/hooks';
import React from 'react'
import SectionHeader from './section-header';
import { skillsData } from '@/lib/data';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

export default function Skills({ params }: { params: { lang: string } }) {

  const { ref } = useSectionInView('#skills', 0.5);
  const sectionTitle = params.lang === 'en' ? 'My Skills' : 'Mis Habilidades';

  return (
    <section 
      ref={ref}
      className='mb-15 max-w-[53rem] text-center sm:mb-22 scroll-mt-28 capitalize'
      id='skills'
    >
      <SectionHeader>{sectionTitle}</SectionHeader>
      <div>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
          {
            skillsData.map((skill, index) => (
              <motion.li 
                key={index} 
                className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
