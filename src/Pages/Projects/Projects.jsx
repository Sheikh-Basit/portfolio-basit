import React, { useState } from "react";
import PageHeader from "../../components/Header/PageHeader";

// Import Project Array
import projects from './ProjectArray'

// Import Project Detail Modal
import ProjectDetailModal from "./ProjectDetailModal";

const Projects = () => {
  const [SelectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <PageHeader />
      <div className="container mx-auto px-3 pt-25 lg:px-14 overflow-hidden">
        <div className="projects">
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center text-4xl sm:text-5xl text-violet-950 dark:text-violet-50 font-bold"
          >
            Projects
          </h2>

          {/* Projects */}

          <div className="grid sm:grid-cols-2 gap-5 items-stretch place-items-center my-8 ">
            {projects.map((project, index) => {
              return (
                
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className="relative text-center group rounded-xl shadow-md overflow-hidden"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Image */}
                    <img
                      src={project.img}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                    {/* Overlay + Content */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto overflow-hidden cursor-pointer">
                      {/* Overlay */}
                      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>

                      {/* Project Detail */}
                      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <h3 className="text-2xl lg:text-3xl text-violet-500 dark:text-violet-400 font-bold mb-5 transition duration-700 -translate-y-28 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                          {project.title}
                        </h3>
                        <p className="text-violet-50 mb-6 leading-8 transition duration-700 translate-y-28 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                          {project.projectType}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-center gap-x-2">
                          <a
                            href={project.demo}
                            className="bg-violet-500 font-bold border-2 border-violet-500 text-violet-50 rounded px-3 py-1 transition delay-75 duration-700 -translate-x-28 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>Demo</span>
                          </a>
                          <a
                            href={project.repo}
                            className="border-2 border-violet-50 px-3 py-1 rounded text-violet-50 font-bold hover:bg-violet-50 hover:text-violet-500 transition-all delay-75 duration-700 translate-x-28 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Repository
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
              );
            })}
          </div>
            {/* Modal */}
            {SelectedProject !== null && (
              <ProjectDetailModal title={SelectedProject.title} desc={SelectedProject.desc} img={SelectedProject.img} link={SelectedProject.demo} repo={SelectedProject.repo} technology={SelectedProject.techImages} onClose={() => { setSelectedProject(null) }} />
            )}
        </div>
      </div>
    </>
  );
};

export default Projects;

