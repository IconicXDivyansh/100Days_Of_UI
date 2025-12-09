'use client';

import { motion } from "motion/react";
import { useState } from "react";

const testimonialData = [
    {
        content: {
            company: {
                label: "fujitsu",
                logoUrl: <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1108_265)">
                        <path d="M200 62.8V91.93C200 151.61 155.23 200 100 200C44.77 200 0 151.61 0 91.93V62.8L104.38 170.74L200 62.8Z" fill="url(#paint0_linear_1108_265)" />
                        <path d="M4.38 62.6699C3.12 62.6699 1.87 62.6699 0.63 62.7699C0.212689 66.4419 0.00235673 70.1344 0 73.8299C0 128.83 44.77 173.45 100 173.45C101.26 173.45 102.5 173.45 103.75 173.36C104.162 169.688 104.373 165.995 104.38 162.3C104.38 107.28 59.61 62.6699 4.38 62.6699Z" fill="url(#paint1_linear_1108_265)" />
                        <path d="M199.38 62.7999C146.47 65.3999 104.38 108.95 104.38 162.3C104.38 107.3 59.61 62.6699 4.38 62.6699C3.12 62.6699 1.87 62.6699 0.63 62.7699C0.212689 66.4419 0.00235673 70.1344 0 73.8299C0 128.83 44.77 173.45 100 173.45C101.26 173.45 102.5 173.45 103.75 173.36C104.17 173.36 104.59 173.36 105 173.36C157.91 170.76 200 127.21 200 73.8599C199.997 70.1647 199.79 66.4724 199.38 62.7999Z" fill="url(#paint2_linear_1108_265)" />
                        <path d="M100 72C119.882 72 136 55.8823 136 36C136 16.1177 119.882 0 100 0C80.1177 0 64 16.1177 64 36C64 55.8823 80.1177 72 100 72Z" fill="#6F4A9E" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_1108_265" x1="100" y1="209.42" x2="100" y2="143.67" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF8A11" />
                            <stop offset="1" stopColor="#E81894" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_1108_265" x1="114.71" y1="191.29" x2="32.85" y2="95.4199" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#B03B83" />
                            <stop offset="1" stopColor="#6F4A9E" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_1108_265" x1="100" y1="153.56" x2="100" y2="81.3499" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF8A11" />
                            <stop offset="1" stopColor="#E81894" />
                        </linearGradient>
                        <clipPath id="clip0_1108_265">
                            <rect width="200" height="200" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            },
            testimony: "With Cohere's latest highly secure enterprise LLMs, we aim to provide businesses with powerful and adaptable AI solutions that address specific needs and accelerate the adoption of generative AI globally.",
            name: "Vivek Mahajan",
            position: "CTO, Fujitsu"
        }
    },
    {
        content: {
            company: {
                label: "oracle",
                logoUrl: <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1113_5135)">
                        <path d="M3.35168e-06 8.37315e-07C-0.00685864 26.518 10.5231 51.9526 29.2735 70.7091C48.0239 89.4656 73.459 100.008 99.9838 100.016V8.37315e-07H3.35168e-06ZM99.9838 100.016H200V8.37315e-07C186.863 -0.00169886 173.854 2.58433 161.717 7.61033C149.581 12.6363 138.553 20.0038 129.265 29.2918C119.977 38.5799 112.61 49.6065 107.586 61.7416C102.562 73.8767 99.9787 86.8826 99.9838 100.016ZM99.9838 100.016V200H200C200.001 186.869 197.414 173.867 192.388 161.735C187.362 149.604 179.995 138.581 170.707 129.297C161.42 120.012 150.394 112.647 138.259 107.623C126.124 102.599 113.118 100.014 99.9838 100.016ZM99.9838 100.016H3.35168e-06V200C26.5203 199.995 51.9525 189.458 70.7027 170.708C89.453 151.958 99.9855 126.53 99.9838 100.016Z" fill="url(#paint0_linear_1113_5135)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_1113_5135" x1="-27" y1="185" x2="227" y2="15" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#DD37E0" />
                            <stop offset="1" stopColor="#0BA7FF" />
                        </linearGradient>
                        <clipPath id="clip0_1113_5135">
                            <rect width="200" height="200" fill="white" transform="translate(200) rotate(90)" />
                        </clipPath>
                    </defs>
                </svg>

            },
            testimony: "Integrating generative AI into our cloud infrastructure has revolutionized how we process data. The efficiency gains and accuracy improvements are truly game-changing for our enterprise clients.",
            name: "Edward Screven",
            position: "Chief Corporate Architect, Oracle"
        }
    },
    {
        content: {
            company: {
                label: "salesforce",
                logoUrl: <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64.6596 175.57V67.57L74.9396 55.57V171.35C81.1926 167.743 86.385 162.553 89.9944 156.302C93.6037 150.05 95.5025 142.959 95.4996 135.74V0L44.0996 60V176.9H54.3796C57.8487 176.893 61.303 176.446 64.6596 175.57Z" fill="#37A56E" />
                    <path d="M157.19 187.15V98.53L105.78 38.53V135.72C105.767 149.349 100.347 162.416 90.7113 172.054C81.0751 181.692 68.009 187.114 54.38 187.13H21V200H126.35V94.14L136.63 106.14V200H179V187.15H157.19Z" fill="#3B3D3C" />
                </svg>

            },
            testimony: "The ability to customize models for our specific CRM needs has allowed us to deliver smarter, more personalized customer experiences at a scale we never thought possible.",
            name: "Parker Harris",
            position: "Co-Founder, Salesforce"
        }
    },
    {
        content: {
            company: {
                label: "notion",
                logoUrl: <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1108_352)">
                        <path d="M65.3409 78.6901C62.4204 72.6221 61.1184 65.9022 61.5612 59.1826C62.004 52.4629 64.1765 45.9719 67.8679 40.3396C71.5593 34.7073 76.6442 30.1251 82.629 27.0377C88.6138 23.9503 95.2951 22.4626 102.024 22.7191C108.754 22.9756 115.302 24.9676 121.035 28.5016C126.767 32.0356 131.488 36.9916 134.74 42.8885C137.992 48.7855 139.665 55.423 139.595 62.1569C139.525 68.8907 137.715 75.4921 134.341 81.3201L102.821 136L112.271 152.37L148.551 89.5301C155.712 76.8108 157.566 61.7803 153.712 47.7018C149.858 33.6233 140.607 21.6332 127.966 14.3345C115.325 7.03585 100.316 5.01775 86.1963 8.71837C72.0767 12.419 59.9866 21.5396 52.5509 34.1001C48.6019 40.8482 46.1429 48.3634 45.3391 56.1406C44.5353 63.9178 45.4054 71.777 47.8909 79.1901C50.4186 78.8737 52.9634 78.7134 55.5109 78.7101L65.3409 78.6901Z" fill="url(#paint0_linear_1108_352)" />
                        <path d="M192.491 110.49C188.573 103.613 183.212 97.6655 176.777 93.058C170.341 88.4505 162.984 85.2921 155.211 83.8C154.224 86.1582 153.092 88.4526 151.821 90.67L146.881 99.22C153.623 99.6342 160.142 101.79 165.802 105.476C171.462 109.162 176.07 114.254 179.175 120.252C182.28 126.251 183.776 132.953 183.517 139.703C183.258 146.452 181.254 153.02 177.699 158.763C174.144 164.507 169.16 169.23 163.235 172.473C157.309 175.715 150.644 177.365 143.89 177.262C137.136 177.159 130.524 175.306 124.7 171.885C118.876 168.463 114.039 163.589 110.661 157.74L79.1908 103.24H60.3008L96.4808 165.92C97.7248 168.059 99.1043 170.117 100.611 172.08L100.911 172.47C106.064 179.103 112.673 184.461 120.229 188.13C127.784 191.8 136.082 193.681 144.481 193.63C154.21 193.629 163.767 191.067 172.192 186.202C180.617 181.337 187.614 174.34 192.478 165.915C197.343 157.489 199.904 147.932 199.904 138.203C199.905 128.474 197.344 118.916 192.481 110.49H192.491Z" fill="url(#paint1_linear_1108_352)" />
                        <path d="M88.1504 159.66C84.4914 165.231 79.4675 169.772 73.5571 172.852C67.6467 175.931 61.0463 177.447 54.3844 177.255C47.7225 177.062 41.2207 175.168 35.4979 171.752C29.7751 168.336 25.0218 163.513 21.6904 157.74C18.2632 151.802 16.459 145.067 16.4589 138.21C16.4589 131.354 18.263 124.619 21.6901 118.681C25.1173 112.742 30.0466 107.811 35.9832 104.381C41.9197 100.951 48.6543 99.1434 55.5104 99.1401H118.58L128 82.7801H55.5104C48.1693 82.6815 40.8817 84.0423 34.0707 86.7834C27.2598 89.5245 21.0613 93.5914 15.8351 98.7479C10.6089 103.904 6.45917 110.048 3.62681 116.821C0.794458 123.595 -0.664062 130.863 -0.664062 138.205C-0.664062 145.547 0.794458 152.816 3.62681 159.589C6.45917 166.363 10.6089 172.506 15.8351 177.662C21.0613 182.819 27.2598 186.886 34.0707 189.627C40.8817 192.368 48.1693 193.729 55.5104 193.63C63.4508 193.677 71.3064 191.996 78.5327 188.705C85.7591 185.414 92.1834 180.591 97.3604 174.57C95.7428 172.481 94.2662 170.286 92.9404 168L88.1504 159.66Z" fill="url(#paint2_linear_1108_352)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_1108_352" x1="64.6909" y1="15.0101" x2="145.621" y2="114.02" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#B03B83" />
                            <stop offset="0.56" stopColor="#E72E6C" />
                            <stop offset="1" stopColor="#FFC400" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_1108_352" x1="100.651" y1="90.6901" x2="187.901" y2="185.26" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#D83B83" />
                            <stop offset="1" stopColor="#6F4A9E" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_1108_352" x1="9.12043" y1="158.78" x2="125.76" y2="107.05" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#9C2383" />
                            <stop offset="1" stopColor="#E72E6C" />
                        </linearGradient>
                        <clipPath id="clip0_1108_352">
                            <rect width="200" height="200" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            },
            testimony: "AI-driven writing assistance is just the beginning. We are seeing a fundamental shift in how teams collaborate and organize knowledge, powered by these advanced language models.",
            name: "Ivan Zhao",
            position: "Co-founder, Notion"
        }
    },
    {
        content: {
            company: {
                label: "spotify",
                logoUrl: <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1108_213)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M185.01 152.663C194.797 136.865 200 118.629 200 100C200 73.4783 189.464 48.043 170.711 29.2893C151.957 10.5357 126.522 0 100 0C80.2219 0 60.8879 5.8649 44.443 16.853C27.9981 27.8412 15.1809 43.459 7.61209 61.7317C0.0433283 80.0043 -1.93701 100.111 1.92152 119.509C5.78004 138.907 15.3041 156.725 29.2894 170.711C43.2746 184.696 61.0929 194.22 80.491 198.079C99.8891 201.937 119.996 199.957 138.268 192.388C156.541 184.819 172.159 172.002 183.147 155.557C183.771 154.622 184.379 153.678 184.971 152.726L185 152.73C185.003 152.707 185.006 152.685 185.01 152.663ZM101.665 12.0157C88.8446 36.5404 79.7023 41.4265 72.9097 45.0001C66.8397 48.2301 62.8397 50.3601 56.8497 76.3201C51.4416 99.7552 36.1602 116.929 15.2424 123.667C17.7332 132.587 21.6298 141.106 26.8307 148.89C27.1222 149.326 27.4173 149.76 27.7161 150.19C34.6053 134.198 54.2918 120.176 83.24 111.27C100.73 105.88 100.1 97.0001 97 77.4301C95.76 69.5801 94.36 60.6701 95 51.5701C95.62 42.8301 99.7 33.5701 106.19 26.1801C110.378 21.4059 115.454 17.5185 121.244 14.6027C114.864 13.0156 108.298 12.1412 101.665 12.0157ZM50.9496 173.062C45.9352 169.696 41.2795 165.821 37.0571 161.5C38.4048 143.815 63.3682 129.937 86.78 122.73C114.97 114.06 111.74 93.5601 108.89 75.5601C107.69 67.9901 106.45 60.1601 107 52.4301C108.332 33.6201 126.393 23.6891 139.215 21.2205C142.543 22.8774 145.776 24.7496 148.89 26.8307C149.314 27.114 149.736 27.4008 150.154 27.6911C140.822 34.8518 127.266 50.1433 128 78.12C128.209 86.1941 130.796 93.8589 133.534 101.972L133.54 101.99L133.541 101.993C139.38 119.332 145.419 137.261 130.74 164.08C123.963 176.498 118.061 181.389 109.389 187.498C105.448 187.921 101.491 188.076 97.5471 187.966C107.136 179.143 118.334 166.219 117.12 154.81C116.65 150.46 114.36 144.5 105.41 140.52C96.4598 136.54 87.6798 136.41 79.2998 140.13C65.0908 146.45 55.6978 162.715 50.9496 173.062ZM140 77.84C139.318 52.1114 153.137 39.8993 159.863 35.4982C166.446 41.6084 172.061 48.6956 176.505 56.5147C167.724 61.3208 158 70.7443 158 85.9999C158 96.7899 162.45 106.33 166.8 115.54C171.278 125.146 175.542 134.296 175.55 145.124C171.85 151.319 167.382 157.068 162.225 162.225C154.096 170.354 144.496 176.771 133.995 181.169C136.418 178.021 138.815 174.344 141.26 169.88C158.413 138.563 150.959 116.277 144.969 98.367L144.91 98.19C142.36 90.64 140.16 84.12 140 77.84ZM183.043 129.119C181.155 122.796 178.462 116.998 175.917 111.519L175.82 111.31C171.8 102.71 168 94.5799 168 85.9999C168 74.8109 175.322 68.5959 180.948 65.4834C181.067 65.7628 181.185 66.043 181.301 66.3239C187.962 82.4038 189.705 100.098 186.309 117.168C185.499 121.24 184.406 125.232 183.043 129.119ZM61.3781 179.072C63.0001 179.864 64.6493 180.608 66.3239 181.301C71.1912 183.318 76.2065 184.883 81.3075 185.992C92.2937 177.372 105.991 163.364 105.21 156.08L105.209 156.074C105.129 155.34 104.918 153.415 100.56 151.48C94.7698 148.91 89.4198 148.78 84.1998 151.1C73.6855 155.763 65.6231 169.568 61.3781 179.072ZM12.8005 111.842C29.1805 106.149 40.7803 92.6015 45.1497 73.6501C51.9997 43.8801 57.9997 39.3501 67.2697 34.4401C72.3615 31.7499 78.4328 28.498 87.4881 12.907C68.7849 15.612 51.3233 24.2845 37.8039 37.8038C21.3064 54.3013 12.0265 76.6691 12 100C12 103.976 12.2694 107.932 12.8005 111.842Z" fill="url(#paint0_linear_1108_213)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_1108_213" x1="216.18" y1="158.09" x2="117.01" y2="5.34991" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#019C85" />
                            <stop offset="1" stopColor="#BEDC7C" />
                        </linearGradient>
                        <clipPath id="clip0_1108_213">
                            <rect width="200" height="200" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            },
            testimony: "Personalization is at the core of what we do. Leveraging state-of-the-art LLMs helps us understand user intent better and recommend the perfect audio content for every moment.",
            name: "Gustav Söderström",
            position: "Co-President, Spotify"
        }
    }
]

