// import Link from 'next/link';
// import React from 'react'

// export default function Productitem() {
//     const items = [
//         {
//             img:"./assets/aug-0110-removebg-preview.png",
//             label:"REVIVE",
//             link:"/category/revive",
//         },
//         {
//             img:"./assets/aug-0110-removebg-preview.png",
//             label:"scorpius",
//             link:"/category/scorpius",
//         },
//         {
//             img:"./assets/aug-0110-removebg-preview.png",
//             label:"flt",
//             link:"/category/flt",
//         },
//         {
//             img:"./assets/aug-0110-removebg-preview.png",
//             label:"canis",
//             link:"/category/canis",
//         },
//         {
//             img:"./assets/aug-0110-removebg-preview.png",
//             label:"auriga",
//             link:"/category/auriga",
//         },
      
//     ];

//     return (
//         <>
//         <div className='p-32'>     
//             <div className="flex md:flex-row flex-col">
//                 {/* <div className="md:w-1/6 bg-white h-48">
//                     <img src='./assets/aug-0110-removebg-preview.png' className='h-48 w-full' />
//                 </div>
//                 <div className="md:w-1/6 bg-black h-48 text-white text-center flex flex-col justify-center items-center ">
//                     <p className='font-bold'>REVIVE</p>
//                     <p className=''>..............</p>
//                 </div> */}
//                 {items.map((item, index) => (
//                     <>
                 
//                     <div className="md:w-1/6 bg-white h-48">
//                     <img src={item.img} className='h-48 w-full' />
//                 </div>
//                 <Link href={item.link} className="md:w-1/6 bg-black h-48 text-white text-center flex flex-col justify-center items-center ">
//                     <p className='font-bold'>{item.label.toUpperCase()}</p>
//                     <p className=''>..............</p>
//                 </Link>
              
//                     </>
//                 ))}
//                 {/* <div className="md:w-1/6 bg-white h-48">
//                     <img src='./assets/aug-0110-removebg-preview.png' className='h-48 w-full' />
//                 </div>
//                 <div className="md:w-1/6 bg-black h-48 text-white text-center flex flex-col justify-center items-center ">
//                     <p className='font-bold'>REVIVE</p>
//                     <p className=''>..............</p>
//                 </div>
//                 <div className="md:w-1/6 bg-white h-48">
//                     <img src='./assets/aug-0110-removebg-preview.png' className='h-48 w-full' />
//                 </div>
//                 <div className="md:w-1/6 bg-black h-48 text-white text-center flex flex-col justify-center items-center ">
//                     <p className='font-bold'>REVIVE</p>
//                     <p className=''>..............</p>
//                 </div>
//             </div>
//             <div className="flex md:flex-row flex-col">
//             <div className="md:w-1/6 bg-black h-48 text-white text-center flex flex-col justify-center items-center ">
//                     <p className='font-bold'>REVIVE</p>
//                     <p className=''>..............</p>
//                 </div>
//                 <div className="md:w-1/6 bg-white h-48">
//                     <img src='./assets/aug-0110-removebg-preview.png' className='h-48 w-full' />
//                 </div>
//                 <div className="md:w-1/6 bg-black h-48 text-white text-center flex flex-col justify-center items-center ">
//                     <p className='font-bold'>REVIVE</p>
//                     <p className=''>..............</p>
//                 </div>
//                 <div className="md:w-1/6 bg-white h-48">
//                     <img src='./assets/aug-0110-removebg-preview.png' className='h-48 w-full' />
//                 </div>
//                 <div className="md:w-1/6 bg-black h-48 text-white text-center flex flex-col justify-center items-center ">
//                     <p className='font-bold'>REVIVE</p>
//                     <p className=''>..............</p>
//                 </div>
//                 <div className="md:w-1/6 bg-white h-48">
//                     <img src='./assets/aug-0110-removebg-preview.png' className='h-48 w-full' />
//                 </div> */}
//             </div>
//             </div>
//         </>
//     )
// }



import Link from 'next/link';
import React from 'react';

export default function Productitem() {
    const items = [
        {
            img: "./assets/revive.png",
            label: "REVIVE",
            link: "/category/revive",
        },
        {
            img: "./assets/scr-1102.png",
            label: "scorpius",
            link: "/category/scorpius",
        },
        {
            img: "./assets/flt-1111ex.png",
            label: "flt",
            link: "/category/flt",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "canis",
            link: "/category/canis",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "auriga",
            link: "/category/auriga",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "canis",
            link: "/category/canis",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "auriga",
            link: "/category/auriga",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "canis",
            link: "/category/canis",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "auriga",
            link: "/category/auriga",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "canis",
            link: "/category/canis",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "auriga",
            link: "/category/auriga",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "canis",
            link: "/category/canis",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "auriga",
            link: "/category/auriga",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "canis",
            link: "/category/canis",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "auriga",
            link: "/category/auriga",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "canis",
            link: "/category/canis",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "auriga",
            link: "/category/auriga",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "canis",
            link: "/category/canis",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "auriga",
            link: "/category/auriga",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "canis",
            link: "/category/canis",
        },
        {
            img: "./assets/aug-0110-removebg-preview.png",
            label: "auriga",
            link: "/category/auriga",
        },
    ];

    // Function to chunk the array into arrays of size 'size'
    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    // Chunking the items into arrays of size 3
    const chunkedItems = chunkArray(items, 3);

    return (
        <>
            <div className='p-32'>
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
