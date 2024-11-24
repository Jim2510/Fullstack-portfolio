import gestify from "../assets/gestify.png";
import blog from "../assets/Immagine 2024-07-27 131435.png";
import theme from "../assets/Screenshot 2024-08-27 123417.png";
import retrova from "../assets/Screenshot 2024-08-27 124559.png";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";

export function Work() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpenTwo, setModalOpenTwo] = useState(false);
  const [isModalOpenThree, setModalOpenThree] = useState(false);
  const [isModalOpenFour, setModalOpenFour] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openModalTwo = () => setModalOpenTwo(true);
  const closeModalTwo = () => setModalOpenTwo(false);
  const openModalThree = () => setModalOpenThree(true);
  const closeModalThree = () => setModalOpenThree(false);
  const closeModalFour = () => setModalOpenFour(false);
  const openModalFour = () => setModalOpenFour(true);
  return (
    <>
      <div
        className="w-full flex justify-center items-center sm:px-0 px-10 overflow-hidden"
        id="work"
      >
        <div className="w-full sm:w-[65%] text-white flex justify-center items-center flex-col py-0 sm:py-32 gap-8 ml-0 sm:ml-10">
          <motion.div
              initial={{opacity: 0, x: -150}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 1, delay: 0.2}}
              viewport={{once: true}}
              className="flex justify-start items-center w-full flex-wrap sm:mb-10 mb-2">
            <h2 className="w-fit mr-2 text-2xl sm:text-3xl font-bold">
              <span className="text-xl font-tech text-main-red">03.</span> Some
              of my works
            </h2>
            <div className="w-full border-b-2 border-gray-50"></div>
          </motion.div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-6 gap-0 sm:gap-20">
            <motion.div
                initial={{opacity: 0, x: -150}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1, delay: 0.5}}
                viewport={{once: true}}
                layoutId="gestify-modal"
                className="col-span-1 sm:col-span-4 h-fit sm:h-[350px] mx-auto sm:mr-12 overflow-hidden relative sm:rounded-none rounded-md"
                onClick={openModal} // Open modal on click
            >
              <motion.img
                  src={gestify}
                  alt="gestify"
                  className="w-full h-full object-cover sm:object-contain cursor-pointer"
              />
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
              {isModalOpen && (
                  <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
                        onClick={closeModal} // Close modal on clicking the overlay
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    ></motion.div>

                    {/* Modal Content */}
                    <motion.div
                        layoutId="gestify-modal"
                        className="fixed top-36 -translate-x-2/3 -ml-10 w-[90%] sm:w-[70%] h-auto max-h-[80%] z-50 overflow-hidden rounded-lg bg-white shadow-lg"
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.8}}
                        transition={{duration: 0.4}}
                        style={{transform: "translate(0%, 0%)"}}
                    >
                      <img src={gestify} alt="gestify" className="w-full h-full object-contain"/>
                    </motion.div>
                  </>
              )}
            </AnimatePresence>
            <motion.div
                initial={{opacity: 0, x: 150}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1, delay: 0.8}}
                viewport={{once: true}}
                layoutId="modal"
                className="col-span-1 sm:col-span-2 h-fit flex justify-center flex-col items-center sm:items-end py-4 text-end gap-4"
            >
              <h4 className="font-tech text-second-red text-xl sm:text-base">
                Fullstack Project
              </h4>
              <h2 className=" sm:text-xl font-extrabold text-wrap text-center sm:text-nowrap text-2xl">
                Gestify - Business Management
              </h2>
              <div
                  className="overflow-visible w-full sm:w-[500px] text-justify sm:text-end bg-main-red/60 backdrop-blur-2xl p-5 relative rounded-md shadow-2xl">
                <p className="text-sm font-semibold">
                  &quot;Gestify&quot; is a business management system designed
                  to provide efficient and customized solutions for commercial
                  needs. This project was developed as the final project for the
                  fullstack programming course attended.
                </p>
              </div>
              <h4 className="text-[12px] overflow-visible font-tech text-wrap sm:text-nowrap text-center">
                Javascript - React - Redux - Node - Express - Jwt - MongoDB
              </h4>
              <a href="https://github.com/Jim2510/gestify_business_managment/tree/main">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fillRule="currentColor"
                    className="bi bi-github fill-white"
                    viewBox="0 0 16 16"
                >
                  <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>
            </motion.div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-6 gap-0 sm:gap-20 flex-row-reverse sm:mt-20">
            <motion.div initial={{opacity: 0, x: -150}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.8}}
                        viewport={{once: true}}
                        layoutId="modal"
                        className="sm:order-1 order-2 col-span-1 sm:col-span-2 h-fit flex justify-center flex-col items-center sm:items-start z-10 py-4 text-end gap-4">
              <h4 className="font-tech text-second-red text-xl sm:text-base">
                Fullstack Project
              </h4>
              <h2 className=" sm:text-xl font-extrabold text-wrap text-center sm:text-nowrap text-2xl">
                The Loud Whisper - Forum
              </h2>
              <div
                  className="overflow-visible w-full sm:w-[500px] text-justify sm:text-start bg-main-red/60 backdrop-blur-2xl p-5 relative rounded-md shadow-2xl">
                <p className="text-sm font-semibold">
                  &quot;The Loud Whisper&quot; is a blogging platform designed
                  to provide comprehensive web development solutions. This
                  application integrates advanced frontend technologies with
                  robust backends and DevOps practices for optimal content
                  management.
                </p>
              </div>
              <h4 className="text-[12px] overflow-visible font-tech text-wrap sm:text-nowrap text-center">
                Next - Node - Jwt - MongoDB - mongoose
              </h4>
              <a href="https://github.com/Jim2510/gestify_business_managment/tree/main">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fillRule="currentColor"
                    className="bi bi-github fill-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                onClick={openModalTwo}
                layoutId="modal"
                className="sm:order-2 order-1 col-span-1 sm:col-span-4 h-fit sm:h-[350px] mx-auto  overflow-hidden relative sm:rounded-none rounded-md"
            >
              <img
                src={blog}
                alt="blog"
                className="w-full h-full  object-cover sm:object-contain"
              />
            </motion.div>
            <AnimatePresence>
              {isModalOpenTwo && (
                  <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
                        onClick={closeModalTwo} // Close modal on clicking the overlay
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    ></motion.div>

                    {/* Modal Content */}
                    <motion.div
                        layoutId="blog-modal"
                        className="cursor-pointer fixed top-36 -translate-x-2/3 -ml-10 w-[90%] sm:w-[70%] h-auto max-h-[80%] z-50 overflow-hidden rounded-lg bg-white shadow-lg"
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.8}}
                        transition={{duration: 0.4}}
                        style={{transform: "translate(0%, 0%)"}}
                    >
                      <img src={blog} alt="blog" className="w-full h-full object-contain cursor-pointer" />
                    </motion.div>
                  </>
              )}
            </AnimatePresence>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-6 gap-0 sm:gap-20">
            <motion.div initial={{ opacity: 0, x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        onClick={openModalThree}
                        layoutId="modal" className="col-span-1 sm:col-span-4 h-fit sm:h-[350px] mx-auto sm:mr-12 overflow-hidden relative sm:rounded-none rounded-md">
              <img
                src={theme}
                alt="dywmDark"
                className="w-full h-full  object-cover sm:object-contain"
              />
            </motion.div>
            <AnimatePresence>
              {isModalOpenThree && (
                  <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
                        onClick={closeModalThree} // Close modal on clicking the overlay
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    ></motion.div>

                    {/* Modal Content */}
                    <motion.div
                        layoutId="theme-modal"
                        className="fixed top-36 -translate-x-2/3 -ml-10 w-[90%] sm:w-[70%] h-auto max-h-[80%] z-50 overflow-hidden rounded-lg bg-white shadow-lg"
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.8}}
                        transition={{duration: 0.4}}
                        style={{transform: "translate(0%, 0%)"}}
                    >
                      <img src={theme} alt="blog" className="w-full h-full object-contain"/>
                    </motion.div>
                  </>
              )}
            </AnimatePresence>
            <motion.div initial={{ opacity: 0, x: 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        viewport={{ once: true }}
                        layoutId="modal" className="col-span-1 sm:col-span-2 h-fit flex justify-center flex-col items-center sm:items-end py-4 text-end gap-4">
              <h4 className="font-tech text-second-red text-xl sm:text-base">
                VS Code Theme
              </h4>
              <h2 className=" sm:text-xl font-extrabold text-wrap text-center sm:text-nowrap text-2xl">
                DYWMD - Dark
              </h2>
              <div className="overflow-visible w-full sm:w-[500px] text-justify sm:text-end bg-main-red/60 backdrop-blur-2xl p-5 relative rounded-md shadow-2xl">
                <p className="text-sm font-semibold">
                  DYWM Dark is a VS Code color theme crafted to share one of my
                  favorite palettes with the community. It enhances visibility
                  with increased contrast while maintaining a soothing and
                  eye-friendly aesthetic. Ideal for long coding sessions, it
                  combines readability with a relaxing visual experience.
                </p>
              </div>
              <h4 className="text-[12px] overflow-visible font-tech text-wrap sm:text-nowrap text-center">
                Json
              </h4>
              <a href="https://github.com/Jim2510/dywmd-theme-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fillRule="currentColor"
                  className="bi bi-github fill-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
            </motion.div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-6 gap-0 sm:gap-20 flex-row-reverse sm:mt-20">
            <motion.div initial={{ opacity: 0, x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        viewport={{ once: true }}
                        layoutId="modal" className="sm:order-1 order-2 col-span-1 sm:col-span-2 h-fit flex justify-center flex-col items-center sm:items-start z-10 py-4 text-end gap-4">
              <h4 className="font-tech text-second-red text-xl sm:text-base">
                Fullstack Project
              </h4>
              <h2 className=" sm:text-xl font-extrabold text-wrap text-center sm:text-nowrap text-2xl">
                Retrova e-commerce
              </h2>
              <div className="overflow-visible w-full sm:w-[500px] text-justify sm:text-start bg-main-red/60 backdrop-blur-2xl p-5 relative rounded-md shadow-2xl">
                <p className="text-sm font-semibold">
                  &quot;Retrova&quot; represents my first independent project,
                  undertaken in collaboration with a Sicilian startup to create
                  a cutting-edge, efficient, and user-friendly e-commerce
                  platform for jewelry sales. This project was realized through
                  the use of the Next.js framework, which was employed to
                  develop the frontend and manage the routing. These routes were
                  designed to seamlessly integrate with and support the Shopify
                  storefront, ensuring a smooth and engaging shopping experience
                  for users.
                </p>
              </div>
              <h4 className="text-[12px] overflow-visible font-tech text-wrap sm:text-nowrap text-center">
                Next - Node - ShopifyApi - GraphQL - Javascript
              </h4>
              <a href="https://github.com/Jim2510/retrova-ecom">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fillRule="currentColor"
                  className="bi bi-github fill-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        onClick={openModalFour}
                        layoutId="modal" className="sm:order-2 order-1 col-span-1 sm:col-span-4 h-fit sm:h-[350px] mx-auto  overflow-hidden relative sm:rounded-none rounded-md">
              <img
                src={retrova}
                alt="retrova"
                className="w-full h-full  object-cover sm:object-contain"
              />
            </motion.div>
            <AnimatePresence>
              {isModalOpenFour && (
                  <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
                        onClick={closeModalFour} // Close modal on clicking the overlay
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    ></motion.div>

                    {/* Modal Content */}
                    <motion.div
                        layoutId="retrova-modal"
                        className="fixed top-36 -translate-x-2/3 -ml-10 w-[90%] sm:w-[70%] h-auto max-h-[80%] z-50 overflow-hidden rounded-lg bg-white shadow-lg"
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.8}}
                        transition={{duration: 0.4}}
                        style={{transform: "translate(0%, 0%)"}}
                    >
                      <img src={retrova} alt="retrova" className="w-full h-full object-contain"/>
                    </motion.div>
                  </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
