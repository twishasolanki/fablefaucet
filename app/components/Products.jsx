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

export default function Products() {
  return (
    <div>
      <Productitem/>
    </div>
  )
}
