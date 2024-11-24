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
            <div className="w-full h-screen md:h-[60vh] flex flex-col justify-center items-center gap-8 pb-20 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, x: -150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="w-[90%] md:w-[40%] min-h-[200px] md:min-h-[150px] p-4 bg-custom-green/40 backdrop-blur-2xl relative"
                >
                    <p className="absolute top-4 right-4 text-white text-[0.5rem] md:text-xs font-bold">
                        Total contributions: {data.user.contributionsCollection.contributionCalendar.totalContributions}
                    </p>
                    <div className="grid grid-cols-3 gap-2 p-0 md:p-2 w-full h-full">
                        <div className="col-span-1 rounded-full">
                        <img src={data.user.avatarUrl} className="rounded-full w-[6.5rem] h-[6.5rem] ml-0 md:ml-10" />
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
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="bg-custom-green/40 rounded-lg p-4 backdrop-blur-2xl shadow-2xl md:w-fit w-[90%]"
                >
                    <h1 className="text-white font-semibold">Contributions</h1>
                    <div className="flex gap-1 w-full overflow-x-auto p-2">
                        {/* Visualizza tutte le settimane su schermi grandi, solo le ultime 4 su mobile */}
                        {weeks.slice(viewWidth < 700 ? -16 : -52).map((week, index) => (
                            <div className="flex flex-col gap-1 items-center" key={index}>
                                {week.contributionDays.map((day, i) => (
                                    <div
                                        key={i}
                                        title={`${day.date}: ${day.contributionCount} contributions md:ml-0 ml-4`}
                                        className={`w-4 h-4 md:w-3 md:h-3 rounded ${
                                            day.contributionCount > 0 ? "bg-green-500" : "bg-gray-200"
                                        }`}
                                    ></div>
                                ))}
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div className="absolute bottom-0 flex justify-center items-center">
                    <p className="text-center font-tech text-gray-400 hover:text-main-red text-sm pb-2">
                        Build by Gianmarco Guglielmino
                    </p>
                </div>
            </div>
        </>
    );
}
