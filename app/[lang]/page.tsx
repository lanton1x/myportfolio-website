import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import GetMarkdownContent from "@/components/readmd";

type Props = {
  params: {
    lang: string;
  };
};
type ComponentProps = {
  introData: {
    contactMe: string;
    downloadMe: string;
    introHtml: React.ReactElement;
  };
  aboutData: {
    aboutHtml: React.ReactElement;
  };
  contactData: {
    contactHtml: React.ReactElement;
  };
};

export default async function Home({ params }: { params: { lang: string }; }) {

  const lang = params.lang;

  const getComponentData = async ( lang: string ) => {
    let contactMe = 'Contact me';
    let downloadMe = 'Download Resume';
    let introHtml = await GetMarkdownContent('intro-en.md');
    let aboutHtml = await GetMarkdownContent('about-en.md');
    let contactHtml = await GetMarkdownContent('contact-en.md');

    if (lang === 'es') {
      contactMe = 'Contácteme';
      downloadMe = 'Descargar CV';
      introHtml = await GetMarkdownContent('intro-es.md');
      aboutHtml = await GetMarkdownContent('about-es.md');
      contactHtml = await GetMarkdownContent('contact-es.md');
    };
    return { contactMe, downloadMe, introHtml, aboutHtml, contactHtml };
  }

  const componentData = await getComponentData(lang);

  return (
    <main className='flex flex-col items-center px-4'>
      <Intro 
        params={{lang: lang}} 
        introData={{
          contactMe: componentData.contactMe, 
          downloadMe: componentData.downloadMe, 
          introHtml: componentData.introHtml}}
      />
      <SectionDivider />
      <About 
        params={{lang: lang}} 
        aboutData={{
          aboutHtml: componentData.aboutHtml}}
      />
      <SectionDivider />
      <Projects params={{lang: lang}} 
      />      
      <SectionDivider />
      <Skills params={{lang: lang}} />
      <SectionDivider />
      <Experience params={{lang: lang}} />
      <SectionDivider />
      <Contact 
        params={{lang: lang}} 
        contactData={{
          contactHtml: componentData.contactHtml}}      
      />
    </main>
  )
}
