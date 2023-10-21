'use client';

import { projectsData } from "@/lib/data";
import SectionHeader from "./section-header";
import Project from "./project";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Projects({ params }: { params: { lang: string } }) {

  const { ref } = useSectionInView('#projects', 0.5);
  const { lang } = params;
  const sectionTitle = lang === 'es' ? 'Mis Proyectos' : 'My Projects';

  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
      <SectionHeader>{sectionTitle}</SectionHeader>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} lang={lang} />
            </React.Fragment>
        ))}
      </div>
    </section>
  );
}
