import React, { useRef } from "react";
import Image from "next/image";
import educationpic from "../../public/images/education.png";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import { EducationIcon } from "./Icons";

const Details = ({ type, time, place, info }) => {
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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg 2xl:ml-2 xl:ml-2">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-62">
      <h2 className="font-bold text-8xl mt-60 mb-60 w-full text-center  md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative ld:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}

          className="absolute left-9 top-0 w-[4px] bottom-60 h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 mb-16 xs:ml-2 xl:ml-2 2xl:mb-4">
          <Details
            type="Minor Degree in Artifical Intelligence and Data Science"
            time="2024-2025"
            place="SNS COLLEGE OF ENGINEERING"
            info="CPGA : 8.67"
          />
          <Details
            type="Bachelor Of Computer Science and Technology"
            time="2021-2025"
            place="SNS COLLEGE OF ENGINEERING"
            info="CPGA : 8.67"
          />
          <Details
            type="Higher Secondary School of Education (HSC) (12th)"
            time="2020-2021"
            place="Goodsam Matriculation Higher Secondary School"
            info="Percentage : 92.6 %"
          />
          <Details
            type="Secondary School of Education  (SSLC) (10th)"
            time="2018-2019"
            place="Goodsam Matriculation Higher Secondary School"
            info="Percentage : 91.6 %"
          />
        </ul>
        <div className="absolute -right-1/3 bottom-8 inline-block w-50 -top-1/4 md:hidden">
          <Image
            src={educationpic}
            alt="Nithish Kumar"
            className="w-full h-auto "
          />
        </div>
      </div>
    </div>

  );
};
export default Education;
