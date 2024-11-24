import { useState } from "react";
import { motion } from "framer-motion";
import {Button} from "../UI/Button.jsx";

export function OtherWork() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="w-full flex justify-center items-center px-10 sm:px-0 overflow-hidden"
        id="experience"
      >
        <div className="w-full sm:w-[65%] text-white flex justify-center items-center flex-col py-32 gap-8 ml-0">
          <div className="flex justify-center items-center w-full flex-wrap mb-10">
            <h2 className="w-fit mr-2 text-3xl font-bold">Other Projects</h2>
          </div>
          <div className="grid-cols-1 grid sm:grid-cols-3 justify-center items-center w-full gap-6">
            <motion.div initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }} className="h-[300px] bg-main-red/40 backdrop-blur-2xl rounded-md hover:scale-100 sm:hover:scale-105 transition-all ease-in-out">
              <div className="flex justify-between items-center p-10 pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fillRule="currentColor"
                  className="bi bi-folder fill-green-300"
                  viewBox="0 0 16 16"
                >
                  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                </svg>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fillRule="currentColor"
                    className="bi bi-github fill-white hover:scale-150 transition-all ease-in-out"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
              </div>
              <div className="flex justify-center items-start flex-col px-10 gap-4">
                <h3 className="text-xl font-bold">Hackernews App</h3>
                <div className="h-[100px] overflow-auto no-scrollbar">
                  <h2 className="text-sm">
                    Simple app developed to receive real-time news through the
                    service provided by the Hacker News API.
                  </h2>
                </div>
                <p className="font-tech text-xs text-gray-900 font-extrabold">
                  Javascript - Html - Css - Lodash - Axios
                </p>
              </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
                className="h-[300px] bg-main-red/40 backdrop-blur-2xl rounded-md hover:scale-100 sm:hover:scale-105 transition-all ease-in-out">
              <div className="flex justify-between items-center p-10 pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fillRule="currentColor"
                  className="bi bi-folder fill-green-300"
                  viewBox="0 0 16 16"
                >
                  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                </svg>
                <div className="flex justify-center items-center gap-3">
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fillRule="currentColor"
                      className="bi bi-box-arrow-up-right fill-white"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                      />
                      <path
                        fillRule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fillRule="currentColor"
                      className="bi bi-github fill-white hover:scale-150 transition-all ease-in-out"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex justify-center items-start flex-col px-10 gap-4">
                <h3 className="text-xl font-bold">TechnoMachine Blog</h3>
                <div className="h-[100px] overflow-auto no-scrollbar">
                  <h2 className="text-sm">
                    A blog to collect personal articles about the world of
                    electronic music and its current figures.
                  </h2>
                </div>
                <p className="font-tech text-xs text-gray-900 font-extrabold">
                  Typescript - Nextjs - Sanity
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        viewport={{ once: true }} className="h-[300px] bg-main-red/40 backdrop-blur-2xl rounded-md hover:scale-100 sm:hover:scale-105 transition-all ease-in-out">
              <div className="flex justify-between items-center p-10 pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fillRule="currentColor"
                  className="bi bi-folder fill-green-300"
                  viewBox="0 0 16 16"
                >
                  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                </svg>
                <a href="https://github.com/Jim2510/blog-nextjs-sanity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fillRule="currentColor"
                    className="bi bi-github fill-white hover:scale-150 transition-all ease-in-out"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
              </div>
              <div className="flex justify-center items-start flex-col px-10 gap-4">
                <h3 className="text-lg sm:text-xl font-bold">
                  Interactive Sushi Menu
                </h3>
                <div className="h-[100px] overflow-auto no-scrollbar">
                  <h2 className="text-sm">
                    A functional application to track orders, manage inventory,
                    and limit the ordering of certain dishes, ensuring an
                    efficient and organized dining experience.
                  </h2>
                </div>
                <p className="font-tech text-xs text-gray-900 font-extrabold">
                  Javascript - React - Bootstrap
                </p>
              </div>
            </motion.div>
          </div>
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 justify-center items-center w-full gap-6 ${
              isOpen ? "grid" : "hidden"
            }`}
          >
            <div className="h-[300px] bg-main-red/40 backdrop-blur-2xl rounded-md hover:scale-100 sm:hover:scale-105 transition-all ease-in-out">
              <div className="flex justify-between items-center p-10 pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fillRule="currentColor"
                  className="bi bi-folder fill-green-300"
                  viewBox="0 0 16 16"
                >
                  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                </svg>
                <a href="https://github.com/Jim2510/menu-interattivo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fillRule="currentColor"
                    className="bi bi-github fill-white hover:scale-150 transition-all ease-in-out"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
              </div>
              <div className="flex justify-center items-start flex-col px-10 gap-4">
                <h3 className="text-lg font-bold text-nowrap">
                  Netflix Landingpage replica
                </h3>
                <div className="h-[100px] overflow-auto no-scrollbar">
                  <h2 className="text-sm">
                    First replication project for the front-end course, aimed at
                    mastering the basic concepts of creating an effective layout
                    through the selection of dimensions, color palettes, and
                    element arrangement.
                  </h2>
                </div>
                <p className="font-tech text-xs text-gray-900 font-extrabold">
                  Javascript - Html - Css
                </p>
              </div>
            </div>
            <div className="h-[300px] bg-main-red/40 backdrop-blur-2xl rounded-md hover:scale-100 sm:hover:scale-105 transition-all ease-in-out">
              <div className="flex justify-between items-center p-10 pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fillRule="currentColor"
                  className="bi bi-folder fill-green-300"
                  viewBox="0 0 16 16"
                >
                  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                </svg>
                <div className="flex justify-center items-center gap-3">
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fillRule="currentColor"
                      className="bi bi-box-arrow-up-right fill-white"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                      />
                      <path
                        fillRule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </a>
                  <a href="https://github.com/Jim2510/Netflix-Landing-Page">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fillRule="currentColor"
                      className="bi bi-github fill-white hover:scale-150 transition-all ease-in-out"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex justify-center items-start flex-col px-10 gap-4">
                <h3 className="text-xl font-bold">Pancakeswap replica</h3>
                <div className=" h-[100px] overflow-auto no-scrollbar">
                  <h2 className="text-sm">
                    Second replication project: this time, in addition to
                    replicating the simple page layout, I led a team to present
                    an extremely faithful replica of the crypto portal
                    PancakeSwap. The integration of dynamic elements and complex
                    animations allowed me to enhance my skills in developing
                    efficient and optimized clients.
                  </h2>
                </div>
                <p className="font-tech text-xs text-gray-900 font-extrabold">
                  Javascript - Tailwind - Html
                </p>
              </div>
            </div>
            <div className="h-[300px] bg-main-red/40 backdrop-blur-2xl rounded-md hover:scale-100 sm:hover:scale-105 transition-all ease-in-out">
              <div className="flex justify-between items-center p-10 pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fillRule="currentColor"
                  className="bi bi-folder fill-green-300"
                  viewBox="0 0 16 16"
                >
                  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                </svg>
                <a href="https://github.com/Jim2510/PancakeSwap-Project">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fillRule="currentColor"
                    className="bi bi-github fill-white hover:scale-150 transition-all ease-in-out"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
              </div>
              <div className="flex justify-center items-start flex-col px-10 gap-4">
                <h3 className="text-xl font-bold">OpenLibrary App</h3>
                <div className="h-[100px] overflow-auto no-scrollbar">
                  <h2 className="text-sm">
                    First fullstack project aimed at understanding the concept
                    of REST APIs. By integrating the free service offered by
                    OpenLibrary, I enabled the functionality to search for books
                    through a search bar and retrieve all relevant information.
                  </h2>
                </div>
                <p className="font-tech text-xs text-gray-900 font-extrabold">
                  Javascript - OpenLibrary API
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-10">
            <Button label={isOpen ? "Show Less" : "Show More"} onClick={handleOpen} />
          </div>
        </div>
      </div>
    </>
  );
}
