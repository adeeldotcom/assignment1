import me from "../assets/me.jpg";

const About = () => {
  return (
    <section className="relative bg-black text-white py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-700/30 via-black/60 to-black/90 backdrop-blur-lg"></div>
      <div className="relative max-w-7xl mt-25 mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 bg-white/5 p-8 rounded-2xl border border-red-500/20 shadow-lg backdrop-blur-md">
          <h1 className="text-6xl font-semibold mb-6">
            <span className="text-red-500">MERN Stack</span> Developer
            <span className="text-white">.</span>
          </h1>
          <p className="text-gray-300 leading-relaxed mb-6">
            I am a passionate MERN stack developer with a knack for crafting robust and scalable web applications.
            With 1 year of hands-on experience, I have honed my skills in front-end technologies like React and Next.js,
            as well as back-end technologies like Node.js, MySQL, Express.js, and MongoDB.
            My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver
            exceptional user experiences.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow-md transition duration-300">
            Read More
          </button>
        </div>
        <div className="flex-1 flex justify-center mt-9">
          <img
            src={me}
            alt="Adeel Ahmad"
            className="w-100 h-96 object-cover rounded-2xl shadow-2xl border-2 border-red-600/40 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;