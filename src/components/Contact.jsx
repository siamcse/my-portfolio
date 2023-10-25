import React from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const handleContact = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        console.log(name, email, message);

        emailjs.send("service_4pvevag", "template_jgw469f", {
            from_name: name,
            email_id: email,
            message: message,
        }, "6cL8h9k-HO2fH4oPF",)
            .then((result) => {
                toast.success("Your message sent successfully");
                event.target.reset();
            }, (error) => {
                console.log(error.text);
            });

    }
    return (
        <div  name='contact' className='bg-gradient-to-b from-gray-100 to-gray-200 md:h-screen text-gray-800 py-20'>
            <div data-aos="fade-left" className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Submit the form below to contact with me</p>
                </div>
                <div>
                    <form onSubmit={handleContact} className='flex flex-col w-full md:w-1/2 gap-4'>
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter your name'
                            className='p-2 bg-gray-200 border-2 border-black rounded-md text-gray-800 focus:outline-none'
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your email'
                            className='p-2 bg-gray-200 border-2 border-black  rounded-md text-gray-800 focus:outline-none'
                        />
                        <textarea
                            name='message'
                            rows="10"
                            placeholder='Your message'
                            className='p-2 bg-gray-200 border-2 border-black rounded-md text-gray-800 focus:outline-none'
                        ></textarea>
                        <input type="submit" value="Let's Talk" className='bg-gradient-to-b from-cyan-500 to-blue-500 text-gray-100 px-6 py-3 my-8 mx-auto flex items-center justify-center rounded-md hover:scale-105 duration-300' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;