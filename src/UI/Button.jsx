import {motion} from "framer-motion";

export function Button({ label, onClick}) {
    return (
        <>
            <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                onClick={onClick}
                className="hover:bottom-2 bg-custom-green border-[2px] rounded-md border-main-red px-4 py-2 font-tech text-emerald-400"
            >
                {label}
            </motion.button>
        </>
    )
}