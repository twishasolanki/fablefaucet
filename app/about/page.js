import React from 'react'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Layout from '../components/Layout';

export default function about() {
  return (
    <>
      <Layout >
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
            backgroundImage: 'url("./assets/footer-bg2.jpg")',
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
              <p className='text-5xl font-bold'>About</p>

              <nav className="flex mt-5" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li className="inline-flex items-center">
                    <a href="/" className="inline-flex items-center text-xl hover:text-[#252525] ">
                      Home  -
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <a className="text-xl ">About</a>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>


          
          <div className='bg-[#FAFAFA] mt-16' style={{ width: '100vw' }}>
            <div className="md:flex md:p-24 p-12">
              <div className="md:w-1/2">
                <p className='text-black font-bold text-5xl'>Company Profile</p>
                <p className='text-gray-500 text-xl mt-10'>At Fable – we are artisans who stay on leading 
                edge of innovation + design.</p>

                <p className='text-gray-500 text-xl mt-5'>Constant process innovation with in-depth research & customer feedback ensures our ergonomic and exceptional quality bathroom fixtures maximize efficiency without compromising on user experience.</p>

                <p className='text-gray-500 text-xl mt-5'>Our personalized business structure follows an environment focused approach making our world class products sustainable, user friendly and affordable at the same time.</p>

                <p className='text-gray-500 text-xl mt-5'>We customize. We travel the world compeers for design inspiration. We ensure each Fable product makes a subtle connection to the influences of our environment.</p>

                <p className='text-gray-500 text-xl mt-5'>Fable products are made using the finest quality materials, continuously updated finest production technologies and cautious electroplating and finishing craftsmanship. the relentless focus on attention to detail during the manufacturing process ensures that our designs are presented to our customers accurate to every fraction, smooth like silk and shiny like a mirror.</p>
              </div>
              <div className="md:w-1/2 md:mt-0 mt-10 flex justify-center items-center">
                <img src='./assets/about1-1.png' className='w-auto h-full' />
              </div>
            </div>
          </div>

      </Layout>
    </>
  )
}
