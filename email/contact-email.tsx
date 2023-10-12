import React from 'react';
import {
  Html,
  Head,
  Body,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind';

type ContactEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactEmail({ message, senderEmail }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Email message from my portfolio page</Preview>
      <Tailwind>
        <Body className='bg-gray-100 text-black'>
          <Container>
            <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
              <Heading className='leading-tight'>Message received from my portfolio contact form</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Sender's email: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}