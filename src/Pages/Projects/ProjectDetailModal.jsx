import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5"; // close icon

const ProjectDetailModal = ({ title, desc, img, link, repo, technology, onClose }) => {
    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center">
            {/* Background Overlay */}
            <div
                className="absolute inset-0 bg-black opacity-70 transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-xl max-w-2xl w-full mx-4 p-3 sm:p-6 z-10 grid grid-col-1 sm:grid-cols-3 gap-5 text-center sm:text-left">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-1 right-1 font-bold text-gray-600 dark:text-gray-300 hover:text-violet-500 transition"
                >
                    <IoCloseCircleOutline className="text-2xl " />
                </button>

                {/* Project Image */}
                <img
                    src={img}
                    alt={title}
                    className="w-full rounded-lg object-cover sm:col-span-3"
                />

                {/* Content */}
                <div className="sm:col-span-2">
                    <h4 className="text-xl font-bold text-violet-500 mb-2">{title}</h4>
                    <p className="text-neutral-900 dark:text-violet-50">{desc}</p>
                </div>

                {/* Technology + Action Button */}
                <div className="Project-Detail">
                    {/* Technologies */}
                    <h4 className="text-xl font-bold text-violet-600 dark:text-violet-400 mb-4">
                        Technologies Used
                    </h4>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-5">
                        {technology.map((tech, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <img
                                    src={tech.img}
                                    alt={tech.name}
                                    className="w-12 h-12 object-contain"
                                />
                                <span className="text-sm mt-2 text-gray-700 dark:text-gray-300">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* Action Buttons */}
                    <div className="flex items-center justify-center gap-x-2">
                        <a
                            href={link}
                            className="bg-violet-500 font-bold border-2 border-violet-500 text-violet-50 rounded px-3 py-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>Demo</span>
                        </a>
                        <a
                            href={repo}
                            target="_blank"
                            className="border-2 border-black dark:border-violet-50 px-3 py-1 rounded text-black dark:text-violet-50 font-bold hover:bg-black dark:hover:bg-violet-50 hover:text-violet-50 hover:dark:text-violet-500 transition-all"
                            
                            rel="noopener noreferrer"
                        >
                            Repository
                        </a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ProjectDetailModal;
