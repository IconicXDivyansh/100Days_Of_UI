import { AnimatePresence, motion, type Variants } from "motion/react";
import { useState } from "react";
const Demo = () => {
  return (
    <div className="max-w-3xl rounded-lg mx-auto border-8 shadow-sm shadow-border border-double   border-border p-4 grid place-content-center">
      <ProfileCard />
    </div>
  )
};

export default Demo;


const ProfileCard = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false); 
  const childVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95,  
      transformOrigin: "bottom"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: 100,
      scale: 0.5,
      transformOrigin: "bottom"
    }
  } 
  return (
  
    <div className="border border-border rounded-xl overflow-hidden bg-white/5">
        <div onMouseEnter={()=> setShowDetails(true)} onMouseLeave={()=> setShowDetails(false)} className="relative border-border rounded-xl p-2 shadow-inner  shadow-white  ">
          <AnimatePresence>

         {
           showDetails && 
           <motion.div  variants={childVariants} initial="hidden" animate="visible" exit="exit" className="absolute  inset-x-0   bg-white/50 backdrop-blur-sm w-[94.8%]  h-[40%] bottom-2 mx-auto  rounded-b-[6px] font-secondary p-4">
            <div>
            <motion.h3 variants={childVariants} className="font-main text-3xl">Sophia Taylor</motion.h3>
            <motion.p variants={childVariants} className="text-xs md:text-sm px-1 tracking-tighter pt-2 text-neutral-800 max-w-[80%]">A <span>UI</span> Designer who focuses on simplicity & usability.</motion.p>
            </div>
            <motion.div variants={childVariants} className="mt-6 ">
              <button className="">
                <span className="-outline-offset-4 outline-4 outline-border/50 hover:outline-border/90  transition duration-100  bg-white  py-3 px-4 rounded-full tracking-tight">View Profile</span>
                </button>
            </motion.div>
           </motion.div>  
           
          }
          </AnimatePresence>
          <img className="w-full max-w-72 rounded-[6.5px] "  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ea100163-8fcf-49de-b23f-3731edc6ee85_3840w.jpg" alt="" />
        </div>
    </div>
  )
}
