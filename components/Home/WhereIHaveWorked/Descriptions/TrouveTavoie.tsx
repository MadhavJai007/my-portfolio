import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {
  const tasks = [
    {
      text: "Collaborated in an agile team to develop the React Native app (android) for Cloud DX’s Vitaliti project.",
      keywords: ["React Native"],
    },
    {
      text: "Implemented data analytics features within the Android app to collect real-time, health related data from patients",
      keywords: ["data analytics", "Android"],
    },
    {
      text: "Quickly learnt about the codebase to troubleshoot persisting issues in order to meet functional requirements.",
      keywords: [],
    },
    {
      text: "Optimized data analytics’ accuracy of vital information displayed within the app",
      keywords: [],
    },
    {
      text: "Worked with the project lead to research and develop strategies to improve the app’s feature-set.",
      keywords: [],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Application Developer <span className="text-AAsecondary">@ Cloud DX</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">January - May 2022</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
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
