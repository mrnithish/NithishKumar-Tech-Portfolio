

import TransitionEffect from "@/components/TransitionEffect";
import React, { useRef, useState } from "react";
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
import { English, Gamil, Japanese, Languagesvg, LinkArrow, Tamil, Telegram } from "@/components/Icons";
import {
    GithubIcon,
    LinkedInIcon,
    KaggleIcon,
    MediumIcon,
    DataCamp,
    GeeksForGeeks,
    SunIcon,
    MoonIcon,
} from "@/components/Icons";

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

export const Language = ({ icon, name }) => {
    return (
        <div className="flex items-center justify-center mt-2">
            <motion.div
                href=""
                className="group w-56 rounded-lg h-10 flex justify-evenly  bg-n-one ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-100"
                whileHover={{
                    backgroundColor: [
                        "none",
                        "rgba(131,58,180,1)",
                        "rgba(253,29,29,1)",
                        "rgba(252,176,69,1)",
                        "rgba(131,58,180,1)",
                        "#121212",
                    ],
                    transition: { duration: 1, repeat: Infinity },
                }}
            >
                <Languagesvg></Languagesvg>
                <h1 className="text-black mt-2 text-[1rem] mb-6 mx-0 font-semibold dark:text-white ">{name}</h1>
            </motion.div>
        </div>
    );
};


import emailjs from '@emailjs/browser';

export const ContactMe = () => {
    const form = useRef();
    const [status, setStatus] = useState('');


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_jmfzj68', 'template_dka2eso', form.current, {
                publicKey: 'Fovz0247UDnzPVNaM',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setStatus('Mail Sent');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setStatus('Failed to send mail');
                },
            );
    };

    return (


        <div class="bg-none p-8  shadow-md  w-[600px] border-solid border-4 rounded-lg md:w-96 border-primary dark:border-primaryDark">
            <h2 class="text-2xl font-semibold mb-6  dark:text-white">Connect With Me</h2>



            <form ref={form} onSubmit={sendEmail}>
                <div class="mb-4">
                    <label for="name" class="block text-black text-sm font-medium mb-2 dark:text-white">Name</label>
                    <input type="text" id="name" name="user_name" required
                        class="w-full border-2 rounded-md py-2 px-3 border-dark dark:border-primaryDark transition duration-300 bg-gray-400"
                        placeholder="Your Name" />
                </div>

                <div class="mb-4">
                    <label for="email" class="block text-black text-sm font-medium mb-2 dark:text-white">Email</label>
                    <input type="email" id="email" name="user_email" required
                        class="w-full border-2 rounded-md py-2 px-3 border-dark dark:border-primaryDark transition duration-300 bg-gray-400"
                        placeholder="Your Email" />
                </div>

                <div class="mb-4">
                    <label for="message" class="block text-black text-sm font-medium mb-2 dark:text-white">Message</label>
                    <textarea id="message" name="message" required
                        class="w-full border-2 rounded-md py-2 px-3 border-dark dark:border-primaryDark transition duration-300 bg-gray-400"
                        placeholder="Your Message" rows="4"></textarea>
                </div>
                <div className="flex flex-wrap justify-center">
                    <button type="submit" value="Send"
                        class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ">Submit</button>
                </div>

            </form>
            <div className="text-center w-full">
                <p className="mt-5 text">{status}</p>
            </div>
        </div>



    );
};

