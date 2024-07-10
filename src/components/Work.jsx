import gestify from "../assets/gestify.png";

export function Work() {
  return (
    <>
      <div
        className="w-full flex justify-center items-center sm:px-0 px-10"
        id="work"
      >
        <div className="w-full sm:w-[65%] text-white flex justify-center items-center flex-col py-0 sm:py-32 gap-8 ml-0 sm:ml-10">
          <div className="flex justify-start items-center w-full flex-wrap sm:mb-10 mb-2">
            <h2 className="w-fit mr-2 text-2xl sm:text-3xl font-bold">
              <span className="text-xl font-tech text-main-red">03.</span> Some
              of my works
            </h2>
            <div className="w-full border-b-2 border-gray-50"></div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-6 gap-0 sm:gap-20">
            <div className="col-span-1 sm:col-span-4 h-fit sm:h-[350px] mx-auto sm:mr-12 overflow-hidden relative sm:rounded-none rounded-md">
              <div className="sm:flex hidden top-0 absolute w-full h-full hover:bg-transparent transition-all ease-in-out bg-main-red/50"></div>
              <img
                src={gestify}
                alt="gestify"
                className="w-full h-full  object-fill"
              />
            </div>
            <div className="col-span-1 sm:col-span-2 h-fit flex justify-center flex-col items-center sm:items-end py-4 text-end gap-4">
              <h4 className="font-tech text-second-red text-xl sm:text-base">
                Fullstack Project
              </h4>
              <h2 className=" sm:text-xl font-extrabold text-wrap text-center sm:text-nowrap text-2xl">
                Gestify - Business Management
              </h2>
              <div className="overflow-visible w-full sm:w-[500px] text-justify sm:text-end bg-main-red p-5 relative rounded-md shadow-2xl">
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
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
