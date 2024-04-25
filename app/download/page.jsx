import React from 'react'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Layout from '../components/Layout';

export default function Download() {
  return (
    <>
      <Layout >
        <div style={{
          position: 'relative',
          backgroundColor: 'black',
          width: '100vw',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }} className='flex flex-col'>


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


          <div style={{
            position: 'relative',
            zIndex: '1',
          }}>
            <div className='justify-center md:p-20 p-16'>
              <p className='text-5xl font-bold'>Download</p>

              <nav className="flex mt-5 ms-8" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li className="inline-flex items-center">
                    <a href="/" className="inline-flex items-center text-xl hover:text-[#252525] ">
                      Home  -
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <a className="text-xl ">Download</a>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className='bg-[#FAFAFA] mt-16  p-12' style={{ width: '100vw' }}>
          <a href='https://fablefaucets.com/wp-content/uploads/2024/03/FABLE-Faucet-with-Accessories-2023-2_compressed-1.pdf'>
            <div className='flex flex-col justify-center items-center'>
              <div >
                <img src='./assets/12.png' style={{ width: '40vw' }} />
              </div>
              <div>
                <p className='mt-5 text-2xl font-bold'>DOWNLOAD CATALOGUE</p>
              </div>
            </div>
          </a>
        </div>

      </Layout>
    </>
  )
}
