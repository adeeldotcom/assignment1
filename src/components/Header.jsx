import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Header = () => {
    return (
        <header className="bg-gray-900 text-white shadow-md fixed left-0 w-full top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1
                    className="text-2xl font-bold cursor-pointer tracking-wide"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    Adeel Ahmad
                </h1>

                <ul className="hidden md:flex space-x-8 text-lg">
                    <li>
                        <a href="/" className="hover:text-blue-400 transition duration-200">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-blue-400 transition duration-200">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/projects" className="hover:text-blue-400 transition duration-200">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-blue-400 transition duration-200">
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="flex space-x-5 text-xl">
                    <a
                        href="https://github.com/adeeldotcom"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition duration-200"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/adeel-ahmed-488a72271"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition duration-200"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://x.com/adeelpositive_?s=21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition duration-200"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition duration-200"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
