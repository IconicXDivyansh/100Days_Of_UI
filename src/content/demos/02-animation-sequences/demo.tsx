'use client'
import { useAnimate } from "motion/react";
import { useState } from "react";

function Demo(){
    const [scope, animate] = useAnimate();
    const [buttonText, setButtonText] = useState("Add to Cart");

    const onButtonClick = async () => {
       await animate([
        [".success-icon", {opacity: 0, scale: 0, width: 0,filter: "blur(5px)",  display: "none"}],
        ["button", {scale: 0.7}, {duration: 0.2}],
        [".button-text", {opacity: 0, filter: "blur(5px)",scale: 0.8}, {duration: 0.5, at: "<"}],
       ])

       setButtonText("Order Placed");

       animate([
        [".cart-icon", {opacity: 1, y: [0, -18], rotate: [0, -30, 0, -30, 0, 0,-30,0 ]}, {duration: 0.8, delay: 0.3}],
        ["button", {scale: 1}, {duration: 0.1}],
        [".cart-icon", {left: 0, top: "80%", zIndex: 1}, {duration: 1}],
        [".cart-icon",{rotate: [0, -10, -50, 0, -30, 0, 0,-30,0 ]}, {duration: 0.6}],
        [".cart-icon", {left: "100%", top: "80%", zIndex: 1, opacity: [100, 0]}, {duration: 0.8}],
        [".button-text", {opacity: 1, x: [-20,0], filter: "blur(0px)", scale: 1}, {duration: 1, delay: 0.3}],
        [".success-icon", {display: "block", width: "auto"}, {at: "<"}],
        [".success-icon", {opacity: 1, scale: 1, x: [30,0],filter: "blur(0px)"}, {duration: 1, }]
       ])
    }
    return(
        <div ref={scope} className="relative">
            <svg className="cart-icon absolute opacity-0 left-[40%] h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M188,184H91.17a16,16,0,0,1-15.74-13.14L48.73,24H24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="92" cy="204" r="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="188" cy="204" r="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
            <button onClick={onButtonClick} className="border border-neutral-300 bg-foreground px-4 py-1 flex items-center justify-between gap-4">
                <span className="button-text text-xl inline-block">{buttonText}</span>
                <svg className="success-icon h-6 w-6 text-green-500 opacity-0 hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="16"/></svg>
            </button>
        </div>
    )
}

export default Demo;
