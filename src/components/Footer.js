import React from "react";
import Layout from "./layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light
    sm:text-base"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build with <span className="text-primary text-2xl px-1">😊</span>
          by&nbsp;
          <Link
            href="https://www.linkedin.com/in/g-nithish-kumar/"
            className="underline underline-offset-2"
            target={"_blank"}
          >
            Nithish Kumar
          </Link>
        </div>
        <Link href="mailto:g.nithish100@gmail.com" target={"_blank"}>
          Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
