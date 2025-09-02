import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import GetMarkdownContent from "@/components/readmd";
import { Suspense } from "react";

type Props = {
  params: {
    lang: string;
  };
};
type ComponentProps = {
  introData: {
    contactMe: string;
    downloadMe: string;
    introHtml: string;
  };
  aboutData: {
    aboutHtml: string;
  };
  contactData: {
    contactHtml: string;
  };
};

export default async function Home(props: { params: Promise<{ lang: string }>; }) {
  const params = await props.params;

  const lang = params.lang;

  const getComponentData = async (lang: string) => {
    let contactMe;
    let downloadMe;
    let introHtml;
    let aboutHtml;
    let contactHtml;

    if (lang === 'es') {
      contactMe = 'Contácteme';
      downloadMe = 'Descargar CV';
      introHtml = await GetMarkdownContent('intro-es.md');
      aboutHtml = await GetMarkdownContent('about-es.md');
      contactHtml = await GetMarkdownContent('contact-es.md');
    } else {
      contactMe = 'Contact me';
      downloadMe = 'Download Resume';
      introHtml = await GetMarkdownContent('intro-en.md');
      aboutHtml = await GetMarkdownContent('about-en.md');
      contactHtml = await GetMarkdownContent('contact-en.md');
    }
    ;
    return { contactMe, downloadMe, introHtml, aboutHtml, contactHtml };
  }

  const componentData = await getComponentData(lang);

  return (
    <main className='flex flex-col items-center px-4'>
      <Intro
        params={{ lang: lang }}
        introData={{
          contactMe: componentData.contactMe,
          downloadMe: componentData.downloadMe,
          introHtml: componentData.introHtml
        }}
      />
      <SectionDivider />
      <About
        params={{ lang: lang }}
        aboutData={{
          aboutHtml: componentData.aboutHtml
        }}
      />
      <SectionDivider />
      <Projects params={{ lang: lang }}
      />
      <SectionDivider />
      <Skills params={{ lang: lang }} />
      <SectionDivider />
      <Experience params={{ lang: lang }} />
      <SectionDivider />
      <Suspense fallback={<div>Loading contact section...</div>}>
        <Contact
          params={{ lang: lang }}
          contactData={{
            contactHtml: componentData.contactHtml
          }}
        />
      </Suspense>
    </main>
  )
}
