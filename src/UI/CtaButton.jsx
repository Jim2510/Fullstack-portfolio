import {motion} from "framer-motion";

// eslint-disable-next-line react/prop-types
export function CtaButton({ label, onClick}) {
return (
    <>
        <motion.button onClick={onClick}
            initial={{
                y: -20,
                opacity: 0,
                backgroundImage: "linear-gradient(to bottom, #008170, #00FFD1)",
            }}
            whileInView={{
                y: 0,
                opacity: 1,
            }}
            whileHover={{
                backgroundImage: "linear-gradient(to bottom, #00FFD1, #008170)",
            }}
            viewport={{once: true}}
            className="text-black relative bottom-20 sm:bottom-40 px-7 py-2 sm:text-xl rounded-md"
        >
            {label}
        </motion.button>
    </>
)
}