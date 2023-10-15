'use client';

import { useSectionInView } from "@/lib/hooks";
import SectionHeader from "./section-header";
import React, { use, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";

export default function Contact() {

  const { ref } = useSectionInView('Contact', 0.5);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-15 scroll-mt-28 mb-15 sm:mb-22 w-[min(100%,38rem)]'
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      transition={{ duration: 1, }}
      viewport={{ once: true }}
    >
      <SectionHeader>
        Contact Me
      </SectionHeader>
      <div
        className='flex flex-wrap text-center justify-center'>
        <p className='text-gray-700 dark:text-white/80'
        >I am open for consulting roles, as well as to any REMOTE part-time or full-time opportunity. You can email me anytime at{' '}
          <span><a
            href="mailto:falucho@msn.com"
            className="text-blue-500"
          >falucho@msn.com</a>
          </span>
          <span>, or using the form below. You can also reach me Monday through Friday during business hours at my cell phone number{' '}</span>
          <span><a
            href="tel:+1-503-807-3270"
            className="text-blue-500"
            >+1 (503) 807-3270</a>.
          </span>
        </p>
      </div>
      <form
        ref={formRef}
        className='mt-10 flex flex-col mb-[10rem] dark:text-black/80'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email sent successfully!');
          formRef.current?.reset();
        }}
      >
        <input 
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder="Your email address"
        />
        <textarea
          className='h-52 rounded-lg my-3 borderBlack p-4 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          placeholder='Your message...'
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}