'use client';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div className='bg-gray-400 my-28 h-4 w-12 rounded-full hidden sm:block'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.12,
      }}
    ></motion.div>
  )
}
