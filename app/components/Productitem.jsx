
import Link from 'next/link';
import React from 'react';
import Layout from './Layout';

export default function Productitem() {
    const items = [
        {
            img: "./assets/WhatsApp Image 2024-04-17 at 6.34.51 PM.jpeg",
            label: "Black - Masofy",
            link: "/category/Black-Masofy",
        },
        {
            img: "./assets/WhatsApp Image 2024-04-17 at 6.34.54 PM.jpeg",
            label: "Hipo - Masofy",
            link: "/category/Hipo-Masofy",
        },
        {
            img: "./assets/WhatsApp Image 2024-04-17 at 6.35.01 PM (2).jpeg",
            label: "Ovel",
            link: "/category/Ovel",
        },
        {
            img: "./assets/WhatsApp Image 2024-04-17 at 6.35.04 PM (1).jpeg",
            label: "Rihno",
            link: "/category/Rihno",
        },
        {
            img: "./assets/WhatsApp Image 2024-04-17 at 6.35.08 PM (2).jpeg",
            label: "Rose Gold",
            link: "/category/RoseGold",
        },
        {
            img: "./assets/WhatsApp Image 2024-04-17 at 6.35.11 PM (1).jpeg",
            label: "Turtle",
            link: "/category/Turtle",
        }
    ];

    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    const chunkedItems = chunkArray(items, 3);

    return (
        <>
                <div className='md:p-32 p-12'>
                    {chunkedItems.map((row, rowIndex) => (
                        <div className={`flex ${rowIndex % 2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col-reverse'}`} key={rowIndex}>
                            {row.map((item, index) => (
                                <React.Fragment key={index}>
                                    {rowIndex % 2 === 0 ? (
                                        <>
                                            <div className="md:w-1/6 bg-white h-48">
                                                <img src={item.img} className='h-48 w-full' />
                                            </div>
                                            <div className="md:w-1/6 bg-black h-48">
                                                <Link href={item.link} className="h-full w-full flex flex-col justify-center items-center text-white text-center">
                                                    <p className='font-bold'>{item.label.toUpperCase()}</p>
                                                    <p className=''>..............</p>
                                                </Link>
                                            </div>

                                        </>
                                    ) : (
                                        <>

                                            <div className="md:w-1/6 bg-white h-48">
                                                <img src={item.img} className='h-48 w-full' />
                                            </div>

                                            <div className="md:w-1/6 bg-black h-48">
                                                <Link href={item.link} className="h-full w-full flex flex-col justify-center items-center text-white text-center">
                                                    <p className='font-bold'>{item.label.toUpperCase()}</p>
                                                    <p className=''>..............</p>
                                                </Link>
                                            </div>
                                        </>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </div> 
        </>
    )
}
