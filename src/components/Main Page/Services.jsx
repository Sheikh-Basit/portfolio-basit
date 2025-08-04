import React from "react";
import { FaLaptopCode } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

const Services = () => {
    const services = [
        {
            icon: FaLaptopCode,
            title: "Web Development",
            desc: "Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website.",
        },
        {
            icon: FaChartLine,
            title: "Digital Marketing",
            desc: "Prepare a strategy and objectives for the promotion of the brand provided by the client, using the internet or other platforms to promote products and services of the brand in question.",
        },
        {
            icon: FaScrewdriverWrench,
            title: "Web Maintenance",
            desc: "Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, add new functions, etc.",
        },
        {
            icon: FaTachometerAlt,
            title: "Website Optimization",
            desc: "Complete optimization of your web page, improving loading speed, using optimized images, a good URL, to give a better experience to users who visit the website",
        },
    ];
    return (
        <section id="services">
            <div className="container mx-auto px-3 pt-14 lg:px-14">
                <h2 className="text-center text-4xl sm:text-5xl text-neutral-900 dark:text-white font-bold">
                    Services
                </h2>
                <div className="grid sm:grid-cols-2 gap-5 items-stretch place-items-center mt-12">
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="text-center group p-4 bg-white dark:bg-neutral-900 shadow-xl rounded hover:bg-neutral-700 dark:hover:bg-neutral-900 dark:border-b-10 dark:hover:border-b-cyan-400 dark:border-b-neutral-900 dark:inset-shadow-sm dark:hover:inset-shadow-cyan-400">
                                <service.icon className="inline-block text-neutral-900 dark:text-gray-400 text-5xl mb-5 group-hover:text-cyan-400" />
                                <h3 className="text-xl text-gray-400 group-hover:text-white dark:text-white font-bold mb-5">
                                    {service.title}
                                </h3>
                                <p className="text-black group-hover:text-gray-400 dark:text-gray-400 mb-6 leading-8">
                                    {service.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center flex justify-center items-center mt-5">
                    <a href='#' className="rounded border-2 border-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:text-neutral-900 text-white flex items-center justify-center px-1 sm:px-3 py-2 w-40 h-full">Read More <FaCircleArrowRight className='text-xl ms-2 sm:ms-5' /></a>
                </div>

            </div>
        </section>
    );
};

export default Services;
