// import React from 'react'

// export default function Products() {
//     return (
//         <div>
//             <p className='text-3xl font-bold '>___</p>
//             <p className='text-3xl font-bold '>Products</p>

//             <div className=' bg-gray-100 p-48'>

//                 <div class="flex">
//                     <div class="w-1/2 bg-white h-60">
//                         <img src='assets/revive.png' className='h-60' />
//                     </div>
//                     <div class="w-full md:w-1/2 bg-black h-auto md:h-60 flex mx-auto justify-center items-center flex-col">
//                         <p class="text-white font-bold">REVIVE</p>
//                         <p class="text-white">.............</p>
//                     </div>
//                     <div class="w-1/2 bg-white h-60">
//                         <img src='assets/revive.png' className='h-60' />
//                     </div>
//                     <div class="w-full md:w-1/2 bg-black h-auto md:h-60 flex mx-auto justify-center items-center flex-col">
//                         <p class="text-white font-bold">REVIVE</p>
//                         <p class="text-white">.............</p>
//                     </div>
//                     <div class="w-1/2 bg-white h-60">
//                         <img src='assets/revive.png' className='h-60' />
//                     </div>
//                     <div class="w-full md:w-1/2 bg-black h-auto md:h-60 flex mx-auto justify-center items-center flex-col">
//                         <p class="text-white font-bold">REVIVE</p>
//                         <p class="text-white">.............</p>
//                     </div>
//                 </div>
//                 <div class="flex">

//                     <div class="w-full md:w-1/2 bg-black h-auto md:h-60 flex mx-auto justify-center items-center flex-col">
//                         <p class="text-white font-bold">REVIVE</p>
//                         <p class="text-white">.............</p>
//                     </div>
//                     <div class="w-1/2 bg-white h-60">
//                         <img src='assets/revive.png' className='h-60' />
//                     </div>
//                     <div class="w-full md:w-1/2 bg-black h-auto md:h-60 flex mx-auto justify-center items-center flex-col">
//                         <p class="text-white font-bold">REVIVE</p>
//                         <p class="text-white">.............</p>
//                     </div>
//                     <div class="w-1/2 bg-white h-60">
//                         <img src='assets/revive.png' className='h-60' />
//                     </div>
//                     <div class="w-full md:w-1/2 bg-black h-auto md:h-60 flex mx-auto justify-center items-center flex-col">
//                         <p class="text-white font-bold">REVIVE</p>
//                         <p class="text-white">.............</p>
//                     </div>
//                     <div class="w-1/2 bg-white h-60">
//                         <img src='assets/revive.png' className='h-60' />
//                     </div>
//                 </div>

//             </div>
//         </div>

//     )


// import React from 'react';
// import { Link } from 'react-router-dom';

// const ShopItems = [
//   {
//     "Id": '1',
//     "ImgSrc": './assets/8901262177436.jpg',
//     "Title": 'Ice Cream',
//     "Link": '/ShopItem/1'
//   },
//   {
//     "Id": '2',
//     "ImgSrc": './assets/8901262177436.jpg',
//     "Title": 'Ice sas',
//     "Link": '/ShopItem/1'
//   },
//   {
//     "Id": '3',
//     "ImgSrc": './assets/8901262177436.jpg',
//     "Title": 'Ice sasa',
//     "Link": '/ShopItem/1'
//   },
//   {
//     "Id": '4',
//     "ImgSrc": './assets/8901262177436.jpg',
//     "Title": 'Ice Crsafdsfds  sam',
//     "Link": '/ShopItem/1'
//   },
//   {
//     "Id": '5',
//     "ImgSrc": './assets/8901262177436.jpg',
//     "Title": 'Ice sasasdsadfsa',
//     "Link": '/ShopItem/1'
//   },
//   // Other ShopItems...
// ];

// const Products = () => {
//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {ShopItems.map(item => (
//           <li key={item.Id}>
//             <a href={item.Link}>{item.Title}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

//export default Products;

import React from 'react'
import Productitem from './Productitem'
import Layout from './Layout'

export default function Products() {
  return (
    <div className=' '>
      <Layout >
        <div style={{
          position: 'relative',
          backgroundColor: 'black', // Set background color to black
          width: '100vw',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white', // Set text color to white
        }} className='flex flex-col '>

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
          }} className='' />

          {/* Content */}
          <div style={{
            position: 'relative',
            zIndex: '1', // Set higher z-index to place it above the blurred background
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
