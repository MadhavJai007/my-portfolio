import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import YoutubeIcon from "../../Icons/YoutubeIcon";

const IconsData = [
  { href: "https://github.com/MadhavJai007", Icon: GithubIcon },
  { href: "https://www.linkedin.com/in/madhav-jaisankar/", Icon: LinkedinIcon },
  // { href: "https://www.instagram.com/titof_abdo/", Icon: InstagramIcon },
  // { href: "https://www.youtube.com/@abdellatif_anaflous", Icon: YoutubeIcon },
];

const ClickableIcon = props => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon className={"w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"} />
    </a>
  );
};

export default function GetInTouch() {
  return (
    <div id="GetInTouchSection" data-aos="fade-up" className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary">
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base">
            {" "}
            04.
          </span>
          <span className=" font-sans text-AAsecondary text-base">
            What&apos;s Next?
          </span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
        Let&apos;s connect
      </span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        I&apos;m always looking for new opportunities and people to mee, so let&apos;s link up! 
        <br className="md:block hidden" />
        Even if you just want to say hello
      </p>
      <div className="pt-4">
        <a href="mailto:madhav.jaisankar@gmail.com" target={"_blank"} rel="noreferrer">
          <button
            className="font-mono text-sm text-AAsecondary border-AAsecondary 
                            px-8 py-4 border-[1.5px] rounded "
          >
            Say Hello
          </button>
        </a>
      </div>
      <div className={`flex flex-row space-x-8 pt-3`}>
        {IconsData.map((iconData, index) => {
          return <ClickableIcon key={index} href={iconData.href} Icon={iconData.Icon} />;
        })}
      </div>
    </div>
  );
}
