import React, { useRef } from "react";
import Image from "next/image";
import experiencepic from "../../public/images/experience.png";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

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

        <ol className="list-disc">
          {work.map((item, index) => (
            <li key={index}>
              <p className="font-medium w-full mt-4 md:text-sm ">{item}</p>
            </li>
          ))}
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
    <div className="my-62">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative ld:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}

          className="absolute left-9 top-0 w-[4px] bottom-60 h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Data Scientist"
            company="Freelancers League"
            companyLink=""
            time="March 2023 - August 2023"
            address="Remote"
            work={[
              "Scraping data from multiple websites increased the number of important discoveries by 35%.",
              "Data mining operations were continuously analyzed and evaluated in order to discover areas for improvement and increase efficiency.",
              "Data extraction and loading operations were automated using Advanced Excel, saving 10+ hours of manual effort per week.",
              "Advanced statistical analysis and machine learning methods were used to find patterns and trends in the data.",
            ]}
          />
          <Details
            position="Scrum Master"
            company="Zormite Studios"
            companyLink="www.google.com"
            time="February 2023-May 2023"
            address="Remote"
            work={["Actively handled project timeframes, priorities, and resources using project management tools and procedures to guarantee project milestones were met on time.",
              "Promoted a collaborative and empowered team atmosphere, prioritising open communication, conflict resolution, and continuous improvement, resulting in an astounding 55% increase in work productivity.",
              "Two projects were completed on schedule and within budget, and both received favourable reviews."]}
          />
          <Details
            position="Techno Geek"
            company="SNS COLORS"
            companyLink="www.google.com"
            time="Sepetember 2022- October 2022"
            address="Coimbatore,Tamilnadu"
            work={["Training over 150+ students across four technical verticals through a Design Thinking Technical Bootcamp.",
              "Achieved inclusivity and collaboration in the learning environment by adapting teaching methodologies to accommodate diverse learning styles and skill levels.",
              "Providing personalized guidance and support to students, responding to their queries and challenges as soon as possible to facilitate their skill development.",
              "Received commendations and high satisfaction levels from students for providing quality mentorship and training."]}
          />
          <Details
            position="Junior BackEnd Engineer"
            company="V7-Lancers"
            companyLink="www.google.com"
            time="December 2021-June 2022"
            address="Madurai,Tamilnadu"
            work={["Developed a comprehensive e-commerce website for the sale and purchase of millets and whole grains.",
              "Created a sophisticated model that seamlessly integrated database operations and login authentication, ensuring secure access and efficient data management.",
              "Implemented server-side and business logic components under the supervision of senior developers.",
              "Participated in code reviews to learn from senior developers and improve coding skills."]}
          />
        </ul>
        <div className="absolute -right-1/3 bottom-8 inline-block w-50 top-1/6 md:hidden">
          <Image
            src={experiencepic}
            alt="Nithish Kumar"
            className="w-full h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
