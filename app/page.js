import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'

export default function Homepage() {
  const ShopItems = [
    {
      "Id": '1',
      "ImgSrc": './assets/8901262177436.jpg',
      "Title": 'Ice Cream',
      "Link": '/IceCream'
    },
    {
      "Id": '2',
      "ImgSrc": './assets/Emotion-Packs_with_yellow_bg.jpeg',
      "Title": 'Chocolate',
      "Link": '/IceCream'
    },
    {
      "Id": '3',
      "ImgSrc": './assets/40026295-2_1-amul-lassi (3).jpg',
      "Link": '/IceCream'
    },
    {
      "Id": '4',
      "ImgSrc": './assets/kool1.png',
      "Link": '/IceCream'
    },
    {
      "Id": '5',
      "ImgSrc": './assets/download.png',
      "Link": '/IceCream'
    },
    {
      "Id": '6',
      "ImgSrc": './assets/amul-spiced-buttermilk.png',
      "Link": '/IceCream'
    },
    {
      "Id": '7',
      "ImgSrc": './assets/cream.png',
      "Link": '/IceCream'
    },
    {
      "Id": '8',
      "ImgSrc": './assets/ghee.png',
      "Link": '/IceCream'
    },
    {
      "Id": '9',
      "ImgSrc": './assets/amul-butter-100g.png',
      "Link": '/IceCream'
    },
    {
      "Id": '10',
      "ImgSrc": './assets/cheese.png',
      "Link": '/IceCream'
    },
    {
      "Id": '11',
      "ImgSrc": './assets/dahi.png',
      "Link": '/IceCream'
    },
    {
      "Id": '12',
      "ImgSrc": './assets/amuldudh.png',
      "Link": '/IceCream'
    },
    {
      "Id": '13',
      "ImgSrc": './assets/puffles.png',
      "Link": '/IceCream'
    },
    {
      "Id": '14',
      "ImgSrc": './assets/happytreats.png',
      "Link": '/IceCream'
    },
    {
      "Id": '15',
      "ImgSrc": './assets/paneer.png',
      "Title": 'Ice Cream'
    },
    {
      "Id": '16',
      "ImgSrc": './assets/Download3.png',
      "Link": '/IceCream'
    },
    {
      "Id": '17',
      "ImgSrc": './assets/shrikhand.png',
      "Link": '/IceCream'
    },

  ];
  return (
    <div>
      <Header />
      <div className="carousel w-full h-5/6">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="assets/3.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="assets/2.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="assets/1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col mb-4 p-5">
        <div className="sm:w-1/2 flex sm:mx-auto justify-end items-end mx-auto justify-center items-center ">
          <img src='assets/about1-1.png' className='w-2/3' />
        </div>
        <div className="sm:w-1/2">
          <div className="card sm:w-3/4 bg-base-100 shadow-lg">
            <div className="card-body rounded-none">
              <p className='text-4xl font-bold'>______</p>
              <p className='text-5xl font-bold mt-3'>About Us</p>
              <p className='text-lg mt-2'>At Fable – we are artisans who stay on leading edge of innovation + design.</p>
              <p className='text-lg mt-2'>Constant process innovation with in-depth research & customer feedback ensures our ergonomic and exceptional quality bathroom fixtures maximize efficiency without compromising on user experience.</p>
              <p className='text-lg mt-2'>Our personalized business structure follows an environment focused approach making our world class products sustainable, user friendly and affordable at the same time.</p>
              <p className='text-lg mt-2'> We customize. We travel the world compeers for design inspiration. We ensure each Fable product makes a subtle connection to the influences of our environment.</p>
              <button className="btn bg-black w-44 rounded-none"><span className='text-white'>Read More</span></button>
            </div>
          </div>
        </div>

      </div>

      {/* <div style={{
        position: 'relative',
        backgroundImage: 'url("./assets/bg6.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100vw',
        display: 'flex',
        backgroundColor: 'black',
        backdropFilter: 'blur(8px)',
      }} className='p-24 bg-gray-500'> */}
      {/* 
      <div className="flex flex-wrap justify-start mt-14  bg-blue-600">
        {ShopItems.map((item, index) => (
          <div key={index} className="w-1/4 p-5 ">
            <a href={`/IceCream/${item.Id}`}> 
              <div className="card shadow-black shadow-2xl relative overflow-hidden bg-cover bg-no-repeat ">
                <img src={item.ImgSrc} alt="Product" className="w-full h-80 transition duration-300 ease-in-out hover:scale-110" />
              </div>
              <p className='text-xl text-white font-bold mt-4 text-center'>{item.Title}</p>
            </a>
          </div>
        ))}
      </div> */}

      <div>
        <div style={{ backgroundImage: 'url("assets/black-6.jpg")' }} className='w-full'>
          <div class="flex md:flex-row flex-col mb-4">
            <div class="md:w-1/2 md:p-24 p-10 ">
              <img src='assets/7-removebg-preview.png' />
              <p className='md:text-3xl text-xl text-white font-bold'>ALL FABLE PRODUCT ARE WARRANTED FOR 7-YEAR COVERING ANY MANUFACTURING DEFECT UNLESS OTHERWISE STATED.</p>
            </div>
            <div class="h-48 bg-orange-300 rounded-md p-8">
              <div className=' flex  w-96 mx-auto justify-center items-center text-black font-bold text-2xl '><p>CATALOGUE</p>
              </div>
              <button type='button' className='bg-black px-10 py-4 mt-5 rounded-md md:ms-14 ms-32 text-white'>DOWNLOAD CATALOGUE</button>

            </div>
          </div>
        </div>

        <div style={{ backgroundImage: 'url("assets/bg01.jpg")'}} className='w-full'>
        <div class="flex mb-4">
            <div class="w-1/2 flex flex-col mx-auto justify-end items-end">
              <p className='text-3xl text-white font-bold '>Contact Info</p>
              <p className='text-3xl text-white font-bold mt-5'>Our <br />Location:</p>
              <p className='text-md text-white w-36  mt-5'> Balaji Plumbing Systems Plot No. 15, Rani Industrial Area-2, Behind Parin Furniture, Nr. NH-8, Gondal Road, Vavdi-17 Rajkot-360004</p>
              <p className='text-3xl text-white font-bold mt-5'>Call for <br/>help:</p>
              <p className='text-md text-white w-36  mt-5'> +91-9327471604</p>
              <p className='text-3xl text-white font-bold mt-5'>Mail us for <br/>information</p>
              <p className='text-md text-white w-36  mt-5'> fablefaucet@gmail.com</p>
        
            
            </div>
            <div class="w-1/2 ">
              <div className="card w-96 bg-white bg-transparent shadow-sm rounded-none ">
            fghnjmk
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}
