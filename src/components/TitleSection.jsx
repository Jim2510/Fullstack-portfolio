import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export function TitleSection({ refForm }) {
    // eslint-disable-next-line react/prop-types
    const handleRefForm = () => refForm.current?.scrollIntoView({ behavior: 'smooth' });

    return (
        <>
            <div className="relative w-full h-screen overflow-hidden z-0">
                {/* Curva inferiore animata */}

                <svg
                    className="absolute top-0 left-0 w-[500%] sm:ml-0 ml-50 sm:w-full h-full z-10 shadow-inner overflow-visible"
                    viewBox="0 0 350 200"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <filter id="liquid">
                            <feTurbulence
                                type="turbulence"
                                baseFrequency="0.01 0.02"
                                numOctaves="10"
                                result="turbulence"
                                seed="2"
                            />
                            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="15"/>
                        </filter>

                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <motion.stop
                                offset="0%"
                                stopColor="#008170"
                                animate={{stopColor: ["#008170", "#00FFD1", "#00B894", "#008170"]}}
                                transition={{duration: 14, repeat: Infinity, ease: "easeInOut"}}
                            />
                            <motion.stop
                                offset="50%"
                                stopColor="#00FFD1"
                                animate={{stopColor: ["#00FFD1", "#00B894", "#008170", "#00FFD1"]}}
                                transition={{duration: 18, repeat: Infinity, ease: "easeInOut"}}
                            />
                            <motion.stop
                                offset="100%"
                                stopColor="#00B894"
                                animate={{stopColor: ["#00B894", "#008170", "#00FFD1", "#00B894"]}}
                                transition={{duration: 16, repeat: Infinity, ease: "easeInOut"}}
                            />
                        </linearGradient>
                    </defs>

                    {/* Effetto fluido centrale */}
                    <motion.circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="url(#gradient1)"
                        // filter="url(#liquid)"  <--- Rimuovi o commenta questa riga
                        animate={{
                            r: [90, 100, 90],
                            cx: [100, 110, 100],
                            cy: [100, 110, 100],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Particelle */}
                    {[...Array(10)].map((_, i) => (
                        <motion.circle
                            key={i}
                            cx={Math.random() * 300}
                            cy={Math.random() * 200}
                            r={Math.random() * 2 + 1}
                            fill="#00FFD1"
                            animate={{
                                cy: ["0%", "100%", "0%"],
                                opacity: [0.2, 0.8, 0.2],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                repeatType: "loop",
                                delay: Math.random() * 3,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </svg>

                <svg
                    className="sm:flex hidden absolute bottom-0 left-0 w-full z-10 shadow-2xl"
                    viewBox="0 0 540 320"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="futuristicGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <motion.stop
                                offset="0%"
                                stopColor="#008170"
                                animate={{stopColor: ["#008170", "#00FFD1", "#00B894", "#008170"]}}
                                transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}
                            />
                            <motion.stop
                                offset="50%"
                                stopColor="#00FFD1"
                                animate={{stopColor: ["#00FFD1", "#00B894", "#008170", "#00FFD1"]}}
                                transition={{duration: 10, repeat: Infinity, ease: "easeInOut"}}
                            />
                            <motion.stop
                                offset="100%"
                                stopColor="#00B894"
                                animate={{stopColor: ["#00B894", "#008170", "#00FFD1", "#00B894"]}}
                                transition={{duration: 12, repeat: Infinity, ease: "easeInOut"}}
                            />
                        </linearGradient>

                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="30" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>

                    <motion.path
                        fill="url(#futuristicGradient)"
                        filter="url(#glow)"
                        animate={{
                            d: [
                                "M0,220 C100,300 250,120 540,260 L540,320 L0,320 Z",
                                "M0,210 C80,270 300,180 540,250 L540,320 L0,320 Z",
                                "M0,230 C120,290 260,140 540,240 L540,320 L0,320 Z",
                                "M0,220 C100,300 250,120 540,260 L540,320 L0,320 Z",
                            ]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
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
                        <h2 className="self-start text-2xl text-center sm:text-5xl font-bold">
                            I build things for the web.
                        </h2>
                        <h4 className="max-w-[700px] text-start sm:self-start text-base sm:text-lg sm:leading-6">
                            I am a full-stack developer specializing in creating exceptional digital experiences.
                            Currently, I work at Norma&apos;s Teaching, an
                            online English school based in Milan. I hold a certification as a{" "}
                            <span className="text-third-green font-extrabold">Full-Stack </span>
                            Developer and am proficient in programming languages and technologies such as JavaScript,
                            TypeScript, React, Next.js, SQL,
                            NoSQL, Node.js, and Express. I am also expanding my expertise by
                            studying Python, with plans to explore{" "}
                            <span className="text-third-green font-extrabold">machine learning</span>.
                        </h4>
                    </div>
                    <motion.button onClick={handleRefForm}
                                   initial={{
                                       y: -20,
                                       opacity: 0,
                                       backgroundImage: "linear-gradient(to bottom, #008170, #00FFD1)",
                                   }}
                                   whileInView={{
                                       y: 0,
                                       opacity: 1,
                                   }}
                                   whileTap={{
                                       backgroundImage: "linear-gradient(to bottom, #00FFD1, #008170)",
                                   }}
                                   viewport={{once: true}}
                                   className={`text-black relative px-7 py-2 sm:text-lg rounded-md font-tech bottom-40 mt-20 sm:bottom-60 sm:mt-10 z-20`}>DISCOVER
                    </motion.button>
                </motion.div>
            </div>
        </>
    );
}
