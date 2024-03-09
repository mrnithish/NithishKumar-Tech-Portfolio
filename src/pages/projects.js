import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import text_summarizer from "../../public/images/projects/text_summarizer.png";
import aitrainer from "../../public/images/projects/Ai-Gym-Trainer.png";
import flipkart from "../../public/images/projects/flip.png";
import sales from "../../public/images/projects/sales.png";
import music from "../../public/images/projects/music.jpg";
import snyg from "../../public/images/projects/snyg.png";
import justice_league from "../../public/images/projects/Modern Minimalist Simple Technology Youtube Thumbnail.png";
import videoSummarizer from "../../public/images/projects/video summarizer.png"
import spamMailDetection from "../../public/images/projects/spam mail.png"
import TextToImage from "../../public/images/projects/Text to Image.png"

const FramerImage = motion(Image);

const FeauteredProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-center rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
       xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]   "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
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
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline ring-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
               hover:bg-light hover:text-dark 
               border-2 border-solid border-transparent hover:border-dark
               dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:px-4 sm:text-base"
          >
            View Info
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline ring-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            View
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Nithish Kumar | Project Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <div className="col-span-12">
              <FeauteredProjects
                title="Spam Mail Detection"
                img={spamMailDetection}
                summary="This project focuses on the detection of spam and ham (non-spam) emails using a machine learning logistic regression model."
                link="https://github.com/mrnithish/Spam-Mail-Detection"
                github="https://github.com/mrnithish/Spam-Mail-Detection"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Text To Image"
                img={TextToImage}
                summary="Stable Diffusion"
                link="https://github.com/mrnithish/TextToImage-LLM-Stablediffusion-Torch/"
                github="https://github.com/mrnithish/TextToImage-LLM-Stablediffusion-Torch/"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Video Summarizer"
                img={videoSummarizer}
                summary="lora ai"
                link="https://github.com/mrnithish/Videx-Video-Summarizer"
                github="https://github.com/mrnithish/Videx-Video-Summarizer"
                type="Project"
              />
            </div>
            <div className="col-span-12">
              <FeauteredProjects
                title="AI TRAINER"
                img={aitrainer}
                summary="A speech module was used to implement voice-based instructions, manage the system, and accurately analyse physical exercises in real time.The planned exercise module includes a variety of exercises, such as pushups and squats, to offer a variety of training possibilities."
                link="/"
                github="https://github.com/mrnithish/Voice-Ai-Trainer"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Flipkart - Webscrapping"
                img={flipkart}
                summary="A web scrapping module to scrape the data in the flipkart website."
                link="/"
                github="https://github.com/mrnithish/Webscrapping-Flipkart-anyqueries"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Text Summarizer"
                img={text_summarizer}
                summary="A text summarizer using llm models hugging-face."
                link="/"
                github="https://github.com/mrnithish/Text_Summarizer_transformers"
                type="Project"
              />
            </div>
            <div className="col-span-12">
              <FeauteredProjects
                title="SNYG TRACKER"
                img={snyg}
                summary="Developed an andriod application using MIT APK INVENTOR,Firebase and CloudDB.Contributed to reducing the response times and improve the efficiency of the ambulance services"
                link="https://medium.com/@g.nithish100/empowering-emergencies-navigating-care-1efbf64f7cc6"
                github="https://github.com/mrnithish/SNYG-TRACKER"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Diwali-Sales-Data-Analysis"
                img={sales}
                summary="Statistics study of the Diwali sales statistics"
                link="/"
                github="https://github.com/mrnithish/Data-Analysis-Diwali-Sales"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Music Player"
                img={music}
                summary="A mp3 music player."
                link="/"
                github="https://github.com/mrnithish/music-player-tkinter"
                type="Project"
              />
            </div>
            <div className="col-span-12">
              <FeauteredProjects
                title="Justice League"
                img={justice_league}
                summary="It is lawyer appointment website for hiring the lawyers"
                link="https://mrnithish.github.io/Justice_Lawyer-demo/"
                github="https://github.com/mrnithish/Justice_Lawyer-demo/tree/master"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
