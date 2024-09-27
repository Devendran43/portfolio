import { CONTACT } from "../constants";
import { motion } from "framer-motion";


const Contact = () => {
    return (
        <div className="border-b border-neutral-800 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-7xl">Stay in touch</motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4 font-light tracking-widest text-lg">{CONTACT.address}
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4 font-light tracking-widest text-2xl">{CONTACT.phoneNo}
                </motion.p>
                <a href="#" className="border-b font-light tracking-widest text-2xl">{CONTACT.email}</a>
            </div>
        </div>
    )
}

export default Contact