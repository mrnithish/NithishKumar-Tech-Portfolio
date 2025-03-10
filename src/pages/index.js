import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/P2323.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";


export default function Home() {
  return (
    <>
      <Head>
        <title>Nithish Kumar G</title>
        <meta name="description" content="Portfolio website of Nithish Kumar G" />
        <meta name="keywords" content="nithishkumarg.me,nithish,nithishkumar,nithishkumarg,portfolio,mrnithish,sns,student,tech people,,data scientist,ai/ml engineer,nithishkumarg.tech," />
        <meta name="author" content="Nithish Kumar G" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col md:left-4">
            <div className="w-1/3 ml-36 md:w-full  `m` grow-1 " >
              <Image
                src={profilePic}

                alt="Nithish Kumar G"
                className="h-auto w-full lg:hidden md:inline-block md:w-full "
                priority
                sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <h1></h1>
              <AnimatedText
                text="Turning Vision Into Reality With Code And Analysis"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                {" "}
                A dedicated data scientist aims to harness advanced analytics and machine learning to create meaningful impacts. Passionate about extracting insights from intricate datasets, they prioritize data-driven decision-making. Committed to team collaboration, they seek to optimize operations and drive business growth.

              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://drive.google.com/drive/folders/1W6IawhKAsx7I2YdpGPXFiWcU18xKQLZv?usp=drive_link"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 
               rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
               border-2 border-solid border-transparent hover:border-dark dark:bg-light
                dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light 
                md:p-2 md:px-4 md:text-base
                "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1 "} />
                </Link>
                <Link
                  href="mailto:g.nithish100@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
       
        <div className="absolute right-8 bottom-8 inline-block w-20 md:hidden">
          <Image
            src={lightBulb}
            alt="Nithish Kumar"
            className="w-full h-auto "
          />
        </div>
       
        
      </main>
    </>
  );
}
