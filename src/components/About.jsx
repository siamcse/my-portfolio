import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 pt-20 snap-center'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>

                <p className='text-xl mt-20'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic consequatur quidem velit adipisci officia enim magnam assumenda, nemo architecto voluptas placeat eos. Quasi eligendi sit dolores consequatur maiores molestias alias quidem.
                </p>
                <br /><br />
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquid, dicta minima dolor odio sed pariatur mollitia ipsum obcaecati autem dolorem rem,
                </p>
            </div>

        </div>
    );
};

export default About;