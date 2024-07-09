import { useEffect, useState } from "react";
import logo from "../../src/assets/Immagine_2024-07-08_181241-removebg-preview.png";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navLink = [
    { num: "01. ", title: "ABOUT", link: "#about" },
    { num: "02. ", title: "EXPERIENCE", link: "#experience" },
    { num: "03. ", title: "WORK", link: "#work" },
    { num: "04. ", title: "CONTACT", link: "#contact" },
  ];

  return (
    <div
      className={`fixed top-0 w-full h-[70px] bg-transparent shadow-2xl z-20 flex justify-center items-center transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="w-full h-full absolute backdrop-blur-md -z-10"></div>
      <div className="flex justify-between items-center w-full">
        <a href="#home">
          <img
            src={logo}
            alt="logo"
            width={60}
            height={60}
            className="sm:ml-10 ml-4"
          />
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-5 h-[50px] mr-4 sm:mr-10 justify-start items-center gap-4">
          {navLink.map((el, index) => {
            return (
              <button
                key={index}
                className="w-full sm:flex hidden text-gray-50 text-[16px] font-tech justify-center items-center hover:text-main-red transition-all ease-in-out"
              >
                <a
                  href={el.link}
                  className="flex justify-center items-center gap-1 text-center"
                >
                  <span className="text-sm font-tech text-main-red text-start">
                    {el.num}
                  </span>
                  {el.title}
                </a>
              </button>
            );
          })}
          <a
            download
            href="..\src\assets\CV_GuglielminoGianmarco.pdf"
            className="transition-all ease-in-out hover:bg-main-red hover:text-black cursor-pointer mt-2 hover:bottom-2 bg-custom-green border-[2px] rounded-md sm:text-base text-sm border-main-red px-2 sm:px-4 py-1 font-tech text-emerald-400 mx-4 mb-2"
          >
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
}
