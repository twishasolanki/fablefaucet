// import React from 'react'
// import Layout from '../components/Layout'

// export default function enquiry() {
//     return (
//         <>
//             <Layout>


//                 <div className='flex justify-center items-center p-12'>
//                     <div style={{backgroundImage:'url("./assets/bg01-1.jpg")', backgroundRepeat:'no-repeat'}} className="block w-full p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

//                         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//                         <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//                     </div>
//                 </div>
//             </Layout>
//         </>

//     )
// }

import React from 'react'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Layout from '../components/Layout';

export default function enquiry() {
    return (
        <>
            <Layout >
                <div >

                    <div style={{
                        position: 'relative',
                        backgroundColor: 'black', // Set background color to black
                        width: '100vw',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white', // Set text color to white
                    }} className='flex flex-col'>

                        {/* Background Image */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: 'url("./assets/footer-bg.jpg")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            filter: 'brightness(50%)'
                        }} />

                        {/* Content */}
                        <div style={{
                            position: 'relative',
                            zIndex: '1', // Set higher z-index to place it above the blurred background
                        }}>
                            <div className='justify-center md:p-20 p-16'>
                                <p className='text-5xl font-bold'>Enquiry Now</p>

                                <nav className="flex p-8" aria-label="Breadcrumb">
                                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                        <li className="inline-flex items-center">
                                            <a href="/" className="inline-flex items-center text-xl hover:text-[#252525]">
                                                Home  -
                                            </a>
                                        </li>
                                        <li>
                                            <div className="flex items-center">
                                                <a className="text-xl">Enquiry Now</a>
                                            </div>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>


                    <div  className='mt-16'>
                        <p className='text-3xl font-bold text-center mt-5'>REQUEST FOR A QUOTE</p>
                        <div className='flex md:justify-center md:items-center '>

                         
                            <div style={{ position: 'relative', backgroundColor: 'black', backgroundImage: 'url("./assets/bg01-1.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="block md:w-[75%] w-full  p-5  ">
                              
                                <div className="flex  md:flex-row flex-col mb-4 p-5">
                                    <div className="md:w-1/2  flex mx-auto md:justify-end md:items-end ">
                                        <div className='mt-5 md:w-[70%]'>
                                           
                                                <input type="text" className="w-full input input-bordered flex items-center gap-2 text-gray-400 rounded-none" placeholder='Name' />
                                         
                                            <input type="text" className="w-full input input-bordered flex items-center gap-2 text-gray-400 rounded-none mt-5" placeholder='Email' />
                                            <input type="text" className="w-full input input-bordered flex items-center gap-2 text-gray-400 rounded-none mt-5" placeholder='Phone' />
                                            <input type="text" className="w-full input input-bordered flex items-center gap-2 text-gray-400 rounded-none mt-5" placeholder='Address' />
                                            <textarea className="textarea textarea-bordered mt-5 rounded-none w-[100%] h-28" placeholder='Message'></textarea>
                                            <button type='button' className='bg-black text-white text-sm px-8 mt-6  py-3 rounded-md  font-normal'>Send Now</button>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 w-full flex mx-auto md:justify-start md:items-start justify-center items-center md:ms-5">
                                        <div className="md:w-1/3 md:mt-0 mt-10 ">
                                            <div className='md:h-80 mt-5 w-[100%]'>
                                                <div className="mapouter">
                                                    <div className="gmap_canvas">
                                                        <iframe  className='md:w-[250%]  md:h-[385px] ' id="gmap_canvas" src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </Layout>
        </>
    )
}
