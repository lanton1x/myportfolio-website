'use client';

import SectionHeader from "./section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {

  const { ref } = useSectionInView('About');

  return (
    <motion.section 
    ref={ref}
    className='mb-15 max-w-[45rem] text-center leading-6 sm:mb-22 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeader>About Me</SectionHeader>
      <p className='mb-3'>
        <span>I started my IT career in Argentina as a{' '}</span>
        <span className='italic'>mainframe developer</span>
        <span>, working on different IBM platforms at{' '}</span>
        <span className='font-medium'>Banco de Accion Social</span>
        <span>, a financial institution where I became{' '}</span>
        <span className='font-medium'>Lead Developer</span>
        <span>{' '}and{' '}</span>
        <span className='font-medium'>Project Manager</span>
        <span>. In 1992 I graduated as{' '}</span>
        <span className='font-medium'>Systems Analyst</span>
        <span>, with an{' '}</span>
        <span className='italic'>Associate degree</span>
        <span>{' '}in{' '}</span>
        <span className='font-medium'>Computer Science</span>
        <span>, and started my own business, a computer store, and later a Professional Training Center. For many years I worked also as an ESL teacher and professor in Technology and Programming Languages. In 2004 I moved to Spain where I performed as a technician and consultant for local IT companies until 2008, when I{' '}</span>
        <span className='font-medium'>moved to the US</span>
        <span>. In 2009 I started working for{' '}</span>
        <span className='font-medium'>Vesta Corporation</span>
        <span>, a{' '}</span>
        <span className='italic'>payment processing company</span>
        <span>, where I performed public-facing roles prior to being promoted in 2013 to their corporate division as a{' '}</span>
        <span className='italic'>QA-Tester</span>. After going through intensive self-training in{' '}
        <span className='italic'>Software Testing with Automation</span>
        <span>, I also held roles as{' '}</span>
        <span className='italic'>QA Engineer</span>, and{' '}
        <span className='italic'>System Transition Engineer.</span>
      </p>
      <p className='mb-3'>
        <span>During the last 10+ years I performed as a{' '}</span>
        <span className='italic'>Quality Assurance / Quality Engineer</span>{' '}and{' '}
        <span className='italic'>DevOps</span>
        <span>, twice as a contractor for{' '}</span>
        <span className='font-medium'>Nike</span>, the last one providing services as a{' '}
        <span className='italic'>developer</span>{' '}in one of their wholesale departments. Across two terms working for{' '}
        <span className='font-medium'>Intel</span>{' '}as a contractor at their JF3 campus, during the first I performed as a{' '}
        <span className='italic'>Software Quality Engineer with Automation</span>, and{' '}
        <span className='italic'>Project Manager / Program Manager</span> during the second, leading offshore teams.
      </p>
      <p className='mb-3'>
        Back in 2020, I started working on a family project in Argentina, a multi-cloud,  multi-tenant Retail Management System SaaS, to be launched by the end of 2023. The stack for this project is NextJS, React, TypeScript, Tailwind, GraphQL (Apollo Client/GraphQL Yoga Server), Prisma/Grafbase (ORM/GraphQL backend), and PostgresDB/DynamoDB.
      </p>
      <p className='mb-3'>
        I am a strong believer in continuous learning, and am always looking for new challenges to keep myself both motivated and engaged. My every-day life is driven by that genuine passion for learning, to stay as up-to-date as possible with new technologies in the fields of my interest.
      </p>
      <p className='mb-3'>
        Aside from my IT professional life I am an enthusiast guitar player and singer, and together with my wife as PR and agent we enjoy playing and singing at home, and sometimes at local venues in the greater PDX area. We love nature and animals, and we take every opportunity to go hiking in the beautiful Oregon outdoors.
      </p>
    </motion.section>
  )
}
