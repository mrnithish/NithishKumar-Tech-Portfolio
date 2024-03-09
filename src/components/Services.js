import React from "react";
import { LiaPython } from "react-icons/lia";
import Layout from "@/components/layout";
import { EducationIcon, Pythonwhitesvg } from "./Icons";
import Image from "next/image";
import { Datamining, Pythonsvg, Datascience, Seo, Web, Android } from "./Icons";

const Services = () => {
    return (

        <Layout className=" h-full w-fit">
            <div>
                <div>
                    <h3 className="text-[2.5rem] mt-0  mx-0 font-semibold md:text-[2rem]">
                        Services
                    </h3>
                    <div className="flex flex-wrap justify-between w-full">
                        <div className=" group min-w-80 max-w-80 h-80 rounded-lg mt-7 bg-gray-500 p-5 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 hover:bg-primary  hover:dark:bg-primaryDark hover:dark:text-black hover:text-white duration-300 ...">
                            <Pythonwhitesvg className="w-12 dark:fill-white dark:group-hover:fill-black group-hover:fill-white " />
                            <h1 className="text-[1.5rem] mt-4 mb-4 mx-0 font-semibold md:text-[1.5rem]">Python Developer</h1>
                            <p>Developed robust and scalable Python applications, optimizing code efficiency and ensuring seamless functionality for diverse projects.
                            </p>


                        </div>
                        <div className=" group min-w-80 max-w-80 h-80 rounded-lg mt-7 bg-gray-500 p-5 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 hover:bg-primary  hover:dark:bg-primaryDark hover:dark:text-black hover:text-white duration-300 ...">
                            <Datamining className="w-12 dark:fill-white  dark:group-hover:fill-black group-hover:fill-white" />
                            <h1 className="text-[1.5rem] mt-4 mb-4 mx-0 font-semibold md:text-[1.5rem]">Data Mining</h1>
                            <p>Leveraged advanced data mining techniques to extract valuable insights from large datasets, enhancing decision-making processes and driving actionable results for business stakeholders.
                            </p>

                        </div>
                        <div className=" group min-w-80 max-w-80 h-80 rounded-lg mt-7 bg-gray-500 p-5 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 hover:bg-primary  hover:dark:bg-primaryDark hover:dark:text-black hover:text-white duration-300 ...">
                            <Datascience className="w-12 dark:fill-white  dark:group-hover:fill-black group-hover:fill-white" />
                            <h1 className="text-[1.5rem] mt-4 mb-4 mx-0 font-semibold md:text-[1.5rem]">Data Science</h1>
                            <p>
                                Utilized data science methodologies, encompassing statistical analysis and machine learning, to extract actionable insights and drive informed decision-making for complex business challenges.
                            </p>

                        </div>
                        <div className=" group min-w-80 max-w-80 h-80 rounded-lg mt-7 bg-gray-500 p-5 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 hover:bg-primary  hover:dark:bg-primaryDark hover:dark:text-black hover:text-white duration-300 ...">
                            <Seo className="w-12 dark:fill-white  dark:group-hover:fill-black group-hover:fill-white" />
                            <h1 className="text-[1.5rem] mt-4 mb-4 mx-0 font-semibold md:text-[1.5rem]">SEO Marketing</h1>
                            <p>
                                Executed effective SEO strategies, optimizing website performance and content to achieve high search engine rankings, resulting in increased organic traffic and improved online visibility.
                            </p>

                        </div>
                        <div className=" group min-w-80 max-w-80 h-80 rounded-lg mt-7 bg-gray-500 p-5 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 hover:bg-primary  hover:dark:bg-primaryDark hover:dark:text-black hover:text-white duration-300 ...">
                            <Web className="w-12 dark:fill-white  dark:group-hover:fill-black group-hover:fill-white" />
                            <h1 className="text-[1.5rem] mt-4 mb-4 mx-0 font-semibold md:text-[1.5rem]">Web Development</h1>
                            <p>Developed dynamic and responsive web applications, employing cutting-edge technologies and best practices to deliver seamless user experiences and meet client specifications.
                            </p>

                        </div>
                        <div className=" group min-w-80 max-w-80 h-80 rounded-lg mt-7 bg-gray-500 p-5 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 hover:bg-primary  hover:dark:bg-primaryDark hover:dark:text-black hover:text-white duration-300 ...">
                            <Android className="w-12 dark:fill-white  dark:group-hover:fill-black group-hover:fill-white" />
                            <h1 className="text-[1.5rem] mt-4 mb-4 mx-0 font-semibold md:text-[1.5rem]">Android Development</h1>
                            <p>Engineered feature-rich Android applications, adhering to industry standards and leveraging the latest technologies, to deliver high-performance and user-friendly mobile experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>




    );
};
export default Services;