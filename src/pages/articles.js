import React, { useRef } from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import socialmap from "../../public/images/articles/socialmap.jpg";
import hackathon from "../../public/images/articles/HACKATHON-1.png";
import communication from "../../public/images/articles/communication.jpg";
import dbms from "../../public/images/articles/dbms.png";
import ipad from "../../public/images/articles/ipad.jpeg";
import snyg from "../../public/images/articles/snyg.png";
import dsa from "../../public/images/articles/DSA.png";
import school from "../../public/images/articles/School.png";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";
import { DM_Sans } from "next/font/google";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(event.pageX);
    y.set(-10);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="captialize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        priority
        sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                50vw"
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between
         bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark  dark:text-light
         sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:border-light dark:bg-dark">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="captalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 ">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Nithish Kumar | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticle
              title="The Ultimate Guide to NPTEL's Database Management System Course"
              time="6 min read"
              summary="The NPTEL Database Management System course offers a fantastic opportunity to explore the world of database management. Whether you&apos;re a student looking to expand your knowledge or a professional seeking to bolster your skills"
              link="https://medium.com/@g.nithish100/the-ultimate-guide-to-nptels-database-management-system-course-d8b9c61f8ed8"
              img={dbms}
            />

            <FeaturedArticle
              title="Hackathon Heroics: 10 Essential Winning Moves"
              summary="Secret to triumphing in the fast-paced world of hackathons, where invention takes center stage, is a strategic synthesis of imagination, problem-solving aptitude, and excellent presentation. In this blog, we reveal a curated list of ten crucial strategies meant to help you win any hackathon"
              time="7 min read"
              link="https://medium.com/@g.nithish100/hackathon-heroics-10-essential-winning-moves-35439dcde026"
              img={hackathon}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul className="mb-16">
          <Article
              title="Top 10 Strategies to Ace Problem Solving, Master Data Structures, and Conquer Algorithms"
              date="February 2024"
              link="https://medium.com/@g.nithish100/embarking-on-the-journey-of-algorithmic-problem-solving-demands-a-strategic-mindset-to-overcome-8de876185f4b"
              img={dsa}
            />
          <Article
              title="The Unseen Curriculum: Addressing Hidden Challenges of Students"
              date="January 2024"
              link="https://medium.com/@g.nithish100/students-thinking-left-behind-6e0c833d2411"
              img={school}
            />
          <Article
              title="Hackathon Heroics: 10 Essential Winning Moves"
              date="December 2023"
              link="https://medium.com/@g.nithish100/hackathon-heroics-10-essential-winning-moves-35439dcde026"
              img={hackathon}
            />
            <Article
              title="Online Relationships: More than a &apos;Friend &apos; Button"
              date="November 2023"
              link="https://medium.com/@g.nithish100/unraveling-the-layers-of-social-profiling-navigating-the-digital-landscape-a42d0c796f1f"
              img={socialmap}
            />
            <Article
              title="The iPad&apos;s Many Talents: 25 Ways to Get the Most Out of Your Device"
              date="October 2023"
              link="https://medium.com/@g.nithish100/the-ipads-many-talents-25-ways-to-get-the-most-out-of-your-device-912a49cacb57"
              img={ipad}
            />
            <Article
              title="The Ultimate Guide to NPTEL&apos;s Database Management System Course"
              date="October 2023"
              link="https://medium.com/@g.nithish100/the-ultimate-guide-to-nptels-database-management-system-course-d8b9c61f8ed8"
              img={dbms}
            />
            <Article
              title="Human Capital"
              date="September 2023"
              link="https://medium.com/@g.nithish100/human-capital-e22c8e5d12ad"
              img={communication}
            />
            <Article
              title="Empowering Emergencies, Navigating Care"
              date="May 2023"
              link="https://medium.com/@g.nithish100/empowering-emergencies-navigating-care-1efbf64f7cc6"
              img={snyg}
            />
          </ul>
          {/* <Link href="/" target='_blank' className='ml-4 rounded-lg justify-center items-center bg-dark text-light p-2 px-6 text-lg font-semibold
                    '>View More</Link> */}
            <Link 
            initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      target="_blank"
            href="https://medium.com/@g.nithish100"
            className="items-center bg-dark text-light p-2.5 px-6
                    rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
               border-2 border-solid border-transparent hover:border-dark
               dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light "
          >
            View More</Link>
        </Layout>
      </main>
    </>
  );
};

export default articles;
