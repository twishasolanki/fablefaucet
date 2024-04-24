import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Productitem from './components/Productitem';

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


      <div className="flex sm:flex-row flex-col mb-4 p-5 " htmlFor="reload">
        <div className="md:w-1/2 flex md:mx-auto md:justify-end md:items-end justify-center items-center ">
          <img src='assets/about1-1.png' className='md:w-2/3 md:block hidden'  />
        </div>
        <div className="md:w-1/2 "   >
          <div className=" md:w-3/4  bg-base-100 ">
            <div className="card-body">
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
      <div style={{
        position: 'relative',
        backgroundColor: 'black',
        color: 'white',
      }} className='flex flex-col md:w-[100vw]'>

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

        <div style={{
          position: 'relative',
          zIndex: '1',
        }}>
          <div className='p-16 md:ms-32'>
            <p className='font-bold'>_________</p>
            <p className='text-5xl font-bold'>Product</p>
          </div>
        </div>

      </div>
      <Productitem />

       <div>
        <div style={{ backgroundImage: 'url("assets/black-6.jpg")' }} className='w-full'>
          <div className="flex md:flex-row flex-col">
            <div className="md:w-1/2 md:p-24 p-10 ">
              <img src='assets/7-removebg-preview.png' />
              <p className='md:text-3xl text-xl text-white font-bold'>ALL FABLE PRODUCT ARE WARRANTED FOR 7-YEAR COVERING ANY MANUFACTURING DEFECT UNLESS OTHERWISE STATED.</p>
            </div>
            <div className="h-48 bg-orange-300 rounded-md p-8">
              <div className=' flex  w-96 mx-auto justify-center items-center text-black font-bold text-2xl '><p>CATALOGUE</p>
              </div>
              <button type='button' className='bg-black px-10 py-4 mt-5 rounded-md md:ms-14 ms-32 text-white'>DOWNLOAD CATALOGUE</button>

            </div>
          </div>
        </div>

{/*
        <div className="flex flex-col  md:w-[100vw] text-white md:justify-center md:items-center bg-black overflow-y-hidden" htmlFor="reload" >

          <div style={{ position: 'absolute', backgroundImage: 'url("./assets/bg01.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', filter: 'brightness(30%)' }} className='w-[100%] md:h-[100%] h-[98%] md:top-0 left-0' />

          <div style={{ position: 'relative', zIndex: '0' }} className='md:w-[100%] '>
            <div className="flex md:flex-row flex-col mb-4 md:p-24 p-12">
              <div className="md:w-1/2">
                <p className='text-4xl font-bold md:ms-80'>Contact info</p>
                <div className="flex mb-4">
                  <div className="md:w-1/2 mt-5 flex md:mx-auto justify-end items-start">
                    <button type="button" className="bg-black rounded-full w-14 h-14  ">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" className="bi bi-geo-alt-fill ms-4" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                      </svg>
                    </button>
                  </div>
                  <div className="md:w-52 mt-8">
                    <p className='text-2xl font-bold'>Our<br /> Location:</p>
                    <p className='text-lg'>Balaji Plumbing Systems Plot No. 15, Rani Industrial Area-2, Behind Parin Furniture, Nr. NH-8, Gondal Road, Vavdi-17 Rajkot-360004</p>
                  </div>
                </div>
                <div className="flex mb-8">
                  <div className="md:w-1/2 flex md:mx-auto md:justify-end md:items-start ">
                    <button type="button" className="bg-black rounded-full w-14 h-14  ">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" className="bi bi-telephone-fill ms-4" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                      </svg>
                    </button>
                  </div>
                  <div className="md:w-52 ">
                    <p className='text-2xl font-bold'>Call for<br /> help:</p>
                    <p className='text-lg'>+91-9327471604</p>
                  </div>
                </div>
                <div className="flex mb-8">
                  <div className="md:w-1/2 flex md:mx-auto md:justify-end md:items-start ">
                    <button type="button" className="bg-black rounded-full w-14 h-14  ">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" className="bi bi-envelope ms-4" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                      </svg>
                    </button>
                  </div>
                  <div className="md:w-52 ">
                    <p className='text-2xl font-bold'>Mail us for<br /> information</p>
                    <p className='text-lg'>fablefaucet@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 w-full   md:ms-12 ">
                <div className="card md:w-[62%] w-full md:h-[110%] bg-transparent shadow-sm rounded-none text-white md:text-4xl text-2xl font-bold  p-5 " style={{ background: '#6B6760' }}>
                  Get in touch for any kind of help and informations
                  <div className='mt-5'>
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
                    <textarea className="textarea textarea-bordered mt-5 text-lg rounded-none w-[100%] h-28" placeholder='Address'></textarea>
                    <button type='button' className='bg-black text-white text-sm px-8 mt-6  py-3 rounded-md  font-normal'>Send Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


*/}
      </div> 
      <Footer />
    </div>
  )
}
