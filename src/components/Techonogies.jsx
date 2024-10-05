import { RiReactjsLine } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { motion } from "framer-motion";
import { SiMysql } from "react-icons/si";
import { FcAcceptDatabase } from "react-icons/fc";
// import { oracle } from '../assets/projects/oracle.svg'



const iconVariants = (duration) => ({
    initial: { y: 10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
});

const Techonogies = () => {
    return (
        <div className="border-b border-neutral-800 pb-14">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-7xl">Technologies
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandJavascript className="text-7xl text-yellow-400" />
                    <p className="text-center mt-2 content-evenly">Javascript</p>
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNodejsLine className="text-7xl text-green-600" />
                    <p className="text-center mt-2 content-evenly">Node.JS</p>
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className="text-7xl text-neutral-100" />
                    <p className="text-center mt-2 content-evenly">Express.JS</p>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-[#00758F]" />
                    <p className="text-center mt-2 content-evenly">Mysql</p>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FcAcceptDatabase className="text-7xl" />
                    <p className="text-center mt-2 content-evenly">Oracle</p>
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                    <p className="text-center mt-2 content-evenly">Mongodb</p>
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                    <p className="text-center mt-2 content-evenly">React</p>
                </motion.div>
            </motion.div>
        </div >
    )
}

export default Techonogies