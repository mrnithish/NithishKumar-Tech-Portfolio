import React from "react";
// import 'boxicons';
import { LiaPython } from "react-icons/lia";
import Layout from "@/components/layout";
import Skillbg, { AhrefsCard, GoogleAdsCard, GooglePageSpeedInsightsCard, GoogleSearchConsoleCard, Htmlcard, WordpressCard } from "./skillbg";
import { Javacard, Ccard, Sqlcard, Tableucard, Excelcard } from "./skillbg";
import { Phpcard, Xamppcard, Mysqlcard, Fbcard } from "./skillbg";
import { Mitcard, Androidstudiocard, Kotlincard } from "./skillbg";
import { Pscard, Seleniamcard, Powerbicard, Flaskcard, Pandascard, Seaborncard, Pytorchlcard, Numpycard, Tensorflowcard, Streamlitcard } from "./skillbg";
import { NLPCard, EngineeringCard, TransformersCard, MLCard, LLMCard, DeepLearningCard, ComputerVisionCard } from "./skillbg";
import { CommunicationsCard, FlexibilityCard, LeadershipCard, TeamworkCard, TimeManagementCard, CriticalThinkingCard, VolunteeringCard, CounsellingCard, ProjectManagementCard } from "./skillbg"
import { Japanesecard, Typewritingcard, Agilecard } from "./skillbg";
import { GitCard, GithubCard, DockerCard, HostingerCard, VSCodeCard, PhotoshopCard } from "./skillbg";
import { Datamining, Pythonsvg, Java, C, Excel, Tableu, Sql, Wordpress, } from "./Icons";
import Logo from "./Logo";
import { Html } from "next/document";

