import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FeverTokens() {
  const tasks = [
    {
      text: "Developed a solution with React.js, AWS and Twilio APIs to send notification campaigns to the company's 50+ clients.",
      keywords: ["React.js", "AWS", "Twilio"],
    },
    {
      text: "Developed React.js website to manage the notification system and the 1000+ healthcare workers it sends them to daily.",
      keywords: ["React.js", "notification system"],
    },
    {
      text: "Ensured a successful integration of the system for internal use within the company.",
      keywords: ["successful integration"],
    },
    {
      text: "Developed an automated email system using Twilio to generate daily performance reports of the notification campaigns",
      keywords: ["Twilio", "performace reports"]
    }
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Mobile Application Developer <span className="text-AAsecondary">@ Nevvon</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">May 2021 - December 2021</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
