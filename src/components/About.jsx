import me from '../assets/me.jpg';
const About = () => {
  return (
    <section className="bg-gray-800 text-white py-16 px-6">
      <div className="max-w-7xl mt-9 mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h1 className="text-6xl text-blue-400 font-semibold mb-6">
            MERN Stack Developer<span className="text-white">.</span>
          </h1>
          <p className="text-gray-300 leading-relaxed mb-6">
            I am a passionate MERN stack developer with a knack for crafting robust and scalable web applications.
            With 1 year of hands-on experience, I have honed my skills in front-end technologies like React and Next.js,
            as well as back-end technologies like Node.js, MySQL, Express.js, and MongoDB.
            My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver
            exceptional user experiences.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300">
            Read More
          </button>
        </div>

        <div className="flex-1 flex justify-center mt-9">
          <img
            src={me}
            alt="Adeel Ahmad"
            className="w-100 h-96 object-cover rounded-2xl shadow-lg border-2 border-gray-700 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
