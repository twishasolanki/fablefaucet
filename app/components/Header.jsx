

'use client';
import React, { useState, useEffect } from 'react';
import ADUABENZ from '@/public/assets/ADUABENZ 1 4.png';

export default function Header() {
    // const [activeItem, setActiveItem] = useState(
    //     localStorage.getItem('activeItem') || 'HOME'
    // );

    // const handleItemClick = (itemName) => {
    //     setActiveItem(itemName);
    //     localStorage.setItem('activeItem', itemName);
    // };

    // useEffect(() => {
    //     const storedActiveItem = localStorage.getItem('activeItem');
    //     if (storedActiveItem) {
    //         setActiveItem(storedActiveItem);
    //     }
    // }, []);

    const [activeItem, setActiveItem] = useState('HOME');

    useEffect(() => {
        const storedActiveItem = localStorage.getItem('activeItem');
        if (storedActiveItem) {
            setActiveItem(storedActiveItem);
        }
    }, []);

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
        localStorage.setItem('activeItem', itemName);
    };

    return (
        <>
            <header>
                <nav className="bg-[#FAFAFA] border-gray-200 px-4 shadow-lg lg:px-8">
                    <div className="flex flex-wrap md:justify-between md:items-center md:mx-auto md:max-w-screen-xl">
                        <a href="/" className="flex items-center">
                            <img src='../assets/logo-2-removebg-preview.png' className="mr-3 md:w-[300px] md:h-32 w-44  xs:w-36 " alt="ADUABENZ Image" />
                        </a>

                        <div className="flex items-center lg:order-2 md:hidden block">
                            <a href="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Get started</a>

                            <div className="drawer ">
                                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    <label htmlFor="my-drawer" className="btn btn-default drawer-button md:ms-0 xs:ms-[-3px] ms-64">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                        </svg>
                                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </label>
                                </div>
                                <div className="drawer-side">

                                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>


                                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                        <li> <img src='../assets/logo-2-removebg-preview.png' className="mr-3 md:w-[300px] md:h-32 w-44  xs:w-36 ms-16 " alt="ADUABENZ Image" /></li>
                                        <li className='mt-10'><a href='/'>HOME</a></li>

                                        <hr />
                                        <li><a href='/about'>ABOUT US</a></li>
                                        <hr />
                                        <li><a href='/product'>PRODUCTS</a></li>
                                        <hr />
                                        <li><a href='/download'>DOWNLOAD</a></li>
                                        <hr />
                                        <li><a href='/enquiry'>ENQUIRY</a></li>
                                        <hr />
                                        <li><a href='/contact'>CONTACT US</a></li>
                                        <hr />
                                    </ul>
                                </div>
                            </div>
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
