import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFilePersonFill } from "react-icons/bs";

const SocialLinks = () => {
    const Links = [
        {
            id: 1,
            child: <>LinkedIn
                <FaLinkedin size={30} />
            </>,
            href: 'https://linkedin.com/in/abu-siam',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: <>Github
                <FaGithub size={30} />
            </>,
            href: 'https://github.com/siamcse'
        },
        {
            id: 3,
            child: <>Mail
                <HiOutlineMail size={30} />
            </>,
            href: 'mailto:siamcse01@gmail.com'
        },
        {
            id: 4,
            child: <>Resume
                <BsFilePersonFill size={30} />
            </>,
            href: '/Resume.pdf',
            download: true,
            style: 'rounded-br-md'
        },
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {
                    Links.map(({ id, child, href, download, style }) => <li key={id} className={'flex justify-center items-center w-40 h-14 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' + " " + style}>
                        <a
                            href={href}
                            className='flex justify-between items-center w-full text-white'
                            download={download}
                            target='_blank'
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                    )
                }

            </ul>
        </div>
    );
};

export default SocialLinks;