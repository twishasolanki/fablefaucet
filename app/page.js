import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
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
      <div className="flex sm:flex-row flex-col mb-4 p-5">
        <div className="md:w-1/2 flex mx-auto md:justify-end md:items-end justify-center items-center ">
          <img src='assets/about1-1.png' className='w-2/3' />
        </div>
        <div className="md:w-1/2">
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
          <div class="flex md:flex-row flex-col">
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

        {/* <div style={{ backgroundImage: 'url("assets/bg01.jpg")', filter: 'inherit',        backgroundRepeat: 'no-repeat', }} className='w-screen'>
          <div class="flex md:flex-row flex-col p-20">
            <div class="md:w-1/2 flex flex-col mx-auto md:justify-end md:items-end justify-start items-start">
              <p className='text-3xl text-white font-bold '>Contact Info</p>
              <p className='text-3xl text-white font-bold mt-5'>Our <br />Location:</p>
              <div className='flex '>
                <button type='button' className='bg-black rounded-full w-14 h-14 mt-5 mb-4'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-geo-alt-fill ms-4" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg></button>
                <p className='text-md text-white w-36 ms-5 md:mt-5'> Balaji Plumbing Systems Plot No. 15, Rani Industrial Area-2, Behind Parin Furniture, Nr. NH-8, Gondal Road, Vavdi-17 Rajkot-360004</p>

              </div>
              <p className='text-3xl text-white font-bold mt-5 md:mx-12'>Call for <br />help:</p>
              <div className='flex md:mr-4'>
                <button type='button' className='bg-black rounded-full w-14 h-14 '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-telephone-fill ms-4" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                </button>
                <p className='text-md text-white w-34 md:ms-4 mt-5'> +91-9327471604</p>
              </div>

              <p className='text-3xl text-white font-bold mt-5'>Mail us for <br />information</p>
              <div className='flex  md:mr-5'>
                <button type='button' className='bg-black rounded-full w-14 h-14 md:ms-12'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-envelope ms-4" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </button>
                <p className='text-md text-white w-36  mt-5'> fablefaucet@gmail.com</p>
              </div>
    


            </div>
            <div class="md:w-1/2 w-[135%] ms-12 ">
              <div className="card w-[62%] bg-transparent shadow-sm rounded-none text-white text-3xl font-bold h-full p-5 " style={{ background: '#6B6760' }}>
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
        </div> */}


        <div style={{
          position: 'relative',
          backgroundColor: 'black', // Set background color to black
          width: '100vw',

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
            <div className='p-16 md:ms-32'>
              <p className='font-bold'>_________</p>
              <p className='text-5xl font-bold'>Product</p>
            </div>
          </div>
     
        </div>
        <Productitem/>
        <div>
          <div style={{ position: 'relative' }}>
            <img src="assets/bg01.jpg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.12)' }} />

            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <div className='flex md:flex-row flex-col md:mx-auto justify-center items-center'>
                <div className='md:w-1/2 md:p-16 mt-2 '>
                  <p className="md:text-5xl text-3xl font-bold  text-white">Contact Info</p>
                  <p className="md:text-2xl font-bold mt-5 md:ms-20  text-white">Our <br />Location:</p>
                  <div className="flex ">
                    <button type="button" className="bg-black rounded-full w-14 h-14 -mt-16 ">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" className="bi bi-geo-alt-fill ms-4" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                      </svg>
                    </button>
                    <p className="text-md md:w-36 md:ms-5  text-white">Balaji Plumbing Systems Plot No. 15, Rani Industrial Area-2, Behind Parin Furniture, Nr. NH-8, Gondal Road, Vavdi-17 Rajkot-360004</p>
                  </div>

                  <p className="md:text-2xl font-bold mt-5 md:mx-20  text-white">Call for <br />help:</p>
                  <div className="flex md:mr-4">
                    <button type="button" className="bg-black rounded-full md:w-14 h-14  md:-mt-16">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" className="bi bi-telephone-fill ms-4" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                      </svg>
                    </button>
                    <p className="md:text-md  md:ms-4  text-white ">+91-9327471604</p>
                  </div>
                  <p className="text-2xl font-bold mt-5 ms-20 text-white">Mail us for <br />information</p>
                  <div className="flex">
                    <button type="button" className="bg-black rounded-full md:w-14 h-14 md:-mt-16">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" className="bi bi-envelope ms-4" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                      </svg>
                    </button>
                    <p className="md:text-md  text-white md:ms-5 ">fablefaucet@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex md:flex-row flex-col md:p-20">
              <div className="md:w-1/2   mx-auto md:justify-end md:items-end justify-start items-start text-white">
                <p className="md:text-3xl font-bold ">Contact Info</p>
                <p className="text-3xl font-bold mt-5">Our <br />Location:</p>
                <div className="flex ">
                  <button type="button" className="bg-black rounded-full w-14 h-14 mt-5 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" className="bi bi-geo-alt-fill ms-4" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg>
                  </button>
                  <p className="text-md w-36 ms-5 mt-5">Balaji Plumbing Systems Plot No. 15, Rani Industrial Area-2, Behind Parin Furniture, Nr. NH-8, Gondal Road, Vavdi-17 Rajkot-360004</p>
                </div>
                <p className="text-3xl font-bold mt-5 md:mx-12">Call for <br />help:</p>
                <div className="flex md:mr-4">
                  <button type="button" className="bg-black rounded-full w-14 h-14 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" className="bi bi-telephone-fill ms-4" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg>
                  </button>
                  <p className="text-md w-34 md:ms-4 mt-5">+91-9327471604</p>
                </div>
                <p className="text-3xl font-bold mt-5">Mail us for <br />information</p>
                <div className="flex  md:mr-5">
                  <button type="button" className="bg-black rounded-full w-14 h-14 md:ms-12">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" className="bi bi-envelope ms-4" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg>
                  </button>
                  <p className="text-md w-36  mt-5">fablefaucet@gmail.com</p>
                </div>
              </div>
              <div className="md:w-1/2 w-[135%] ms-12 md:mt-0 mt-64">
                <div className="card w-[62%] bg-transparent shadow-sm rounded-none text-white text-3xl font-bold h-full p-5 " style={{ background: 'rgba(107, 103, 96, 0.5)' }}>
                  Get in touch for any kind of help and information
                  <div className="mt-5 ">
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
                    <textarea className="textarea textarea-bordered mt-5 text-lg rounded-none w-[100%] h-28" placeholder="Address" defaultValue={""} />
                    <button type="button" className="bg-black text-white text-sm px-8 mt-6  py-3 rounded-md  font-normal">Send Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>



      <Footer />
    </div>
  )
}
