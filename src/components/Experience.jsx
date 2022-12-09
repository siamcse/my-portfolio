import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';
import nextjs from '../assets/nextjs.png';
import graphql from '../assets/graphql.png';

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: "shadow-orange-400 bg-gray-600"
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: "shadow-blue-500 bg-gray-600"
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: "shadow-yellow-500 bg-gray-600"
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: "shadow-blue-600 bg-gray-600 bg-gray-600"
        },
        {
            id: 5,
            src: node,
            title: 'Node',
            style: "shadow-pink-400 bg-gray-600"
        },
        {
            id: 6,
            src: tailwind,
            title: 'Tailwind CSS',
            style: "shadow-sky-400 bg-gray-600"
        },
        {
            id: 7,
            src: nextjs,
            title: 'Next Js',
            style: "shadow-white bg-gray-600"
        },
        {
            id: 8,
            src: github,
            title: 'Github',
            style: "shadow-gray-400 bg-gray-600"
        },
        {
            id: 9,
            src: graphql,
            title: 'GraphQl',
            style: "shadow-pink-400 bg-gray-600"
        },
    ]
    return (
        <div data-aos="fade-left" name='experience' className='bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 md:h-screen pt-20'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                    <p className='py-6'>Some of experience</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 text-white'>
                    {
                        techs.map(({ id, src, title, style }) => <div
                            key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Experience;