const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h1 className="text-3xl font-bold mb-2 tracking-wide">Get in Touch</h1>
        <h2 className="text-xl text-blue-400 mb-4">Lahore, Punjab</h2>
        <h3 className="cursor-pointer hover:text-blue-400 mb-3 inline-block">adeelawan.dev@gmail.com</h3>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Adeel Ahmad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
