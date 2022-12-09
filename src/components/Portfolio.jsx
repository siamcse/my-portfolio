import React from 'react';
import kitchenfood from '../assets/portfolio/kitchenfood.png';
import geniusCar from '../assets/portfolio/geniusCar.png';
import codingera from '../assets/portfolio/codingera.png';
import mobilemart from '../assets/portfolio/mobilemart.png';
import doctorsportal from '../assets/portfolio/doctorsportal.png';
import bestfive from '../assets/portfolio/bestfive.png';

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            name:"Kitchen Food",
            src: kitchenfood,
            demo: "https://kitchen-food-a4a06.web.app/",
            code: "https://github.com/siamcse/kitchen-food-client"
        },
        {
            id: 2,
            name:"Mobile Mart",
            src: mobilemart,
            demo: "https://mobile-mart-914e8.web.app",
            code: "https://github.com/siamcse/mobile-mart-client"
        },
        {
            id: 3,
            name:"Coding Era",
            src: codingera,
            demo: "https://coding-era-67c70.web.app",
            code: "https://github.com/siamcse/coding-era-client"
        },
        
        {
            id: 4,
            name:"Doctors Portal",
            src: doctorsportal,
            demo: "doctors-portal-4fb7c.web.app/",
            code: "https://github.com/siamcse/doctors-portal-client"
        },
        {
            id: 5,
            name:"Genius Car",
            src: geniusCar,
            demo: "genius-car-a1175.web.app/",
            code: "https://github.com/siamcse/genius-car-client"
        },
        {
            id: 6,
            name:"Choose Best Five",
            src: bestfive,
            demo: "choose-five-player.netlify.app/",
            code: "https://github.com/siamcse/best-five"
        },
    ]
    return (
        <div
            data-aos="fade-right"
            name='portfolio'
            className='bg-gradient-to-b from-gray-200 to-gray-100 w-full text-gray-800 md:h-screen pt-20'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my workout here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:px-12 px-0'>
                    {
                        portfolios.map(({ id,name, src,demo,code }) => <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md h-48 w-full duration-200 hover:scale-105' />
                            <h3 className='text-2xl font-semibold mt-2 text-center'>{name}</h3>
                            <div className='flex justify-center items-center'>
                                <a href={demo} target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                                <a href={code} target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Portfolio;