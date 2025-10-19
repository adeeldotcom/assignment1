import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const ProjectCard = ({ title, description, imageUrl, liveUrl, githubUrl }) => {
  return (
    <div className="relative bg-gradient-to-br from-red-700/10 via-black/70 to-black/90 border border-red-600/20 rounded-2xl overflow-hidden shadow-lg 
      backdrop-blur-lg hover:shadow-red-600/40 hover:-translate-y-2 transition-all duration-500 group">
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-red-500 mb-2 group-hover:text-red-400 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-gray-300 mb-5 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600/80 hover:bg-red-700 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition duration-300"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-red-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default ProjectCard;
