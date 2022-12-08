import React from 'react';
import heroImage from '../portfolio/HeroImage.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';


const Home = () => {
    return (
        <div
            name="home"
            className='h-screen w-full bg-gradient-to-b from-gray-200 to-gray-100 overflow-hidden'
        >
            <div className='max-w-screen-lg mx-auto grid md:grid-cols-2  items-center justify-center h-full px-4'>
                <div className='flex flex-col justify-center h-2/4 lg:h-full'>
                    <h2 className='text-4xl sm:text-5xl font-bold text-gray-800 w-full'>

                        <Typewriter
                            options={{
                                strings: ['Hi,', 'I\'m Abu Siam', 'I\'m a Full Stack Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <p className='text-gray-600 py-4 max-w-md'>
                        I love to work on web application using React, Tailwind, Bootstrap, Node JS, Express JS and MongoDB
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='md:w-3/4 mx-auto'>
                    <img src={heroImage} alt="Abu Siam" className=' rounded-2xl mx-auto md:ml-6' />
                </div>
            </div>
        </div>
    );
};

export default Home;