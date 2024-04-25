import React from 'react'
import Productitem from './Productitem'
import Layout from './Layout'

export default function Products() {
  return (
    <div className=' '>
      <Layout >
        <div style={{
          position: 'relative',
          backgroundColor: 'black', 
          width: '100vw',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white', 
        }} className='flex flex-col '>

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
          }} className='' />

        
          <div style={{
            position: 'relative',
            zIndex: '1', 
          }} className=''>
            <div className='justify-center md:p-20 p-16'>
              <p className='text-5xl font-bold'>Products</p>

              <nav className="flex mt-5 ms-5" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li className="inline-flex items-center">
                    <a href="/" className="inline-flex items-center text-xl hover:text-[#252525] ">
                      Home  -
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <a className="text-xl ">Products</a>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className=' bg-gray-50 py-12'>
          <div className='text-5xl font-bold bg-white p-12' >
            <p className='ms-32' ><u>Pro</u>ducts</p>

          </div>
          <div className='mb-10'>
            <Productitem />
          </div>

        </div>
      </Layout>

    </div>

  )
}
