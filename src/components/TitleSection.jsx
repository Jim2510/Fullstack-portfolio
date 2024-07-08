export function TitleSection() {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-14" id="home">
        <div className="w-[75%] text-white flex justify-center items-center flex-col p-32 gap-8">
          <h4 className="text-main-red self-start font-tech text-xl -mb-5">
            Hi, my name is
          </h4>
          <h1 className=" self-start text-6xl -mb-5 font-extrabold">
            Gianmarco Guglielmino.
          </h1>
          <h2 className=" self-start text-5xl font-bold">
            I build things for the web.
          </h2>
          <h4 className="max-w-[700px] self-start text-lg leading-6">
            I&apos;m a fullstack developer specialised in building exceptional
            digital experiences. I have obtained certification as a{" "}
            <span className=" text-main-red font-extrabold">Full-Stack </span>
            Developer, specializing in programming languages such as JavaScript,
            TypeScript, React, Next.js, SQL, NoSQL (MongoDB), Node.js, and
            Express.js. Currently, I am furthering my studies in Python with
            plans to delve into{" "}
            <span className="text-main-red font-extrabold">
              machine learning
            </span>
            .
          </h4>
        </div>
      </div>
    </>
  );
}
