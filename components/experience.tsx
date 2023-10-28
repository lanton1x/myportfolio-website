'use client';

import { useSectionInView } from "@/lib/hooks";
import SectionHeader from "./section-header";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from "@/lib/data";
import React, { useContext } from "react";
import { useTheme } from "@/context/theme-context";

export default function Experience({ params }: { params: { lang: string } }) {

  const { ref } = useSectionInView('#experience', 0.5);
  const { theme } = useTheme();

  const sectionTitle = params.lang === 'en' ? 'My Professional Experience' : 'Mi Experiencia Profesional';

  return (
    <section
      ref={ref}
      id='experience'
      className='scroll-mt-28 mb-15 sm:mb-22'
    >
      <SectionHeader>{sectionTitle}</SectionHeader>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement 
              visible={true}
              contentStyle={{ 
                background: theme === 'light' ? "#f3f4f6" : "#374151", 
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{ 
                borderRight: theme === 'light' ? "0.4rem solid  #9ca3af" : "0.4rem solid  #9ca3af",}}
              date={item.date}
              icon={item.icon}
              iconStyle={{ 
                background: theme === 'light' ? "white" : "#374151",
                fontSize: "1.5rem", 
                }}
              >
              <h2 className='font-bold dark:text-white/80'>{params.lang === 'en' ? item.title : item.titulo }</h2>
              <h3 className='font-semibold capitalize'>{item.company}</h3>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='!font-normal !mt-1 text-gray-700 dark:text-white/70'>{params.lang === 'en' ? item.description : item.descripcion }</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