const Skills = () => {
  return (

    <Layout className="">

      <h2 className="font-bold text-8xl mt-35 w-full text-center min-h-[auto] pb-28 md:text-6xl md:mt-32">
        Skills
      </h2>

      <h3 className="text-[2.5rem] mt-0  mx-0 font-semibold md:text-[2rem]">
        Technical Skills
      </h3>
      <div className="flex flex-wrap justify-center w-full gap-5">
        <div className="flex flex-wrap justify-between max-w-[30rem] mt-5 p-4 pb-10 border-solid border-4 rounded-lg border-black dark:border-white">
          <div className="flex flex-wrap justify-center gap-5">
            <div className="w-full text-center">
              <h1 className="text-[2rem] font-semibold md:text-[2rem]">Frontend</h1>
            </div>

            <Skillbg></Skillbg>
            <Htmlcard></Htmlcard>
            <Ccard></Ccard>
            <Sqlcard></Sqlcard>
            <Tableucard></Tableucard>
            <Excelcard></Excelcard>
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-[30rem] mt-5 p-4 pb-16 border-solid border-4 rounded-lg border-black dark:border-white">
          <div className="flex flex-wrap justify-center gap-5 ">
            <div className="w-full text-center">
              <h1 className="text-[2rem] font-semibold md:text-[2rem]">Backend</h1>
            </div>
            <Mysqlcard></Mysqlcard>
            <Phpcard></Phpcard>
            <Fbcard></Fbcard>
            <Xamppcard></Xamppcard>
          </div>
        </div>


        <div className="flex flex-wrap justify-between w-[30rem] mt-5 p-4 pb-10 border-solid border-4 rounded-lg border-black dark:border-white">
          <div className="flex flex-wrap justify-center gap-5">
            <div className="w-full text-center">
              <h1 className="text-[2rem] font-semibold md:text-[2rem]">Python</h1>
            </div>
            <Numpycard></Numpycard>
            <Pytorchlcard></Pytorchlcard>
            <Pandascard></Pandascard>
            <Tensorflowcard></Tensorflowcard>
            <Flaskcard></Flaskcard>
            <Streamlitcard></Streamlitcard>
            <Seaborncard></Seaborncard>

          </div>
        </div>

        <div className="flex flex-wrap justify-between w-[30rem] mt-5 p-4 pb-10 border-solid border-4 rounded-lg border-black dark:border-white">
          <div className="flex flex-wrap justify-center gap-5">
            <div className="w-full text-center">
              <h1 className="text-[2rem] font-semibold md:text-[2rem]">AI</h1>
            </div>
            <EngineeringCard></EngineeringCard>
            <NLPCard></NLPCard>
            <TransformersCard></TransformersCard>
            <LLMCard></LLMCard>
            <MLCard></MLCard>
            <DeepLearningCard></DeepLearningCard>
            <ComputerVisionCard></ComputerVisionCard>
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-[30rem] mt-5 p-4 pb-10 border-solid border-4 rounded-lg border-black dark:border-white">
          <div className="flex flex-wrap justify-center gap-5">
            <div className="w-full text-center">
              <h1 className="text-[2rem] font-semibold md:text-[2rem]">Datascience</h1>
            </div>
            <Seleniamcard></Seleniamcard>
            <Powerbicard></Powerbicard>
            <Pscard></Pscard>
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-[30rem] mt-5 p-4 pb-10 border-solid border-4 rounded-lg border-black dark:border-white">
          <div className="flex flex-wrap justify-center gap-5">
            <div className="w-full text-center">
              <h1 className="text-[2rem] font-semibold md:text-[2rem]">Android</h1>
            </div>
            <Kotlincard></Kotlincard>
            <Androidstudiocard></Androidstudiocard>
            <Javacard></Javacard>
            <Mitcard></Mitcard>
          </div>
        </div>

        <div className="flex flex-wrap justify-between w-[30rem] mt-5 p-4 pb-16 border-solid border-4 rounded-lg border-black dark:border-white">
          <div className="flex flex-wrap justify-center gap-5">
            <div className="w-full text-center">
              <h1 className="text-[2rem] font-semibold md:text-[2rem]">SEO Marketing</h1>
            </div>
            <GoogleAdsCard></GoogleAdsCard>
            <GooglePageSpeedInsightsCard></GooglePageSpeedInsightsCard>
            <GoogleSearchConsoleCard></GoogleSearchConsoleCard>
            <AhrefsCard></AhrefsCard>
          </div>

        </div>
        <div className="flex flex-wrap justify-between w-[30rem] mt-5 p-4 pb-10 border-solid border-4 rounded-lg border-black dark:border-white">
          <div className="flex flex-wrap justify-center gap-5">
            <div className="w-full text-center">
              <h1 className="text-[2rem] font-semibold md:text-[2rem]">Others</h1>
            </div>
            <GitCard />
            <GithubCard />
            <DockerCard />
            <WordpressCard />
            <VSCodeCard />
            <HostingerCard />
            <PhotoshopCard />
          </div>
        </div>

        <div className="w-full mt-10">
          <h3 className="text-[2.5rem] mt-0  mx-0 font-semibold md:text-[2rem] ml-3 ">
            Skills
          </h3>
        </div>
        <div className="flex flex-wrap justify-between w-[30rem] mt-5 p-4 pb-16 border-solid border-4 rounded-lg border-black dark:border-white md:w-54">
          <div className="flex flex-wrap justify-center gap-5">
            <div className="w-full text-center">
              <h1 className="text-[2rem] font-semibold md:text-[2rem]">Hard Skills</h1>
            </div>
            <Japanesecard></Japanesecard>
            <Typewritingcard></Typewritingcard>
            <Agilecard></Agilecard>
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-[30rem] mt-5 p-4 pb-10 border-solid border-4 rounded-lg border-black dark:border-white">
          <div className="flex flex-wrap justify-center gap-5">
            <div className="w-full text-center">
              <h1 className="text-[2rem] font-semibold md:text-[2rem]">Soft Skills</h1>
            </div>
            <CommunicationsCard />
            <FlexibilityCard />
            <LeadershipCard />
            <VolunteeringCard />
            <TeamworkCard />
            <TimeManagementCard />

            <CriticalThinkingCard />
            <CounsellingCard />
            <ProjectManagementCard />
          </div>
        </div>


      </div>




    </Layout>

  );
};
export default Skills;
