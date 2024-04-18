import React from 'react'
import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
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
              <p className='text-5xl font-bold'>Contact</p>

              <nav className="flex p-5" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li className="inline-flex items-center">
                    <a href="/" className="inline-flex items-center text-xl hover:text-[#252525] ">
                      Home  -
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <a className="text-xl ">Contact</a>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div class="flex md:flex-row flex-col content" htmlFor="reload">
          <div class="md:w-1/2 flex flex-col mx-auto justify-center items-center ">
            <p class='text-4xl font-bold ms-12 md:mt-0 mt-10'>Contact Info</p>
            <p class='text-2xl font-bold mt-7'>Our Location:</p>
            <div className='flex justify-end items-end mx-auto'>
              <button type='button' className='bg-black rounded-full w-14 h-14 mb-4'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-geo-alt-fill ms-4" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg></button>
              <p class='text-md w-1/2 mt-1 mx-20'>Balaji Plumbing Systems Plot No. 15, Rani Industrial Area-2, Behind Parin Furniture, Nr. NH-8, Gondal Road, Vavdi-17 Rajkot-360004</p>
            </div>
            <p class='text-2xl font-bold mt-10'>Call for help:</p>
            <div className='flex mr-20'>
              <button type='button' className='bg-black rounded-full w-14 h-14 '>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-telephone-fill ms-4" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
              </button>
              <p class='text-md mx-20 '>+91-9327471604</p>
            </div>
            <p class='text-2xl ms-28 font-bold mt-7'>Mail us for information</p>
            <div className='flex mr-20'>
              <button type='button' className='bg-black rounded-full w-14 h-14 ms-12'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-envelope ms-4" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </button>
              <p class='text-md mx-20'>fablefaucet@gmail.com</p>
            </div>
          </div>
          <div class="md:w-1/2 md:ms-12 ">
            <div className="card md:w-[62%] md:text-4xl text-xl font-bold h-full p-5 mt-14" >
              Get in touch for any kind of help and informations
              <div className='mt-5 '>
                <label className="input input-bordered flex items-center gap-2 text-gray-400 rounded-none">
                  Name
                  <input type="text" className="grow" />
                </label>
                <label className="input input-bordered flex items-center gap-2 text-gray-400 mt-5 rounded-none">
                  Email
                  <input type="text" className="grow" />
                </label>
                <label className="input input-bordered flex items-center gap-2 text-gray-400 mt-5 rounded-none">
                  Phone
                  <input type="text" className="grow" />
                </label>
                <textarea className="textarea textarea-bordered mt-5 rounded-none w-[100%] h-28" placeholder='Address'></textarea>
                <button type='button' className='bg-black text-white text-sm px-8 mt-6  py-3 rounded-md  font-normal'>Send Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