const col1Variants = {
    "initial": {
        width: "80%",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    },
    "animate": {
        width: "55%",
        clipPath: "polygon(0 0, 82% 0, 98% 100%, 0 100%)",
        transition: {
            duration: 0.7,
            ease: "easeInOut"
        }
    }
} as const;

const col2Variants = {
    "initial" : {
        width: "19%",
        clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" 
    },
    "animate": {
        width: "55%",
        clipPath: "polygon(100% 0, 2% 0, 18% 100%, 100% 100%)",
        transition: {
            duration: 0.7,
            ease: "easeInOut"
        }
    }
} as const;

const contentVariants = {
    "initial": {
        opacity: 0,
        y: 20
    },
    "animate": {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
            staggerChildren: 0.1
        }
    }
} as const;

export default function TestimonialCardCohere(){
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const testimony = testimonialData[currentCardIndex];
    console.log("Component re-rendered")
    return (
        <div className="relative w-full">
            <div className="text-xl flex justify-end md:pr-10  gap-4 *:cursor-pointer">
                <button className="disabled:text-gray-300 disabled:cursor-not-allowed" disabled={currentCardIndex === 0} onClick={() => setCurrentCardIndex(prev => Math.max(0, prev - 1))}>&larr;</button>
                <button className="disabled:text-gray-300 disabled:cursor-not-allowed" disabled={currentCardIndex === testimonialData.length - 1} onClick={() => setCurrentCardIndex(prev => Math.min(testimonialData.length - 1, prev + 1))}>&rarr;</button>
            </div>
            {/* Wrapper Container which prevents overflow  */}
            <div className="flex flex-col gap-20 w-full p-10 bg-gray-100">
                {/* { */}
                    {/* // testimonialData.map((testimony, idx) => ( */}
                      {/* <React.Fragment key={idx}> */}
                        <motion.div 
                          key={currentCardIndex}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: true, amount: 0.5 }}
                          className="relative h-[500px] w-full max-w-6xl mx-auto group overflow-hidden bg-transparent"
                        >
                            {/* Left Side  */}
                            
                            {/* Outer Container responsible for width transition*/}
                            <motion.div variants={col1Variants} className="absolute overflow-hidden left-0 z-10 h-full ">
                            
                            {/* TWIN 1: THE BORDER (Dark Background) */}
                            <motion.div 
                                className="absolute inset-0 bg-neutral-900 rounded-xl"
                                variants={{
                                    initial: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
                                    animate: { clipPath: "polygon(0 0, 82% 0, 98% 100%, 0 100%)", transition: { duration: 0.7, ease: "easeInOut" } }
                                }}
                            >
                            </motion.div>

                            {/* TWIN 2: THE CONTENT (White Background + Inset) */}
                            {/* inset-[1px] creates the 1px border effect */}
                            <div className="absolute inset-[2px] bg-white rounded-[10px] overflow-hidden">
                                     <motion.div 
                                        className="absolute inset-0 flex flex-col p-12 justify-center"
                                        variants={{
                                            initial: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
                                            animate: { clipPath: "polygon(0 0, 82% 0, 98% 100%, 0 100%)", transition: { duration: 0.7, ease: "easeInOut" } }
                                        }}
                                     >
                                    {/* Max-width on Inner Content to prevent jaggering experience */}
                                    <motion.div variants={contentVariants} className="max-w-[430px] font-secondary">
                                        <motion.div className="scale-20 mb-6 h-20 w-2">{testimony.content.company.logoUrl}</motion.div>
                                        <motion.div className="text-xl mb-5">"{testimony.content.testimony}"</motion.div>
                                        <motion.p className="mb-13  text-md">-- {testimony.content.name}, {testimony.content.position}</motion.p>
                                        <motion.a className="text-gray-700" href="#">Read More &rarr;</motion.a>
                                    </motion.div>
                                </motion.div>
                            </div>
                            </motion.div>

                            {/* Right Side  */}
                            
                                {/* Outer container responsible for width transition 20% -> 55% */}
                            <motion.div variants={col2Variants} className="absolute right-0 h-full z-20 w-[19%] ">
                                
                                {/* TWIN 1: THE BORDER (Dark Background) */}
                                {/* Note the Point Order: TR -> TL -> BL -> BR to prevent twisting */}
                                <motion.div 
                                    className="absolute inset-0 bg-neutral-900 rounded-xl"
                                    variants={{
                                         initial: { clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" },
                                         animate: { clipPath: "polygon(100% 0, 2% 0, 18% 100%, 100% 100%)", transition: { duration: 0.7, ease: "easeInOut" } }
                                    }}
                                >
                                </motion.div>

                                {/* TWIN 2: THE IMAGE (Inset-[1px]) */}
                                <div className="absolute inset-[2px] bg-zinc-200 rounded-[10px] overflow-hidden">
                                    <motion.div
                                        className="absolute inset-0"
                                         variants={{
                                            initial: { clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" },
                                            animate: { clipPath: "polygon(100% 0, 2% 0, 18% 100%, 100% 100%)", transition: { duration: 0.7, ease: "easeInOut" } }
                                        }}
                                    >
                                        <img 
                                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                                            alt="Team collaboration" 
                                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                      {/* </React.Fragment> */}
                    {/* )) */}
                {/* } */}

            </div>
        </div>
    )
}

