'use server';

import { Resend } from 'resend';
import { getErrorMessage, validateString } from '@/lib/utils';
import ContactEmail from '@/email/contact-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {

  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid email sender!',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid email message!',
    };
  }
  let data;
  try {
    data = await resend.emails.send({      
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'falucho@msn.com',
      subject: 'Message from Portfolio Contact Form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
      return {
        error: getErrorMessage(error),
      };
  }
  return {
    data,
  };
};
