import { motion } from "framer-motion";
import {CtaButton} from "../UI/CtaButton.jsx";

export function TitleSection() {
  return (
      <>
        <div className="relative w-full overflow-hidden z-0">
          {/* Curva inferiore */}
          <svg
              className="absolute bottom-0 left-0 w-full z-10"
              viewBox="0 0 540 320"
              preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#008170" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#00FFD1" stopOpacity="0.5"/>
              </linearGradient>
            </defs>
            <path
                fill="url(#myGradient)"
                d="M0,200 C90,260 270,140 540,220 L540,320 L0,320 Z"
            />
          </svg>

          <motion.div
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 3}}
              viewport={{once: true}}
              className="w-full flex flex-col relative justify-center items-center sm:mt-5 overflow-hidden z-20"
              id="home"
          >
            <div
                className="w-full sm:w-[75%] h-screen text-white flex justify-center items-center flex-col pt-24 p-10 sm:p-32 md:pl-48 lg:pl-48 xl:pl-48 2xl:pl-72 gap-8">
              <h4 className="text-third-green self-start font-tech text-lg sm:text-xl md:text-2xl -mb-5">
                Hi, my name is
              </h4>
              <h1 className="text-start sm:self-start md:text-7xl text-4xl sm:text-6xl -mb-5 font-extrabold text-wrap sm:text-nowrap">
                Gianmarco Guglielmino.
              </h1>
              <h2 className=" self-start text-2xl text-center sm:text-5xl font-bold">
                I build things for the web.
              </h2>
              <h4 className="max-w-[700px] text-start sm:self-start text-base sm:text-lg sm:leading-6">
                I am a full-stack developer specializing in creating exceptional
                digital experiences. Currently, I work at Norma&apos;s Teaching, an
                online English school based in Milan. I hold a certification as a{" "}
                <span className=" text-third-green font-extrabold">Full-Stack </span>
                Developer and am proficient in programming languages and
                technologies such as JavaScript, TypeScript, React, Next.js, SQL,
                NoSQL, Node.js, and Express. I am also expanding my expertise by
                studying Python, with plans to explore{" "}
                <span className="text-third-green font-extrabold">
              machine learning
            </span>
                .
              </h4>
            </div>
            <CtaButton label="Discover" />
          </motion.div>
        </div>
        </>
        );
        }
