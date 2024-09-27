import logo from "../assets/node.png"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-5 my-5 w-full max-w-[110px]" src={logo} alt="logo"></img>
            </div>
            <div className="m-8 flex items-center justify-center gap-10 text-2xl">
                <a href="https://github.com/Devendran43?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/devendran-43-t" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                </a>
            </div>
        </div>
    )
}

export default Navbar