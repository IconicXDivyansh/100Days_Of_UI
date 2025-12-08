'use client';
import { motion, useInView } from "motion/react";
import { useRef } from "react";
// Strategy to animate footer on reveal, Problem -> Since, footer is visible all the time, (Z-index) !!
// we can't use WhileInView or intersectionObserver etc.
// Solution: In the main content place an element at the very bottom, as this element enters the viewport, we know that footer will be visually revealed
// Then, we can animate the footer using the motion library

export default function Demo(){
    const triggerRef = useRef(null);
    const isFooterVisible = useInView(triggerRef, {amount : 0.5})
    return(
    <div className="relative  h-100  w-full overflow-auto">
        <div className="h-screen md:h-[120vh] bg-white">
            {/* Content Goes here  */}
            <div className="text-center  space-y-10 p-5 md:p-20 font-main">
                <h1 className="text-2xl md:text-7xl">Content goes here ...</h1>
                <h2 className="text-xl md:text-6xl">Content goes here...</h2>
                <h3 className="text-lg md:text-5xl">Content goes here...</h3>
                <h4 className="text-md md:text-4xl">Content goes here...</h4>
                <h5 className="text-sm md:text-3xl">Content goes here...</h5>
                <h6 className="text-xs md:text-2xl">Content goes here...</h6>
            </div>
            <div ref={triggerRef} className="absolute bottom-0 w-full pointer-events-none"></div>
        </div>
        <footer className="sticky bottom-0 w-full -z-10">
            <motion.div animate={isFooterVisible ? {y : -20, opacity: 0 , filter: "blur(5px)", } : {y : 0, opacity: 1, filter: "blur(0px)", }} transition={{duration : 0.5}}  className="bg-zinc-200 font-main  text-2xl p-10 md:p-30">
                Sticky Footer <span className="md:mx-10 mx-3 md:text-5xl text-zinc-400">;)</span>
            </motion.div>
        </footer>
    </div>
    )
}

