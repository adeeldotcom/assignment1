import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[85%] 
    backdrop-blur-lg bg-gradient-to-r from-red-700/20 via-black/60 to-black/90 
    border border-red-600/20 shadow-lg rounded-3xl">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <h1
          className="text-2xl font-bold cursor-pointer tracking-wide text-white hover:text-red-500 transition duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Adeel Ahmad
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a
              href="/"
              className="text-gray-200 hover:text-red-500 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-gray-200 hover:text-red-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="text-gray-200 hover:text-red-500 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-gray-200 hover:text-red-500 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-5 text-xl">
          <a
            href="https://github.com/adeeldotcom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-red-500 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adeel-ahmed-488a72271"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-red-500 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/adeelpositive_?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-red-500 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-red-500 transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
