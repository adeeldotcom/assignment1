import ProjectCard from "./ProjectCard";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";

const Projects = () => {
  const projectData = [
    {
      title: "Do Task For Me",
      description:
        "A modern web application built using React and Tailwind CSS with dynamic components and responsive design.",
      imageUrl: p1,
      liveUrl: "https://youtube.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Do Task For Me - Full Stack",
      description:
        "Full-stack MERN project featuring authentication, CRUD operations, and RESTful API integration.",
      imageUrl: p1,
      liveUrl: "https://youtube.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Kallyas",
      description:
        "A sleek portfolio template optimized for performance and SEO with Next.js and Tailwind CSS.",
      imageUrl: p2,
      liveUrl: "https://youtube.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 overflow-hidden">
      {/* Gradient + blur background same as About */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-700/30 via-black/60 to-black/90 backdrop-blur-lg"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">
          My Projects
        </h1>

        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I’ve worked on — blending creativity,
          performance, and modern web development best practices.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;