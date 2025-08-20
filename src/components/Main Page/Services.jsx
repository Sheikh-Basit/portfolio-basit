import React from "react";
import {Link} from 'react-router-dom'
import { FaCircleArrowRight } from "react-icons/fa6";

// import the services object
import services from '../../Pages/Services/ServiceObj'

const Services = () => {
    return (
        <section id="services">
            <div className="container mx-auto px-3 pt-14 lg:px-14">
                <h2 data-aos="fade-up" data-aos-delay="300" className="text-center text-4xl sm:text-5xl text-violet-950 dark:text-violet-50 font-bold">
                    Services
                </h2>
                <div className="grid sm:grid-cols-2 gap-5 items-stretch place-items-center mt-12">
                    {services.map((service, index) => {
                        return (
                            <div key={index} data-aos="zoom-in" data-aos-delay="600" className="text-center group p-4 bg-white dark:bg-neutral-900 shadow-xl rounded hover:bg-violet-200 dark:hover:bg-neutral-900 dark:border-b-10 dark:hover:border-b-violet-400 dark:border-b-neutral-900 dark:inset-shadow-sm dark:hover:inset-shadow-violet-400">
                                <service.icon className="inline-block text-violet-950 dark:text-violet-50 text-5xl mb-5 group-hover:text-violet-500" />
                                <h3 className="text-xl text-violet-500 dark:text-violet-400 group-hover:text-violet-950 dark:group-hover:text-violet-50 font-bold mb-5">
                                    {service.title}
                                </h3>
                                <p className="text-neutral-900 dark:text-neutral-400 group-hover:text-violet-500 dark:group-hover:text-violet-200 mb-6 leading-8">
                                    {service.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center flex justify-center items-center mt-10">
                    <Link to="/services" data-aos="fade-up" data-aos-delay="300" href='#' className="Read-more">Read More<FaCircleArrowRight className='text-xl ms-5' /></Link>
                </div>

            </div>
        </section>
    );
};

export default Services;
