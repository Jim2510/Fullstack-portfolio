import photo from "../assets/IMG_20240627_134508_resized_20240627_015015515.jpg";
import fe from "../assets/2d90c275-4833-418c-b285-abd686a4ad97.png";
import fs from "../assets/fullstack-certificate.png";

export function About() {
  return (
    <>
      <div className="w-full flex justify-center items-center" id="about">
        <div className="w-full sm:w-[75%] text-white flex justify-center items-center flex-col py-32 gap-8 mx-10 sm:ml-44">
          <div className="w-full flex sm:flex-row flex-col-reverse justify-center items-start gap-10">
            <div className="sm:w-[50%] h-fit flex justify-start items-start flex-col">
              <div className="flex justify-start items-center w-full flex-wrap mb-10">
                <h2 className="w-fit mr-2 text-3xl font-bold">
                  <span className="text-xl font-tech text-main-red">01.</span>{" "}
                  About Me
                </h2>
                <div className="w-full border-b-2 border-gray-50"></div>
              </div>
              <p className="mb-4 sm:mb-10 text-start text-sm sm:text-base">
                I am Gianmarco, a certified Full-Stack Developer from Develhope.
                During my studies, I had the opportunity to lead a team project,
                where I honed my skills in collaboration, project management,
                and problem-solving. This experience reinforced my passion for
                building efficient and scalable web applications.
              </p>
              <p className="mb-4 sm:mb-10 text-start text-sm sm:text-base">
                Currently, I am expanding my expertise by diving into Python
                with a focus on machine learning. My career goal is to join an
                innovative company where I can demonstrate my abilities and grow
                as a junior developer.
              </p>
              <p className="mb-4 sm:mb-10 text-start text-sm sm:text-base">
                In addition to my professional pursuits, I have a passion for
                electronic music, technology, cinema, and nature, which fuels my
                creativity and continuous learning.
              </p>
              <div className="mb-10 flex gap-2">
                <a
                  download
                  href={fe}
                  className="transition-all ease-in-out hover:bg-main-red hover:text-black cursor-pointer mt-3 hover:bottom-2 bg-custom-green border-[2px] rounded-md border-main-red px-4 py-1 font-tech text-emerald-400"
                >
                  Front-end Certificate
                </a>
                <a
                  download
                  href={fs}
                  className="transition-all ease-in-out hover:bg-main-red hover:text-black cursor-pointer mt-3 hover:bottom-2 bg-custom-green border-[2px] rounded-md border-main-red px-4 py-1 font-tech text-emerald-400"
                >
                  FullStack Certificate
                </a>
              </div>
              <p className="mb-5 text-sm sm:text-base">
                Here are a few technologies I’ve been working with recently:
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 grid-rows-4 font-semibold gap-3 justify-center items-center w-full ">
                <div className="flex justify-start items-center gap-2 text-xs font-tech">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-braces fill-main-red sm:flex hidden"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
                  </svg>
                  <p className="sm:text-start text-center w-full">Javascript</p>
                </div>
                <div className="flex justify-start items-center gap-4 text-xs font-tech">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-braces fill-main-red sm:flex hidden"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
                  </svg>
                  <p className="sm:text-start text-center w-full">Typescript</p>
                </div>
                <div className="flex justify-start items-center gap-4 text-xs font-tech">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-braces fill-main-red sm:flex hidden"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
                  </svg>
                  <p className="sm:text-start text-center w-full">React</p>
                </div>
                <div className="flex justify-start items-center gap-4 text-xs font-tech">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-braces fill-main-red sm:flex hidden"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
                  </svg>
                  <p className="sm:text-start text-center w-full">Redux</p>
                </div>
                <div className="flex justify-start items-center gap-4 text-xs font-tech">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-braces fill-main-red sm:flex hidden"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
                  </svg>
                  <p className="sm:text-start text-center w-full">NodeJs</p>
                </div>
                <div className="flex justify-start items-center gap-4 text-xs font-tech">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-braces fill-main-red sm:flex hidden"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
                  </svg>
                  <p className="sm:text-start text-center w-full">Express</p>
                </div>
                <div className="flex justify-start items-center gap-4 text-xs font-tech">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-braces fill-main-red sm:flex hidden"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
                  </svg>
                  <p className="sm:text-start text-center w-full">MongoDB</p>
                </div>
                <div className="flex justify-start items-center gap-4 text-xs font-tech">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-braces fill-main-red sm:flex hidden"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
                  </svg>
                  <p className="sm:text-start text-center w-full">SQL</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[30%] h-full sm:relative group sm:left-5 top-20 sm:p-0 px-12 mx-5 sm:mx-0">
              <div className="w-[200px] sm:w-[300px] sm:absolute z-10 overflow-hidden h-[250px] sm:h-[300px] rounded-lg hover:-top-2 hover:right-2 top-0 left-0 transition-all ease-in-out">
                <div className="sm:absolute w-full sm:w-[255px] h-ful hover:bg-transparent transition-all ease-in-out rounded-lg"></div>
                <img
                  src={photo}
                  alt=""
                  className="h-full sm:h-[341px] sm:w-[255px] w-full sm:rounded-md object-cover sm:border-none border-4 border-main-red"
                />
              </div>
              <div className=" sm:flex hidden transition-all ease-in-out group-hover:top-4 group-hover:left-4 border-[3px] rounded-t-lg rounded-bl-lg border-main-red w-[255px] h-[300px] absolute top-2 left-2 bg-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
