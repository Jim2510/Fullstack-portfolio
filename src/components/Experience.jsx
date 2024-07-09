import { useState } from "react";
import { ExpText } from "./ExpText";
import experienceData from "../data/exp";

export function Experience() {
  const [activeButton, setActiveButton] = useState("Start2Impact");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const currentData = experienceData[activeButton] || {};

  return (
    <>
      <div
        className="w-full flex justify-center items-center sm:mx-0 mx-10"
        id="experience"
      >
        <div className="w-full sm:w-[50%] text-white flex justify-center items-center flex-col py-32 gap-8">
          <div className="w-full">
            <div className="flex justify-start items-center w-full flex-wrap mb-10">
              <h2 className="w-fit mr-2 text-3xl font-bold">
                <span className="text-xl font-tech text-main-red">02.</span>{" "}
                Experience
              </h2>
              <div className="w-full border-b-2 border-gray-50"></div>
            </div>
          </div>
          <div className="w-full sm:flex-row flex-col flex gap-20 px-0 sm:px-5">
            <div className="col-span-1 flex flex-row sm:flex-col items-start font-tech justify-start">
              <button
                className={`border-b-2 sm:border-l-2 px-2 py-2 min-w-[130px] text-center sm:text-start ${
                  activeButton === "Start2Impact"
                    ? "text-main-red border-main-red font-bold bg-second-red/20"
                    : "text-white border-main-red/50"
                }`}
                onClick={() => handleButtonClick("Start2Impact")}
              >
                Start2Impact
              </button>
              <button
                className={`border-b-2 sm:border-l-2 px-2 py-2 min-w-[130px] text-center sm:text-start ${
                  activeButton === "Develhope"
                    ? "text-main-red border-main-red font-bold bg-second-red/20"
                    : "text-white border-main-red/50"
                }`}
                onClick={() => handleButtonClick("Develhope")}
              >
                Develhope
              </button>
              <button
                className={`border-b-2 sm:border-l-2 px-2 py-2 min-w-[130px] text-center sm:text-start ${
                  activeButton === "Other"
                    ? "text-main-red border-main-red font-bold bg-second-red/20"
                    : "text-white border-main-red/50"
                }`}
                onClick={() => handleButtonClick("Other")}
              >
                Other
              </button>
            </div>
            <div className="w-full col-span-5">
              <ExpText {...currentData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
