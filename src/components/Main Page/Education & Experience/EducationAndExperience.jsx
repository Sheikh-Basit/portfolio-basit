import React from "react";
import { education, experience } from "./EduExp";

const formatDate = (dateStr) => {
    if (dateStr.toLowerCase() === "present") return new Date(); // treat "Present" as current date
    return new Date(Date.parse(dateStr)); // convert "May, 2018" → Date object
};

const EducationAndExperince = () => {

    // Sort latest first
    const sortedEducation = [...education].sort(
        (a, b) => formatDate(b.endDate) - formatDate(a.endDate)
    );

    const sortedExperience = [...experience].sort(
        (a, b) => formatDate(b.endDate) - formatDate(a.endDate)
    );


    return (

        <section className="container mx-auto px-3 pt-14 lg:px-14 ">
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-center text-4xl sm:text-5xl text-violet-950 dark:text-violet-50 font-bold"
            >
                Education & Experience
            </h2>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 mt-8">
                {/* Education */}
                <div className="education">
                    {/* Heading */}
                    <div className="flex items-center justify-center">
                        <h3 data-aos="fade-right" data-aos-delay="300" className="relative text-xl text-violet-500 tracking-wider dark:text-violet-400 font-bold mb-5 border-b-2 border-violet-500 w-fit px-2 before:absolute before:left-0 before:bottom-0 before:w-0.5 before:h-2 before:bg-violet-500 after:absolute after:right-0 after:bottom-0 after:w-0.5 after:h-2 after:bg-violet-500">
                            Education
                        </h3>
                    </div>
                    {/* Eduction List */}
                    <div className="flex flex-col gap-12 pt-8">
                        {sortedEducation.map((edu, index) => (
                            <div key={index} className="flex relative">
                                {/* Year + Line */}
                                <div data-aos="zoom-in" data-aos-delay="500" className="flex relative pl-20">
                                    {/* Starting Year */}
                                    <span className="absolute -bottom-4 right-0 mr-3 text-sm text-neutral-900 dark:text-violet-50">{edu.startDate}</span>
                                    {/* Ending Year */}
                                    <span className="absolute -top-4 right-0 mr-3 text-sm text-neutral-900 dark:text-violet-50">{edu.endDate}</span>
                                    {/* Line */}
                                    <span className="line relative h-full w-0.5 bg-violet-500 before:absolute before:-top-3 before:-left-1.5 before:w-3 before:h-3 before:rounded-full before:bg-violet-500 before:ml-[1px] after:absolute after:-bottom-3 after:-left-1.5 after:w-3 after:h-3 after:rounded-full after:bg-violet-500 after:ml-[1px]"></span>
                                </div>
                                {/* Content */}
                                <div className="content px-5 py-1">
                                    {/* Degree */}
                                    <h5 data-aos="fade-right" data-aos-delay="500" className="degree text-violet-950 dark:text-violet-50 font-bold">{edu.title}</h5>
                                    {/* Institute */}
                                    <h6 data-aos="fade-right" data-aos-delay="700" className="institute text-sm text-violet-500 dark:text-violet-400 font-bold">{edu.institute}</h6>
                                    {/* Description */}
                                    <p data-aos="fade-right" data-aos-delay="900" className="text-sm leading-5 mt-3 text-neutral-900 dark:text-neutral-400">{edu.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience */}
                <div className="experience">
                    <div className="flex items-center justify-center">
                        <h3 data-aos="fade-left" data-aos-delay="300" className="relative text-xl text-violet-500 tracking-wider dark:text-violet-400 font-bold mb-5 border-b-2 border-violet-500 w-fit px-2 before:[content:''] before:absolute before:left-0 before:bottom-0 before:w-0.5 before:h-2 before:bg-violet-500 after:[content:''] after:absolute after:right-0 after:bottom-0 after:w-0.5 after:h-2 after:bg-violet-500">
                            Experience
                        </h3>
                    </div>
                    {/* Eduction List */}
                    <div className="flex flex-col gap-12 pt-8">
                        {sortedExperience.map((exp, index) => (
                            <div key={index} className="flex relative">
                                {/* Year + Line */}
                                <div data-aos="zoom-in" data-aos-delay="500" className="flex relative pl-20">
                                    {/* Starting Date */}
                                    <span className="absolute -bottom-4 right-0 mr-3 text-sm text-neutral-900 dark:text-violet-50">{exp.startDate}</span>
                                    {/* Ending Date */}
                                    <span className="absolute -top-4 right-0 mr-3 text-sm text-neutral-900 dark:text-violet-50">{exp.endDate}</span>
                                    {/* Line */}
                                    <span className="line relative h-full w-0.5 bg-violet-500 before:absolute before:-top-3 before:-left-1.5 before:w-3 before:h-3 before:rounded-full before:bg-violet-500 before:ml-[1px] after:absolute after:-bottom-3 after:-left-1.5 after:w-3 after:h-3 after:rounded-full after:bg-violet-500 after:ml-[1px]"></span>
                                </div>
                                {/* Content */}
                                <div className="content px-5 py-1">
                                    {/* Role */}
                                    <h5 data-aos="fade-left" data-aos-delay="500" className="role text-violet-950 dark:text-violet-50 font-bold">{exp.title}</h5>
                                    {/* Company */}
                                    <h6 data-aos="fade-left" data-aos-delay="700" className="company text-sm text-violet-500 dark:text-violet-400 font-bold">{exp.institute}</h6>
                                    {/* Description */}
                                    <p data-aos="fade-left" data-aos-delay="900" className="text-sm leading-5 mt-3 text-neutral-900 dark:text-neutral-400">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationAndExperince;
