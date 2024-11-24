import { useGitHub } from "../Hooks/useGitHub.js";
import { motion } from "framer-motion";
import {useEffect, useState} from "react";

export function GithubProfile() {
    const { data, loading, error } = useGitHub();
    const [viewWidth, setViewWidth] = useState(null);


    const weeks = data?.user?.contributionsCollection?.contributionCalendar?.weeks;
    const viewWidthL = window.innerWidth;

    useEffect(() => {
        setViewWidth(viewWidthL)
    }, []);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(data);

    return (
        <>
            <div className="overflow-hidden">
                <motion.div
                    initial={{opacity: 0, x: 150}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.2}}
                    viewport={{once: true}}
                    className="w-full flex justify-center px-10 md:p-10 md:mt-0 mt-20 overflow-hidden">
                    <div className="flex justify-start items-center w-full md:w-[50%] flex-wrap mb-2 md:mb-10">
                        <h2 className="w-fit mr-2 text-3xl font-bold text-white">
                            <span className="text-xl font-tech text-main-red">0.5</span>{" "}
                            Github Profile
                        </h2>
                        <div className="w-full border-b-2 border-gray-50"></div>
                    </div>
                </motion.div>
                <div
                    className="w-full h-[80vh] md:h-[60vh] flex flex-col justify-center items-center gap-8 pb-20 overflow-hidden">
                    <div
                        className="rounded-xl p-2 md:p-14 gap-8 w-full md:w-[65%] h-full flex justify-center flex-col items-center backdrop-blur-2xl">
                        <motion.div
                            initial={{opacity: 0, x: -150}}
                            whileHover={{scale: 1.2}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 1, delay: 0.2}}
                            viewport={{once: true}}
                            className="w-[90%] md:w-[50%] min-h-[200px] md:min-h-[180px] p-4 relative shadow-sm rounded-xl bg-black/40 shadow-main-red"
                        >
                            <p className="absolute top-4 right-4 text-white text-[0.5rem] md:text-xs font-bold">
                                Total
                                contributions: {data.user.contributionsCollection.contributionCalendar.totalContributions}
                            </p>
                            <div className="grid grid-cols-3 gap-2 p-0 md:p-2 w-full h-full md:mt-0 mt-6">
                                <div className="col-span-1 rounded-full ">
                                    <img src={data.user.avatarUrl}
                                         className="rounded-full w-full h-auto ml-0 shadow-main-red shadow-lg"/>
                                </div>
                                <div className="col-span-2 gap-2 flex flex-col text-white font-bold ml-10">
                                    <p>{data.user.login}</p>
                                    <p className="text-xs md:text-sm">Repositories: {data.user.repositories.totalCount}</p>
                                    <p className="text-xs md:text-sm">{data.user.bio}</p>
                                    <div className="flex text-xs gap-4 absolute bottom-8">
                                        <p>Followers: {data.user.followers.totalCount}</p>
                                        <p>Following: {data.user.following.totalCount}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, x: 150}}
                            whileInView={{opacity: 1, x: 0}}
                            whileHover={{scale: 1.2}}
                            transition={{duration: 1, delay: 0.3}}
                            viewport={{once: true}}
                            className="bg-black/60 rounded-lg p-4 backdrop-blur-2xl shadow-sm shadow-main-red md:w-fit w-[90%]"
                        >
                            <h1 className="text-white font-semibold">Contributions</h1>
                            <div className="flex gap-1 w-full overflow-x-auto p-2">
                                {/* Visualizza tutte le settimane su schermi grandi, solo le ultime 4 su mobile */}
                                {weeks.slice(viewWidth < 700 ? -16 : -52).map((week, index) => (
                                    <div className="flex flex-col gap-1 items-center" key={index}>
                                        {week.contributionDays.map((day, i) => (
                                            <div
                                                key={i}
                                                title={`${day.date}: ${day.contributionCount} contributions`}
                                                className={`w-4 h-4 md:w-3 md:h-3 rounded ${
                                                    day.contributionCount > 0 ? "bg-green-500" : "bg-gray-200"
                                                }`}
                                            ></div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                    <div className="absolute bottom-0 flex justify-center items-center w-full">
                        <p className="text-center font-tech text-gray-400 hover:text-main-red text-sm pb-2">
                            Build by Gianmarco Guglielmino
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
