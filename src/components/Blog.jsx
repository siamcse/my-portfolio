import React from 'react';

const Blog = () => {
    return (
        <div name='blog' className='bg-gradient-to-b from-gray-200 to-gray-100 text-gray-800 md:h-[400px] pt-20'>
            <div data-aos="fade-right" className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Blog</p>
                    <p className='py-6'>My blog are coming soon...</p>
                </div>
                <div >
                    <h1 className='text-3xl flex justify-center items-center'>Coming Soon</h1>
                </div>
            </div>
        </div>
    );
};

export default Blog;