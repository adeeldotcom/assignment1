const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-10 overflow-hidden">
      {/* Background gradient and blur (same as About section) */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-700/30 via-black/60 to-black/90 backdrop-blur-lg"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center px-4">
        <h1 className="text-3xl font-bold mb-2 tracking-wide bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">
          Get in Touch
        </h1>

        <h2 className="text-xl text-red-400 mb-4">Lahore, Punjab</h2>

        <h3 className="cursor-pointer hover:text-red-400 mb-3 inline-block transition-colors duration-300">
          adeelawan.dev@gmail.com
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          &copy; {new Date().getFullYear()} Adeel Ahmad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;