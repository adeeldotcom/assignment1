const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 border-t border-red-700/40 shadow-[0_0_20px_rgba(255,0,0,0.15)]">
      <div className="max-w-7xl mx-auto text-center px-4">
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
