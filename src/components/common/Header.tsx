const navLinks = [{label: "Showcase", icon: '', href:"/showcase", index: 1 }, {label: "About", icon: '', href:"/about", index: 2}, {label: "Blog", icon: "", href: "/blog", index: 3}]
import { motion } from "motion/react";
import { useState } from "react";
const Header = () => {
    const [currentRouteIndex, setCurrentRouteIndex] = useState<number | null>(null);
    return (
    <motion.header initial={{ opacity: 0 , y: -20, filter: "blur(5px)"}} animate={{ opacity: 1 , y: 0, filter: "blur(0px)"}} transition={{ duration: 0.5 , delay: 0.2 }} className="border border-border bg-black/5 backdrop-blur-xs pb-1 px-1 rounded-b-xl">
        {/* <SplitText /> */}
            <nav className="flex border border-border bg-white rounded-b-[calc(var(--radius-xl)-3px)] justify-end">
                <motion.ul onMouseLeave={() => setCurrentRouteIndex(null)} className="flex gap-4 mx-1">
                    {navLinks.map((link)=> 
                    <a onMouseEnter={()=> setCurrentRouteIndex(link.index)} key={link.label} className="outline-neutral-500 font-main w-full relative p-2 z-20" href={link.href}>
                        {currentRouteIndex === link.index &&  <motion.div layoutId="hover" className="absolute -z-10 rounded-lg inset-0 w-full h-full   bg-border"></motion.div> }
                        <span className="relative">{link.label}</span>
                    </a>)}
                </motion.ul>
            </nav>
        </motion.header>
    )
        
}
export default Header;