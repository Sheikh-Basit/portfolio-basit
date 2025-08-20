import React from 'react'
import PageHeader from '../components/Header/PageHeader';

const AboutMePage = () => {
  return (
    <>
        <PageHeader/>
        <div className="container mx-auto px-3 pt-25 lg:px-14">
            {/* Services */}
            <div className="services">
                <h2 data-aos="fade-up" data-aos-delay="300" className="text-center text-4xl sm:text-5xl text-violet-950 dark:text-violet-50 font-bold">
                    About Me
                </h2>
                
            </div>

            

        </div>
        </>
  )
}

export default AboutMePage
