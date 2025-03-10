import React, { useRef } from "react";
import experiencepic from "../../public/images/experience.png";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Image from "next/image";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <ol>
        <p className="font-medium w-full mt-4 md:text-sm">{work}</p>
        </ol>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative ld:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
            position="AI / ML  Intern" 
            company="SNS Innovation Hub"
            companyLink="https://snsihub.ai/"
            time="July 2024 - Jan 2025"
            address="Coimbatore"
            work="Collaborated with cross-functional teams to integrate AI solutions, including Retrieval-Augmented Generation (RAG) and agentic building, into existing systems and applications. Worked with OpenCV for computer vision tasks and contributed to system design architecture. Deployed large language models (LLMs) into production, improving system accuracy and enhancing decision-making processes while ensuring adherence to ethical guidelines and rubric-based evaluation frameworks."
          />
        
        <Details
            position="Azure Cloud Intern"
            company="Microsoft"
            companyLink="https://www.linkedin.com/company/microsoft/"
            time="March 2024 - May 2024"
            address="Remote"
            work="Developed solutions using Microsoft Azure and GitHub tools to address business challenges, improving operational efficiency by 30%. 
            Expertise in Azure Cloud services, AI, and security protocols was gained through continuous learning and application. 
            Innovative projects focused on cloud computing and AI implementation were successfully completed, enhancing security measures and system reliability."
          />
          <Details
            position="Data Scientist Intern"
            company="Freelancers League"
            companyLink="https://www.linkedin.com/company/freelancers-league/"
            time="March 2023 - September 2023"
            address="Coimbatore"
            work="Scraping data from multiple websites increased the number of important discoveries by 35%.Data mining operations were continuously analysed and evaluated in order to discover areas for improvement and increase efficiency.Data extraction and loading operations were automated using Advanced Excel, saving 10+ hours of manual effort per week.Advanced statistical analysis and machine learning methods were used to find patterns and trends in the data. "
          />
          <Details
            position="Junior BackEnd Engineer Intern"
            company="V7-Lancers"
            companyLink="https://www.linkedin.com/company/v7-lancers/"
            time="December 2021 - June 2022"
            address="Remote"
            work="Developed a comprehensive e-commerce website for the sale and purchase of millets and whole grains. Created a sophisticated model that seamlessly integrated database operations and login authentication, ensuring secure access and efficient data management.Implemented server-side and business logic components under the supervision of senior developers. Participated in code reviews to learn from senior developers and improve coding skills."
          />
        </ul>
        <div className="absolute -right-1/3 bottom-8 inline-block w-100 -top-1/6 sm:hidden">
          <Image
            src={experiencepic}
            alt="Nithish Kumar"
            className="w-100 h-auto "
          />
        </div>
      </div>
    </div>
  );
};
export default Experience;