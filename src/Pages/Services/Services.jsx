import React from 'react'
import services from './ServiceObj'
import PageHeader from '../../components/Header/PageHeader';
import { FaCheck } from "react-icons/fa";
import Accordion from './Accordion';

const Services = () => {
    return (
        <>
        <PageHeader/>
        <div className="container mx-auto px-3 pt-25 lg:px-14">
            {/* Services */}
            <div className="services">
                <h2 data-aos="fade-up" data-aos-delay="300" className="text-center text-4xl sm:text-5xl text-violet-950 dark:text-violet-50 font-bold">
                    Services
                </h2>
                <div className="grid sm:grid-cols-2 gap-5 items-stretch place-items-center mt-12">
                    {services.map((service, index) => {
                        return (
                            <div key={index} data-aos="zoom-in" data-aos-delay="600" className="text-center group p-4 bg-violet-50 dark:bg-neutral-900 shadow-xl rounded hover:bg-violet-200 dark:hover:bg-neutral-900 dark:border-b-10 dark:hover:border-b-violet-400 dark:border-b-neutral-900 dark:inset-shadow-sm dark:hover:inset-shadow-violet-400">
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
            </div>

            {/* Prices */}

            <div className="prices mt-14">
                <h2 data-aos="fade-up" data-aos-delay="300" className="text-center text-4xl sm:text-5xl text-violet-950 dark:text-violet-50 font-bold">
                    Prices
                </h2>
                <div className="grid sm:grid-cols-3 gap-3 items-stretch my-16 dark:text-violet-200">
                    {/* 1 */}
                    <div data-aos="fade-right" data-aos-delay="500" className='text-center px-5 py-8 bg-violet-200 shadow-xl dark:bg-neutral-900 rounded-md sm:scale-90'>
                        <h3 className='text-xl text-violet-500 dark:text-violet-400 font-bold mb-4'>BASIC</h3>
                        <h4 className='text-neutral-900 dark:text-violet-50 font-bold text-sm'>Perfect for new businesses</h4>
                        <p className='text-violet-950 dark:text-violet-50 font-bold text-5xl my-5 flex items-start justify-center'><span className='text-2xl '>$</span>10</p>

                        <ul className='text-center'>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-500 dark:text-violet-400 font-bold' />1 Responsive Page</li>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-500 dark:text-violet-400 font-bold' />upto 5 Sections</li>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-500 dark:text-violet-400 font-bold' />Contact Form</li>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-500 dark:text-violet-400 font-bold' />Dilivered in 3 Business Days</li>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-500 dark:text-violet-400 font-bold' />Clean & Commented Code</li>
                        </ul>
                    </div>

                    {/* 2 */}
                    <div data-aos="fade-up" data-aos-delay="750" className='text-center px-5 py-8 bg-violet-950 dark:bg-neutral-900 rounded-md sm:scale-105'>
                        <h3 className='text-xl text-violet-300 dark:text-violet-400 font-bold mb-4'>STANDARD</h3>
                        <h4 className='text-violet-50 font-bold text-sm'>Designed for medium businesses</h4>
                        <p className='text-violet-50 font-bold text-5xl my-5 flex items-start justify-center'><span className='text-2xl '>$</span>50</p>

                        <ul className='text-center text-violet-200'>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-200 dark:text-violet-500 font-bold' />5 Responsive Page</li>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-200 dark:text-violet-500 font-bold' />+3 Section For Page</li>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-200 dark:text-violet-500 font-bold' />Contact Form</li>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-200 dark:text-violet-500 font-bold' />Animations</li>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-200 dark:text-violet-500 font-bold' />Database Integration</li>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-200 dark:text-violet-500 font-bold' />Dilivered in 7 Business Days</li>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-200 dark:text-violet-500 font-bold' />Clean & Commented Code</li>
                        </ul>
                    </div>

                    {/* 3 */}
                    <div data-aos="fade-left" data-aos-delay="1000" className='text-center px-5 py-8 bg-violet-200 shadow-xl dark:bg-neutral-900 rounded-md sm:scale-90'>
                        <h3 className='text-xl text-violet-500 dark:text-violet-400 font-bold mb-4'>PREMIUM</h3>
                        <h4 className='text-neutral-900 dark:text-violet-50 font-bold text-sm'>Great for large websites</h4>
                        <p className='text-violet-950 dark:text-violet-50 font-bold text-5xl my-5 flex items-start justify-center'><span className='text-2xl '>$</span>150</p>

                        <ul className='text-center'>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-500 dark:text-violet-400 font-bold' />+10 Responsive Page</li>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-500 dark:text-violet-400 font-bold' />+3 Section For Page</li>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-500 dark:text-violet-400 font-bold' />Contact Form</li>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-500 dark:text-violet-400 font-bold' />Animations</li>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-500 dark:text-violet-400 font-bold' />Database Integration</li>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-500 dark:text-violet-400 font-bold' />Dilivered in 15 Business Days</li>
                            <li className='flex gap-x-3 items-center justify-center mb-2'><FaCheck className='text-violet-500 dark:text-violet-400 font-bold' />Clean & Commented Code</li>
                        </ul>
                    </div>


                </div>
            </div>

            <div className="FAQs mb-8">
                <h2 data-aos="fade-up" data-aos-delay="300" className="text-center text-4xl sm:text-5xl text-violet-950 dark:text-violet-50 font-bold">
                    Frequent Questions
                </h2>
                {/* Accordion */}

                <Accordion />
            </div>

        </div>
        </>
    )
}

export default Services