export function CardsDraft1(){
    return (
        <div className="h-56 w-full flex group overflow-hidden relative">
  
            {/* Left Content Container */}
            <div className="w-[80%] bg-gray-800 text-white p-10 
                            group-hover:w-[50%] 
                            [clip-path:polygon(82%_0,0_0,0_100%,98%_100%)] 
                            transition-all duration-700 ease-in-out">
                <h2 className="text-2xl font-bold">Content Side</h2>
                <p>Hover over the container to see me shrink! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, excepturi.</p>
            </div>

            {/* Right Image Container */}
            <div className="w-[20%] bg-blue-600 
                            group-hover:w-[50%] 
                            [clip-path:polygon(100%_0,2%_0,18%_100%,100%_100%)] 
                            transition-all duration-700 ease-in-out">
                {/* Image would go here */}
                <div className="w-full h-full flex items-center justify-center text-white font-bold">
                Image Side
                </div>
            </div>

        </div>
    )
}

export  function CardsDraft2(){
 return (
    <div className="h-[500px] w-full relative group overflow-hidden bg-neutral-900">
        {/* LEFT CONTAINER (Content) */}
        {/* Anchored Left. Shrinks from 80% -> 55% */}
        <div className="absolute left-0 h-full z-10
                        w-[80%] group-hover:w-[55%] 
                        [clip-path:polygon(82%_0,0_0,0_100%,98%_100%)] 
                        transition-all duration-700 ease-in-out
                        bg-neutral-800 text-white p-12 flex flex-col justify-center">
            
            {/* Inner Content Wrapper - Prevents text reflow/squish */}
            <div className="w-full max-w-[600px]">
            <h2 className="text-4xl font-bold mb-6">McKinsey & Company</h2>
            <p className="text-xl leading-relaxed opacity-90">
                “McKinsey believes that we should bring the best out there for our clients. 
                Cohere was a natural choice.”
            </p>
            </div>
        </div>

        {/* RIGHT CONTAINER (Image) */}
        {/* Anchored Right. Grows from 25% -> 55% */}
        <div className="absolute right-0 h-full z-20
                        w-[25%] group-hover:w-[55%] 
                        [clip-path:polygon(100%_0,2%_0,18%_100%,100%_100%)] 
                        transition-all duration-700 ease-in-out
                        bg-blue-600">
            
            {/* Image with object-cover to handle the resizing gracefully */}
            <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
            />
        </div>
    </div>
 )

}

