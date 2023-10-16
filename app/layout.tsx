import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luis Flores | Portfolio',
  description: 'Full Stack Developer, QA Engineer/DevOps and Entrepreneur',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-indigo-50 text-gray-950 relative pt-28 sm:pt-32 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#ede9fe] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#f3e8ff] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster 
              position='top-right'
              toastOptions={{
                duration: 8000,
              }}
              />
            <Footer />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  )
}
