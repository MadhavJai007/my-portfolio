import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col space-y-8 md:space-y-28">

        {/* // ?  Project  4*/}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"#"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <Img src={"/naveen-website-banner.png"} alt={"Project Screen shot"} className={`w-5/6 rounded h-auto `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                {/* <Img src={"/reddl-banner.png"} alt={"Project Screen shot"} className={`w-full h-full object-cover`} /> */}
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <Link href={"#"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Writer&apos;s blog
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  A personal blog that I created for my brother to showcase his creative writing works. Built with the latest version of Next.js (Next 14) to showcase stories in the popular EPUB ebook format.
                </p>
                {/* <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  This project aim to help you to improve your <span className="text-AAsecondary"> typing </span> by
                  tracking your progress in <span className="text-AAsecondary"> each round</span> and give you a{" "}
                  <span className="text-AAsecondary"> score</span> based on your typing speed and accuracy through a
                  table of <span className="text-AAsecondary"> statistics</span>.
                </p> */}
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <ExternalLink router={router} url="https://naveenwritings.vercel.app/" />
                {/* <ExternalLink url={"typing"} router={router} /> */}
              </div>
            </div>
          </div>


        </div>

        {/* Project 3 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-8 col-span-7 ">
              {/* <a href={"https://ubiquitous-bublanina-da84ec.netlify.app/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a> */}
              <Img src={"/todo-banner.png"} alt={"Project Screen shot"} className={`w-auto rounded h-auto`} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/todo-banner.png"} alt={"Project Screen shot"} className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <Link href={"/userdatapuller"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  Task Organizer app
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                A simple task organizer app that let you create and manage tasks with the option to set deadlines.
                  Built with Kotlin, Jetpack Compose and other Jetpack libraries for Android devices.
                </p>
                {/* <p className="text-gray-300 md:text-gray-400 text-left ">
                  I had the opportunity to lead the development of a token project, which aimed to create a
                  decentralized ecosystem for peer-to-peer transactions. Overseeing the planning and development of the
                  project, including the <span className="text-AAsecondary"> design</span> and implementation of the{" "}
                  <span className="text-AAsecondary"> smart contract</span> and{" "}
                  <span className="text-AAsecondary"> blockchain technology</span>. Here i share with you{" "}
                  <span className="text-AAsecondary"> YPredict - v1 </span> for the private sale.
                </p> */}
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Kotlin</span>
                <span className="pr-4 z-10">Jetpack Compose</span>
                <span className="pr-4 z-10">Material 3</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/MadhavJai007/the-task-organizer" />
                {/* <a href="https://ubiquitous-bublanina-da84ec.netlify.app/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a> */}
              </div>
            </div>
          </div>
        </div>
        
        
        {/* // ?  Project  2*/}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"#"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <Img src={"/reddl-banner.png"} alt={"Project Screen shot"} className={`w-5/6 rounded h-auto `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                {/* <Img src={"/reddl-banner.png"} alt={"Project Screen shot"} className={`w-full h-full object-cover`} /> */}
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <Link href={"#"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    RedDL
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Multimedia download tool in the form of a quick CLI that makes downloading images and videos a lot less tedious
                  while providing easy customizability over what and where you download to
                </p>
                {/* <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  This project aim to help you to improve your <span className="text-AAsecondary"> typing </span> by
                  tracking your progress in <span className="text-AAsecondary"> each round</span> and give you a{" "}
                  <span className="text-AAsecondary"> score</span> based on your typing speed and accuracy through a
                  table of <span className="text-AAsecondary"> statistics</span>.
                </p> */}
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Python</span>
                <span className="pr-4 z-10">Gallery-DL</span>
                <span className="pr-4 z-10">YT-DLP</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/MadhavJai007/redDL" />
                {/* <ExternalLink url={"typing"} router={router} /> */}
              </div>
            </div>
          </div>


        </div>

        {/* // ?  Project 1 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-8 col-span-7 ">
              {/* <a href={"https://ubiquitous-bublanina-da84ec.netlify.app/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a> */}
              <Img src={"/swiftly-banner.png"} alt={"Project Screen shot"} className={`w-5/6 rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/swiftly-banner.png"} alt={"Project Screen shot"} className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <Link href={"/userdatapuller"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Swiftly
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  A learning platform for Swift programming targeted towards Students in a high school setting. It was created with 
                  React (website) and SwiftUI (iOS app). It Offers a learning tool that teachers can use to complement their main course teachings.
                  Provides students a streamlined approach to learn Swift programming with an emphasis on applied learning and
                  Provides teachers ability to create learning content and data analytic tools to monitor classroom performances.
                </p>
                {/* <p className="text-gray-300 md:text-gray-400 text-left ">
                  I had the opportunity to lead the development of a token project, which aimed to create a
                  decentralized ecosystem for peer-to-peer transactions. Overseeing the planning and development of the
                  project, including the <span className="text-AAsecondary"> design</span> and implementation of the{" "}
                  <span className="text-AAsecondary"> smart contract</span> and{" "}
                  <span className="text-AAsecondary"> blockchain technology</span>. Here i share with you{" "}
                  <span className="text-AAsecondary"> YPredict - v1 </span> for the private sale.
                </p> */}
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">iOS</span>
                <span className="pr-4 z-10">SwiftUI</span>
                <span className="pr-4 z-10">Google Firebase</span>
                <span className="pr-4 z-10">IBM Watson</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/MadhavJai007/Swiftly-Expert" />
                <GithubIcon link="https://github.com/MadhavJai007/Swiftly" />
                {/* <a href="https://ubiquitous-bublanina-da84ec.netlify.app/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a> */}
              </div>
            </div>
          </div>
        </div>

        
        

      </div>
    </div>
  );
}