export function CardsDraft3(){
    return (
        <div className="h-[500px] w-full relative group overflow-hidden bg-neutral-900">

            {/* LEFT WRAPPER (Content) */}
            <div className="absolute left-0 h-full z-10
                            /* Width Animation: 80% -> 55% */
                            w-[80%] group-hover:w-[55%]
                            
                            /* Shape Animation: Rect -> Razor */
                            /* Order: TL -> TR -> BR -> BL */
                            [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] 
                            group-hover:[clip-path:polygon(0_0,82%_0,98%_100%,0_100%)]
                            /* The Engine */
                            transition-all duration-700 ease-in-out
                            
                            bg-neutral-800 text-white p-12 flex flex-col justify-center">
                
                {/* Inner Text - Fixed width to prevent squishing */ }
                <div className="max-w-[500px]">
                <h2 className="text-4xl font-bold mb-6">McKinsey & Company</h2>
                <p className="text-xl leading-relaxed opacity-90">
                    “McKinsey believes that we should bring the best out there for our clients. 
                    Cohere was a natural choice.”
                </p>
                </div>
            </div>

            {/* RIGHT WRAPPER (Image) */}
            <div className="absolute right-0 h-full z-20
                            /* Width Animation: 25% -> 55% */
                            w-[25%] group-hover:w-[55%]
                            
                            /* Shape Animation: Rect -> Razor */
                            /* Order: TR -> TL -> BL -> BR */
                            [clip-path:polygon(100%_0,0_0,0_100%,100%_100%)] 
                            group-hover:[clip-path:polygon(100%_0,2%_0,18%_100%,100%_100%)]
                            
                            /* The Engine */
                            transition-all duration-700 ease-in-out
                            
                            bg-blue-600">
                
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                />
            </div>

        </div>
    )
}



