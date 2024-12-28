'use client'
import React from 'react';

export default function Contact() {
    const copyToClipboard = () => {
        const email = 'donaldliu1313@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            alert('Email address copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    };

    return (
        <>
            <div className="absolute flex top-1/2 left-[5%] -translate-x-1/2 -translate-y-1/2 h-82 bg-textcolour rounded opacity-15 hover:opacity-100 px-2">
                <div className="">
                    <div className='my-10 opacity-75 hover:opacity-100'>
                        <a href="https://github.com/donaldliu1" target="_blank">
                            <img src="github.svg" alt="GitHub" className="w-14 h-14" />
                        </a>
                    </div>
                    <div className='my-10 opacity-75 hover:opacity-100'>
                        <a href="https://www.linkedin.com/in/donald-liu-2187b1153/" target="_blank">
                            <img src="linkedin.png" alt="Linkedin" className="w-14 h-14" />
                        </a>
                    </div>
                    <div className='my-10 opacity-75 hover:opacity-100'>
                        <button onClick={copyToClipboard}>
                            <img src="gmail.webp" alt="Gmail" className="w-14 h-14" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
