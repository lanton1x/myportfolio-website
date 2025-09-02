"use client"

import { useSectionInView } from "@/lib/hooks"
import SectionHeader from "./section-header"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import SubmitButton from "./submit-button"
import toast from "react-hot-toast"

type ContactProps = {
  params: {
    lang: string
  }
  contactData: {
    contactHtml: string
  }
}

export default function Contact({ params, contactData }: ContactProps) {
  const { ref } = useSectionInView("#contact", 0.5)
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const lang = params.lang
  const sectionTitle = lang === "es" ? "Contácteme" : "Contact me"
  const contactHtml = contactData.contactHtml

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)

    try {
      const senderEmail = formData.get("senderEmail") as string
      const message = formData.get("message") as string

      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderEmail,
          message,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send email")
      }

      toast.success("Email sent successfully! I will get back to you as soon as possible.")
      formRef.current?.reset()
    } catch (error) {
      console.error("Error sending email:", error)
      toast.error(error instanceof Error ? error.message : "Failed to send email")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-15 scroll-mt-28 mb-15 sm:mb-22 w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeader>{sectionTitle}</SectionHeader>
      <div className="flex flex-wrap text-left justify-center">
        <div className="text-gray-700 dark:text-white/80">
          <div>
            {contactHtml ? (
              <div>
                <span dangerouslySetInnerHTML={{ __html: contactHtml }} />
                <p>
                  <span>
                    <a href="tel:+1-503-807-3270" className="text-blue-500">
                      +1 (503) 807-3270
                    </a>
                  </span>
                </p>
              </div>
            ) : (
              <span>Loading contact information...</span>
            )}
          </div>
        </div>
      </div>
      <form ref={formRef} className="mt-10 flex flex-col mb-[10rem] dark:text-black/80" action={handleSubmit}>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={`${lang === "es" ? "Su dirección de correo electrónico" : "Your email address"}`}
          disabled={isSubmitting}
        />
        <textarea
          className="h-52 rounded-lg my-3 borderBlack p-4 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder={`${lang === "es" ? "Su mensaje..." : "Your message..."}`}
          required
          maxLength={5000}
          disabled={isSubmitting}
        />
        <SubmitButton params={{ lang: lang }} isSubmitting={isSubmitting} />
      </form>
    </motion.section>
  )
}
