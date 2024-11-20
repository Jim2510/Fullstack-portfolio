import { motion } from "framer-motion";

export function TitleSection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
        viewport={{ once: true }}
        className="w-full flex justify-center items-center mt-14"
        id="home"
      >
        <div className="w-full sm:w-[75%] h-screen text-white flex justify-center items-center flex-col pt-24 p-10 sm:p-32 gap-8">
          <h4 className="text-main-red self-start font-tech text-lg sm:text-xl -mb-5">
            Hi, my name is
          </h4>
          <h1 className="text-start sm:self-start text-4xl sm:text-6xl -mb-5 font-extrabold">
            Gianmarco Guglielmino.
          </h1>
          <h2 className=" self-start text-2xl text-center sm:text-5xl font-bold">
            I build things for the web.
          </h2>
          <h4 className="max-w-[700px] text-start sm:self-start text-base sm:text-lg sm:leading-6">
            I am a full-stack developer specializing in creating exceptional
            digital experiences. Currently, I work at Norma&apos;s Teaching, an
            online English school based in Milan. I hold a certification as a{" "}
            <span className=" text-main-red font-extrabold">Full-Stack </span>
            Developer and am proficient in programming languages and
            technologies such as JavaScript, TypeScript, React, Next.js, SQL,
            NoSQL, Node.js, and Express. I am also expanding my expertise by
            studying Python, with plans to explore machine learning.{" "}
            <span className="text-main-red font-extrabold">
              machine learning
            </span>
            .
          </h4>
        </div>
      </motion.div>
    </>
  );
}
