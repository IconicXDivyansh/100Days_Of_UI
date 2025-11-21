import treeGrowth from "@/assets/tree-growth.png";
import { motion } from "motion/react";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0  },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 5,
            filter: "blur(7px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.5, ease: "easeIn" as const}
        }
    }

    const headingText = "100 Days of UI".split(" ").map((word,idx) => <motion.span variants={itemVariants} className="mr-1 md:mr-3" transition={{duration: 0.3}} key={idx}>{word}</motion.span>)
    return (
        <div className="relative">
                <img className="mask-b-from-80% mask-t-from-80% object-cover  " src={treeGrowth.src} alt="" />
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute top-15 left-2 mx-10 md:mx-2 md:left-5 md:top-50  inset-x-0  md:max-w-2xl "
                >
                    <div className="flex md:items-center ">
                        <motion.div className="font-main  w-30  md:w-full text-3xl md:text-8xl ">
                            {headingText}
                        </motion.div>
                    </div>
                     <div className="flex font-secondary md:items-center mt-1 items-end w-35 md:w-full md:px-2 md:gap-1">
                         <motion.p variants={itemVariants} className="text-xs md:text-lg">A journey to <em className="cursor-pointer">learn <span></span> </em> <span>&</span> <strong>get better</strong> at web animations</motion.p>
                         <motion.img initial={{opacity: 0, y: 5, x: -2, scale: 0.8}} animate={{opacity: 1, y: 0, x: 0, scale: 1.05}} transition={{duration: 0.3, delay:1.1, ease:"easeIn" }} className="relative -left-13  md:left-0  w-5 md:w-6 " src="/wand.svg" alt="wand" />
                     </div>
                </motion.div>
        </div>
    )
}


export default Hero;