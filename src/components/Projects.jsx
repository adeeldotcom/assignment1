import ProjectCard from "./ProjectCard";
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
const Projects = () => {
  const projectData = [
    {
      title: "Do Task For Me",
      description:
        "A modern web application built using React and Tailwind CSS with dynamic components and responsive design.",
      imageUrl: p1,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Do Task For Me - Full Stack",
      description:
        "Full-stack MERN project featuring authentication, CRUD operations, and RESTful API integration.",
      imageUrl: p1,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Kallyas",
      description:
        "A sleek portfolio template optimized for performance and SEO with Next.js and Tailwind CSS.",
      imageUrl: p2,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];
  return (
    <section className="bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I’ve worked on — blending creativity,
          performance, and modern web development best practices.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