export default function More() {
    return (
        <>
            <Head>
                <title>Nithish Kumar G</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
                <Layout className="pt-0">
                    <h2 className="font-bold text-4xl w-full text-start my-16 mt-32">
                        Achivements
                    </h2>
                    <ul className="mb-16">
                        <Article
                            title="Achieved Topper status in the Cloud Computing course | NPTEL | Dec 2023"
                            date="December 2023"
                            link="https://medium.com/@g.nithish100/embarking-on-the-journey-of-algorithmic-problem-solving-demands-a-strategic-mindset-to-overcome-8de876185f4b"
                            img={dsa}
                        />
                        <Article
                            title="Achieved NPTEL STAR Recognition | NPTEL | Dec 2023"
                            date="December 2023"
                            link="https://medium.com/@g.nithish100/students-thinking-left-behind-6e0c833d2411"
                            img={school}
                        />
                        <Article
                            title="Secured the title of Best Performer in Googlathon 2.0 | Nov 2023"
                            date="November 2023"
                            link="https://medium.com/@g.nithish100/hackathon-heroics-10-essential-winning-moves-35439dcde026"
                            img={hackathon}
                        />
                        <Article
                            title="Awarded for the Best Project at the Intra-College Level Expo | Amirta Expo | Nov 2022"
                            date="November 2022"
                            link="https://medium.com/@g.nithish100/unraveling-the-layers-of-social-profiling-navigating-the-digital-landscape-a42d0c796f1f"
                            img={socialmap}
                        />
                        <Article
                            title="2 Times Runner Up | Design Thinking Expo | 2022"
                            date="2022"
                            link="https://medium.com/@g.nithish100/the-ipads-many-talents-25-ways-to-get-the-most-out-of-your-device-912a49cacb57"
                            img={ipad}
                        />
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-start my-16 mt-32">
                        Certifications
                    </h2>
                    <ul className="mb-16">
                        <Article
                            title="The Joy of Computing using Python | NPTEL | 12 weeks | 2023"
                            date="2023"
                            link="https://medium.com/@g.nithish100/the-ipads-many-talents-25-ways-to-get-the-most-out-of-your-device-912a49cacb57"
                            img={ipad}
                        />
                        <Article
                            title="Programming in Java | NPTEL | 12 weeks | 2023
"
                            date="2023"
                            link="https://medium.com/@g.nithish100/the-ipads-many-talents-25-ways-to-get-the-most-out-of-your-device-912a49cacb57"
                            img={ipad}
                        />
                        <Article
                            title="Cloud Computing | NPTEL | 12 weeks | 2023"
                            date="2023"
                            link="https://medium.com/@g.nithish100/the-ipads-many-talents-25-ways-to-get-the-most-out-of-your-device-912a49cacb57"
                            img={ipad}
                        />
                        <Article
                            title="Google Project Management | Coursera | 6 months | 2024"
                            date="2024"
                            link="https://medium.com/@g.nithish100/the-ipads-many-talents-25-ways-to-get-the-most-out-of-your-device-912a49cacb57"
                            img={ipad}
                        />
                        <Article
                            title="IBM Data Science | Coursera | 5 months | 2023"
                            date="2023"
                            link="https://medium.com/@g.nithish100/the-ipads-many-talents-25-ways-to-get-the-most-out-of-your-device-912a49cacb57"
                            img={ipad}
                        />
                        <Article
                            title="Introduction to Psychology | Yale University | 3 weeks | 2023"
                            date="2023"
                            link="https://medium.com/@g.nithish100/the-ipads-many-talents-25-ways-to-get-the-most-out-of-your-device-912a49cacb57"
                            img={ipad}
                        />
                        <Article
                            title="Google Data Analytics | Coursera | 6 months | 2023"
                            date="2023"
                            link="https://medium.com/@g.nithish100/the-ipads-many-talents-25-ways-to-get-the-most-out-of-your-device-912a49cacb57"
                            img={ipad}
                        />
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-start my-16 mt-32">
                        Publications
                    </h2>
                    <ul className="mb-16">
                        <Article
                            title="GYM TRAINER Using Artificial Intelligence | IJSART| 2024"
                            date="2024"
                            link="https://medium.com/@g.nithish100/the-ipads-many-talents-25-ways-to-get-the-most-out-of-your-device-912a49cacb57"
                            img={ipad}
                        />
                        <Article
                            title="Add+"
                            date="2024"
                            link="https://medium.com/@g.nithish100/the-ipads-many-talents-25-ways-to-get-the-most-out-of-your-device-912a49cacb57"
                            img={ipad}
                        />
                        <Article
                            title="Add+"
                            date="2022"
                            link="https://medium.com/@g.nithish100/the-ipads-many-talents-25-ways-to-get-the-most-out-of-your-device-912a49cacb57"
                            img={ipad}
                        />
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-start my-16 mt-32">
                        Languages
                    </h2>
                    <div className="flex flex-wrap justify-center">
                        <div className="flex flex-wrap justify-center gap-10 pt-16 mt-5  pb-16  w-full border-solid border-4 rounded-lg border-black dark:border-white">

                            <Language

                                name="English"
                            />
                            <Language
                                name="Japanese"
                            />
                            <Language
                                name="Hindi"
                            />
                            <Language
                                name="Tamil"
                            />

                        </div>
                    </div>


                </Layout>
                <>
                    <h2 className="font-bold text-4xl w-full text-center mb-16 mt-16">
                        Contact Me
                    </h2>
                    <div className="w-full flex flex-wrap justify-center gap-72 md:gap-20 p-4">
                        <div className="flex flex-col align-middle justify-center ml-10 md:ml-0">
                            <motion.div className="p-5 flex flex-col justify-between gap-5 ml-7">
                                <div className="w-fit flex flex-row justify-center">
                                    <Gamil className="w-10 h-10"></Gamil>
                                    <Link href="mailto:g.nithish100@gmail.com" target={"_blank"}>
                                        <h1 className="ml-4 font-bold md:text-center underline cursor-pointer p-1">g.nithish100@gmail.com</h1>
                                    </Link>
                                </div>
                                <div className=" flex flex-row just w-fit">
                                    <Telegram className="w-10 h-10 "></Telegram>
                                    <Link href="mailto:g.nithish100@gmail.com" target={"_blank"}>
                                        <h1 className="ml-4 font-bold md:text-center underline cursor-pointer p-1">g.nithish100@gmail.com</h1>
                                    </Link>
                                </div>
                            </motion.div>
                            <div className="mt-10">
                                <h1 className="text-center font-medium dark:text-white">Follow Me</h1>
                            </div>
                            <div>
                                <nav className="flex items-center justify-center flex-wrap p-6">

                                    <motion.a
                                        href="https://github.com/mrnithish"
                                        target={"_blank"}
                                        whileHover={{ y: -2 }}
                                        className="w-6 mx-3"
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <GithubIcon />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.linkedin.com/in/g-nithish-kumar/"
                                        target={"_blank"}
                                        whileHover={{ y: -2 }}
                                        className="w-6 mx-3"
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <LinkedInIcon />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.kaggle.com/nithishkumarg100"
                                        target={"_blank"}
                                        whileHover={{ y: -2 }}
                                        className="w-6 mx-3 dark:border-light"
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <KaggleIcon />
                                    </motion.a>
                                    <motion.a
                                        href="https://medium.com/@g.nithish100"
                                        target={"_blank"}
                                        whileHover={{ y: -2 }}
                                        className="w-6 mx-3"
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <MediumIcon />
                                    </motion.a>
                                    <motion.a
                                        href="https://auth.geeksforgeeks.org/user/nithishgjeyd"
                                        target={"_blank"}
                                        whileHover={{ y: -2 }}
                                        className="w-6 mx-3"
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <GeeksForGeeks />
                                    </motion.a>
                                    <motion.a
                                        href="https://g.dev/nithishkumar100"
                                        target={"_blank"}
                                        whileHover={{ y: -2 }}
                                        className="w-6 mx-3"
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <DataCamp />
                                    </motion.a>
                                </nav>


                            </div>
                        </div>

                        <ContactMe></ContactMe>
                    </div>
                </>
            </main >

        </>
    );
}
