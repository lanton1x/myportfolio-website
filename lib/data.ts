import React from "react";
import { SiTestcafe, SiAmazonaws, SiNextdotjs, SiCodereview } from "react-icons/si";
import { GiOpenTreasureChest } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { LuGraduationCap } from "react-icons/lu";
import automationImg from "@/public/automationImg.png";
import edgeProjectsImg from "@/public/edgeProjectsImg.png";
import maintenanceImg from "@/public/maintenanceImg.png";
import developmentImg from "@/public/developmentImg.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Systems Analyst",
    company: "Instituto Superior Jujuy",
    location: "San Salvador de Jujuy - Argentina",
    description:
      "Associate Degree, graduated with honors after 15+ years working as a Mainframe Developer and Developer Lead.",
    icon: React.createElement(LuGraduationCap),
    date: "1992",
  },
  {
    title: "Software Quality Assurance Engineer",
    company: "Vesta Corp. | Intel | Nike",
    location: "Tigard, OR | Hillsboro, OR",
    description:
      "I performed Quality Assurance roles during the last 10 years, across 3 work experiences. I upskilled to DevOps roles through self-training to build and manage CI/CD frameworks, some of them using TeamCity, some others with Jenkins as CI/CD tool.",
    icon: React.createElement(SiTestcafe),
    date: "2013 - 2016 | 2017 - 2018",
  },
  {
    title: "Project Manager / Program Manager",
    company: "Intel",
    location: "Hillsboro, OR",
    description:
      "I worked as a Proyect/Program Manager for 2 years leading an offshore team, exploring and delivering solutions around edge-computing technologies and use-cases, from Linux security hardening, RTOS virtualization and containerization, ML-driven improvements on K8 orchestration, and Hypervisor management on Edge Servers.",
    icon: React.createElement(GoProjectRoadmap),
    date: "2018 - 2020",
  },
  {
    title: "Quality Engineer and Developer",
    company: "Nike",
    location: "Remote",
    description:
    "During my last work experience with this company I worked as a Quality Engineer to setup/improve Software Quality standards and Release Management practices on cloud-based (AWS) applications and services, performing general maintenance duties on existing software.",
    icon: React.createElement(SiAmazonaws),
    date: "2021 - 2022",
  },
  {
    title: "Entrepreneur",
    company: "Athina Software",
    location: "Remote",
    description:
      "Currently performing Project Manager and full-stack developer roles as a freelancer for a startup in Argentina. I am developing an online e-commerce application, a Retail Management System in a multi-tenant, multi-cloud SaaS model. My stack includes React, NextJS, TypeScript, Tailwind, Prisma, GraphQL, Grafbase, PostgresQL and DynamoDB.",
    icon: React.createElement(SiNextdotjs),
    date: "2021 - present",
  },
  {
    title: "Content Advisory Board Member",
    company: "LogRocket",
    location: "Remote",
    description:
      "Since mid 2022 I started volunteering part of my time performing technical reviews on LogRocket's blog posts on developer tools and practices. LogRocket has been for years one of my main sources of truth on React, NextJS, GraphQL, Prisma, and other front-end technologies.",
    icon: React.createElement(SiCodereview),
    date: "2022 - present",
  },
  {
    title: "Board Member - Treasurer",
    company: "Saint Andrew Lutheran Church Foundation",
    location: "Beaverton, Oregon - USA",
    description:
      "Volunteer work as a Board Member and Treasurer for this religious, non-profit organization. I am responsible for the financial management of the Foundation, specifically accounting and reporting.",
    icon: React.createElement(GiOpenTreasureChest),
    date: "2019 - present",
  },  
] as const;

export const projectsData = [
  {
    title: "Automation Frameworks",
    description:
      "QA Tester/Engineer, and Software Quality Engineer across different companies developing Front-End, Back-End, Data/Database, API, and Performance Testing frameworks.",
    tags: ["Java", "AngularJS", "Selenium", "MS-SQL Server", "OracleDB", "PostgreSQL", "JMeter", "Gatling", "Rest_Assured", "Restito", "Swagger", "Postman", "Insomnia", "TeamCity", "Jenkins", "Maven", "Gradle", "Cucumber"],
    imageUrl: automationImg,
  },
  {
    title: "Project Management",
    description:
      "General Project Management and Program Management roles during 3 years at Intel, leading teams of 5 to 10 people, on-site and offshore.",
    tags: ["Jira", "PM", "Real-Time", "ML", "Edge Compute", "Cloud Compute", "AWS", "Kubernetes", "Docker", "Hypervisor", "Linux"],
    imageUrl: edgeProjectsImg,
  },
  {
    title: "Software Maintenance",
    description:
      "General maintenance of company internal applications and APIs deployed on AWS resources. AngularJS critical upgrades through several minor/major versions.",
    tags: ["NodeJS", "Scala", "AWS", "Terraform", "Gradle", "AngularJS", "Angular", "Java", "Springboot", "PostgreSQL", "DynamoDB",  "GraphQL", "Apollo"],
    imageUrl: maintenanceImg,
  },
  {
    title: "SaaS RMS Development",
    description:
      "eCommerce Retail Management System currently under development, in a serverless multi-tenant, multi-cloud SaaS business model.",
    tags: ["React", "NextJS", "Typescript", "Tailwind", "GraphQL", "Apollo Client", "GraphQL Yoga", "Prisma", "Grafbase", "AWS", "GCL", "Terraform", "PostgreSQL", "DynamoDB"],
  imageUrl: developmentImg,
},
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "Git",
  "PostgreSQL",
  "DynamoDB",
  "MongoDB",
  "Prisma",
  "Grafbase",
  "GraphQL",
  "Apollo",
  "GraphQL-Yoga",
  "Java",
  "Java-Springboot",
  "Python",
  "Framer Motion",
  "Terraform",
  "Ansible",
  "AWS",
  "AWS-IAM",
  "AWS-Route53",
  "AWS-S3",
  "AWS-VPC",
  "AWS-VPC_Peering",
  "AWS-EC2",
  "AWS-API_Gateway",
  "AWS-ALB/NLB",
  "AWS-Elastic_Beanstalk",
  "AWS-CloudWatch",
  "AWS-Cloud_Formation",
  "AWS-Amplify",
  "JIRA",
  "Maven-Gradle",
  "Jenkins",
  "TeamCity",
  "Selenium",
  "Cucumber",
  "JMeter",
  "Gatling",
  "Rest_Assured",
  "Restito",
  "Swagger",
  "Postman",
  "Insomnia",
] as const;