export function TestimonialCard(){
    return (
    <div className="w-full flex justify-center p-10 bg-gray-100">
      
      {/* MAIN CONTAINER 
        - Relative: Acts as the anchor for children.
        - Group: Triggers the hover state for all children.
        - h-[500px]: Fixed height for the card.
      */}
      <div className="h-100 w-full max-w-6xl relative group overflow-hidden bg-transparent">

        {/* =========================================================
            LEFT SIDE (Content)
            - Slides width from 80% -> 55%
            - Anchored to Left
        ========================================================= */}
        <div className="absolute left-0 h-full z-10
                        w-[80%] group-hover:w-[55%] 
                        transition-all duration-700 ease-in-out">
          
          {/* TWIN 1: THE BORDER (Dark Background) */}
          <div className="absolute inset-0 bg-neutral-900 
                          [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] 
                          group-hover:[clip-path:polygon(0_0,82%_0,98%_100%,0_100%)]
                          transition-all duration-700 ease-in-out">
          </div>

          {/* TWIN 2: THE CONTENT (White Background + Inset) */}
          {/* inset-[1px] creates the 1px border effect */}
          <div className="absolute inset-[1px] bg-white 
                          [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] 
                          group-hover:[clip-path:polygon(0_0,82%_0,98%_100%,0_100%)]
                          transition-all duration-700 ease-in-out
                          flex flex-col justify-center p-12">
            
            {/* Inner text wrapper with fixed width to prevent squishing */}
            <div className="max-w-[500px]">
              <div className="mb-8">
                {/* Placeholder Logo */}
                <h3 className="text-2xl font-serif font-bold text-neutral-900">McKinsey & Company</h3>
              </div>
              
              <h2 className="text-3xl font-medium leading-tight text-neutral-900 mb-6">
                “McKinsey believes that we should bring the best out there for our clients. 
                Cohere was a natural choice.”
              </h2>
              
              <p className="text-lg text-neutral-600">
                — Ben Ellencwieg, Senior Partner
              </p>

              <div className="mt-8 text-orange-600 font-semibold flex items-center gap-2 cursor-pointer hover:gap-4 transition-all">
                Read more <span>→</span>
              </div>
            </div>
          </div>
        </div>


        {/* =========================================================
            RIGHT SIDE (Image)
            - Slides width from 25% -> 55%
            - Anchored to Right
        ========================================================= */}
        <div className="absolute right-0 h-full z-20
                        w-[25%] group-hover:w-[55%] 
                        transition-all duration-700 ease-in-out">   
          
          {/* TWIN 1: THE BORDER (Dark Background) */}
          {/* Note the Point Order: TR -> TL -> BL -> BR to prevent twisting */}
          <div className="absolute inset-0 bg-neutral-900 
                          [clip-path:polygon(100%_0,0_0,0_100%,100%_100%)] 
                          group-hover:[clip-path:polygon(100%_0,2%_0,18%_100%,100%_100%)]
                          transition-all duration-700 ease-in-out">
          </div>

          {/* TWIN 2: THE IMAGE (Inset-[1px]) */}
          <div className="absolute inset-[1px] bg-blue-600 overflow-hidden
                          [clip-path:polygon(100%_0,0_0,0_100%,100%_100%)] 
                          group-hover:[clip-path:polygon(100%_0,2%_0,18%_100%,100%_100%)]
                          transition-all duration-700 ease-in-out">
            
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Team collaboration" 
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

