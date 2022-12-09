import React from 'react';

const About = () => {
    return (
        <div data-aos="fade-left" name='about' className='w-full h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 pt-20 snap-center'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>

                <p className='text-xl mt-20'>
                    I am Abu Siam. I live in Jamalpur, Bangladesh. I am a student of BSc in Computer Science and Engineering at Faridpur Engineering College. 
                </p>
                <br /><br />
                <p className='text-xl'>
                    I am an enthusiastic web developer, quick learner, and coder. Love to design and code. I am seeking opportunities to learn further more by joining an organization. I am highly skilled in Web development technologies like HTML, CSS, and Javascript, specially MERN stack (react js, node js, express js, and MongoDB). I have done several projects utilizing these Besides also have knowledge of C++, java programming, Server deployment, version control (GitHub), and Deploy.
                </p>
            </div>

        </div>
    );
};

export default About;