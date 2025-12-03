'use client'
import { useAnimate } from "motion/react";
import { useState } from "react";

// const randomNumberBetween = (min: number, max: number) => {
//     return Math.floor(Math.random() * (max - min + 1) + min); 
// }

// function StaggerTextEffect(){
//     const [scope, animate] = useAnimate();

//     const onButtonClick = () => {
//         const sparkles = Array.from({length: 20})
//         const sparklesAnimation: any = sparkles.map((_,idx) => [
//                 `.sparkle-${idx}`, 
//                 {
//                     x: randomNumberBetween(-70, 70),
//                     y: randomNumberBetween(-70, 70),
//                     scale: randomNumberBetween(1, 2.5),
//                     opacity: 1
//                 }, {
//                     duration: 0.4, at: "<"
//                 }
//         ]);

//         const sparkelsFadeOut : any = sparkles.map((_,idx) => [
//             `.sparkle-${idx}`,
//             {
//                 opacity: 0,
//                 scale: 0
//             }, {
//                 duration: 0.3, at: "<"
//             }
//         ]) 

//         const sparkelsReset = sparkles.map((_,idx) => [
//             `.sparkle-${idx}`,
//             {
//                 opacity: 0,
//                 scale: 0,
//                 x: 0,
//                 y: 0
//             }, {
//                 duration: 0.3, at: "<"
//             }
//         ])

//         animate([
//             ...sparkelsReset,
//         [".letter", {y: -32}, {duration: 0.2, delay: stagger(0.05)} ],
//         ["button", {scale: 0.8}, {duration: 0.1 , at: "<"}], // Run the current and previous animation sequence at the same time
//         ["button", {scale: 1}, {duration: 0.1}], // Run after the last animation sequence
//         ...sparklesAnimation,
//         [".letter", {y: 0}, {duration: 0.0000001, }],
//         ...sparkelsFadeOut,
//         ])
//     }
//     return (
//         <div ref={scope} className="p-10">
//             <button onClick={onButtonClick} className="relative border border-neutral-300 bg-neutral-200 px-4 py-1  rounded-full">
//                 <span className="sr-only">Motion</span>
//                 {/* parent container with overflow hidden and same height as that of text */}
//                 <span className="block h-8 overflow-hidden  justify-center items-center text-xl " aria-hidden>
//                     {"Motion".split("").map((char, idx) => (
//                         // Span by default is inline so y direction properties doesn't work on it
//                         <span data-content={char} className="letter inline-block relative h-8 outline-none after:h-8 after:absolute after:content-[attr(data-content)] after:left-0 after:top-full after:outline-1 after:outline-none" key={`${char}-${idx}`}>{char}</span>
//                     ))}
//                 </span>
//                 <span aria-hidden className=" absolute inset-0 block pointer-events-none -z-10">
//                     {
//                         Array.from({length: 20}).map((_,idx) =>
//                             <svg key={idx} className={`w-4 h-4 opacity-0 absolute left-1/2 top-1/2 sparkle-${idx}`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M239.18 97.26A16.38 16.38 0 0 0 224.92 86l-59-4.76-22.78-55.09a16.36 16.36 0 0 0-30.27 0L90.11 81.23 31.08 86a16.46 16.46 0 0 0-9.37 28.86l45 38.83L53 211.75a16.38 16.38 0 0 0 24.5 17.82l50.5-31.08 50.53 31.08A16.4 16.4 0 0 0 203 211.75l-13.76-58.07 45-38.83a16.43 16.43 0 0 0 4.94-17.59Zm-15.34 5.47-48.7 42a8 8 0 0 0-2.56 7.91l14.88 62.8a.37.37 0 0 1-.17.48c-.18.14-.23.11-.38 0l-54.72-33.65a8 8 0 0 0-8.38 0l-54.72 33.67c-.15.09-.19.12-.38 0a.37.37 0 0 1-.17-.48l14.88-62.8a8 8 0 0 0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16a8 8 0 0 0 6.72-4.94l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153 91.86a8 8 0 0 0 6.75 4.92l63.92 5.16c.15 0 .24 0 .33.29s0 .4-.16.5Z"/></svg>
//                         )
//                     }
//                 </span>
//             </button>
//         </div>
//     )
// }




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
        [".cart-icon",{rotate: [0, -30, 0, -30, 0, 0,-30,0 ]}, {duration: 0.6}],
        [".cart-icon", {left: "100%", top: "80%", zIndex: 1, opacity: [100, 0]}, {duration: 0.8}],
        [".button-text", {opacity: 1, y: [-20,0], filter: "blur(0px)", scale: 1}, {duration: 1, delay: 0.3}],
        [".success-icon", {display: "block", width: "auto"}, {at: "<"}],
        [".success-icon", {opacity: 1, scale: 1, y: [-20,0],filter: "blur(0px)"}, {duration: 1, }]
       ])
    }
    return(
        <div ref={scope} className="relative">
            <svg className="cart-icon absolute opacity-0 left-[40%] h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M188,184H91.17a16,16,0,0,1-15.74-13.14L48.73,24H24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="92" cy="204" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="188" cy="204" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
            <button onClick={onButtonClick} className="border border-neutral-300 bg-foreground px-4 py-1 flex items-center justify-between gap-4">
                <span className="button-text text-xl inline-block">{buttonText}</span>
                <svg className="success-icon h-6 w-6 opacity-0 hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
            </button>
        </div>
    )
}

export default Demo;
