export default function Footer () {
  return (
    <footer className='mb-8 px-4 text-center text-gray-500'>
      <small className='mb-2 block text-xs'>© 2023 Luis Flores. All rights reserved.</small>

      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> Site built with <a href="https://nextjs.org/">Next.js</a>, <a href="https://www.typescriptlang.org/">TypeScript</a>, <a href="https://tailwindcss.com/">Tailwind CSS</a>, <a href="https://www.framer.com/motion/">Framer Motion</a>, <a href="https://resend.com/docs/api-reference/emails/send-email">React Email & Resend</a>, and is hosted on <a href="https://vercel.com">Vercel</a>. 
        <p>Default language: English-US. Spanish automatically rendered based on user preference (browser setup).</p>
      </p>
    </footer>
  );
}