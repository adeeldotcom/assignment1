import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const ProjectCard = ({ title, description, imageUrl, liveUrl, githubUrl }) => {
    return (
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-600/30 transition-all duration-300">
            <div className="overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="p-5">
                <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
                <p className="text-gray-400 mb-5 leading-relaxed">{description}</p>
                <div className="flex items-center justify-between">
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300"
                    >
                        <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition duration-300"
                    >
                        <FaGithub /> GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
