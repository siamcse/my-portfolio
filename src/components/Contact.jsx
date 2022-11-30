import React from 'react';

const Contact = () => {
    return (
        <div name='contact' className='bg-gradient-to-b from-black to-gray-800 md:h-screen text-white pt-20'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Submit the form below to contact with me</p>
                </div>
                <div>
                    <form action="https://getform.io/f/736399a9-962f-4b3b-864b-ceea1a9a0fa6" method='POST' className='flex flex-col w-full md:w-1/2 gap-4'>
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter your name'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your email'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />
                        <textarea
                            name='message'
                            rows="10"
                            placeholder='Your message'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        ></textarea>
                        <input type="submit" value="Let's Talk" className='bg-gradient-to-b from-cyan-500 to-blue-500 text-white px-6 py-3 my-8 mx-auto flex items-center justify-center rounded-md hover:scale-105 duration-300' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;