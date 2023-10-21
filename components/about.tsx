'use client';

import SectionHeader from "./section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

type AboutProps = {
  params: {
    lang: string;
  };
  aboutData: {
    aboutHtml: React.ReactElement;
  };
};

export default function About({ params, aboutData }: AboutProps) {

  const { ref } = useSectionInView('#about');
  const sectionTitle = params.lang === 'es' ? 'Mi Trayectoria' : 'About Me';
  const aboutHtml: React.ReactElement = aboutData.aboutHtml;

  return (
    <motion.section 
    ref={ref}
    className='mb-15 max-w-[45rem] text-center leading-6 sm:mb-22 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeader>{sectionTitle}</SectionHeader>
        <div dangerouslySetInnerHTML={{ __html: aboutHtml }} />
    </motion.section>
  )
}
