import React from 'react';
import heroImage from '../portfolio/HeroImage.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll';


const Home = () => {
    return (
        <div
            name="home"
            className='h-screen w-full bg-gradient-to-b from-black to-gray-800 overflow-hidden'
        >
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-2/4 md:h-full'>
                        <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
                        <p className='text-gray-500 py-4 max-w-md'>
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