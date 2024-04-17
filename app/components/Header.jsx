

'use client';
import React, { useState, useEffect } from 'react';
import ADUABENZ from '@/public/assets/ADUABENZ 1 4.png';

export default function Header() {
    const [activeItem, setActiveItem] = useState(
        localStorage.getItem('activeItem') || 'HOME'
    );

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
        localStorage.setItem('activeItem', itemName);
    };

    useEffect(() => {
        const storedActiveItem = localStorage.getItem('activeItem');
        if (storedActiveItem) {
            setActiveItem(storedActiveItem);
        }
    }, []);

    return (
        <>
            <header>
                <nav className="bg-[#FAFAFA] border-gray-200 px-4 shadow-lg lg:px-8">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="/" className="flex items-center">
                            <img src='../assets/ADUABENZ 1 4.png' className="mr-3 w-52 h-16" alt="ADUABENZ Image" />
                        </a>
                        <div className="flex items-center lg:order-2">
                            <a href="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Get started</a>
                            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                </svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col justify-center items-center font-medium h-32 lg:flex-row lg:space-x-8 lg:mt-0">
                                <li className={`h-32 flex flex-col justify-center items-center ${activeItem === 'HOME' ? 'bg-black' : ''}`}>
                                    <a href="/" className={`block py-2  text-xl pr-4 pl-3 ${activeItem === 'HOME' ? 'text-white' : 'text-black'} rounded`} onClick={() => handleItemClick('HOME')}>HOME</a>
                                </li>
                                <li className={`h-32 flex flex-col justify-center items-center ${activeItem === 'ABOUT US' ? 'bg-black' : ''}`}>
                                    <a href="/about" className={`block py-2 text-xl  pr-4 pl-3 ${activeItem === 'ABOUT US' ? 'text-white' : 'text-black'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0`} onClick={() => handleItemClick('ABOUT US')}>ABOUT US</a>
                                </li>
                                <li className={`h-32 flex flex-col justify-center items-center ${activeItem === 'PRODUCTS' ? 'bg-black' : ''}`}>
                                    <a href="/product" className={`block py-2 text-xl  pr-4 pl-3 ${activeItem === 'PRODUCTS' ? 'text-white' : 'text-black'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0`} onClick={() => handleItemClick('PRODUCTS')}>PRODUCTS</a>
                                </li>
                                <li className={`h-32 flex flex-col justify-center items-center ${activeItem === 'DOWNLOAD' ? 'bg-black' : ''}`}>
                                    <a href="/download" className={`block py-2 text-xl  pr-4 pl-3 ${activeItem === 'DOWNLOAD' ? 'text-white' : 'text-black'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0`} onClick={() => handleItemClick('DOWNLOAD')}>DOWNLOAD</a>
                                </li>
                                <li className={`h-32 flex flex-col justify-center items-center ${activeItem === 'ENQUIRY' ? 'bg-black' : ''}`}>
                                    <a href="/enquiry" className={`block py-2 text-xl  pr-4 pl-3 ${activeItem === 'ENQUIRY' ? 'text-white' : 'text-black'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0`} onClick={() => handleItemClick('ENQUIRY')}>ENQUIRY</a>
                                </li>
                                <li className={`h-32 flex flex-col justify-center items-center ${activeItem === 'CONTACT US' ? 'bg-black' : ''}`}>
                                    <a href="/contact" className={`block py-2 text-xl  pr-4 pl-3 ${activeItem === 'CONTACT US' ? 'text-white' : 'text-black'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0`} onClick={() => handleItemClick('CONTACT US')}>CONTACT US</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
