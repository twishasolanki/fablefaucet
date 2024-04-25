

import Layout from "@/app/components/Layout";
import Link from 'next/link';

export default function Page({ params }) {
  const data = [
    {
      id: "1",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.51 PM.jpeg",
      category: "Black-Masofy",

    },
    {
      id: "2",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.52 PM (1).jpeg",
      category: "Black-Masofy",

    },
    {
      id: "3",
      rev: '1102',
      name: "Pillar Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.52 PM (2).jpeg",
      category: "Black-Masofy",

    },

    {
      id: "4",
      rev: '1103',
      name: "Angle Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.52 PM.jpeg",
      category: "Black-Masofy",

    },
    {
      id: "5",
      rev: '1103',
      name: "Angle Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.53 PM (1).jpeg",
      category: "Black-Masofy",

    },
    ,
    {
      id: "6",
      rev: '1103',
      name: "Angle Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.53 PM (2).jpeg",
      category: "Black-Masofy",

    },

    {
      id: "7",
      rev: '1103',
      name: "Angle Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.53 PM.jpeg",
      category: "Black-Masofy",

    }, {
      id: "8",
      rev: '1103',
      name: "Angle Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.30.35 PM.jpeg",
      category: "Black-Masofy",

    },
    {
      id: "9",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.54 PM.jpeg",
      category: "Hipo-Masofy",
    },

    {
      id: "10",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.55 PM (1).jpeg",
      category: "Hipo-Masofy",
    },
    {
      id: "11",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.55 PM.jpeg",
      category: "Hipo-Masofy",
    },

    {
      id: "12",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.56 PM (1).jpeg",
      category: "Hipo-Masofy",
    },

    {
      id: "13",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.56 PM (2).jpeg",
      category: "Hipo-Masofy",
    },

    {
      id: "14",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.56 PM (3).jpeg",
      category: "Hipo-Masofy",
    },

    {
      id: "15",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.56 PM.jpeg",
      category: "Hipo-Masofy",
    },

    {
      id: "16",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.57 PM (1).jpeg",
      category: "Hipo-Masofy",
    },

    {
      id: "17",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.57 PM (2).jpeg",
      category: "Hipo-Masofy",
    },

    {
      id: "18",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.57 PM (3).jpeg",
      category: "Hipo-Masofy",
    },

    {
      id: "19",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.57 PM (4).jpeg",
      category: "Hipo-Masofy",
    },

    {
      id: "20",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.57 PM (5).jpeg",
      category: "Hipo-Masofy",
    },
    {
      id: "21",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.58 PM (3).jpeg",
      category: "Hipo-Masofy",
    },

    {
      id: "22",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.58 PM (1).jpeg",
      category: "Hipo-Masofy",
    },

    {
      id: "23",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.58 PM (2).jpeg",
      category: "Hipo-Masofy",
    },

    {
      id: "24",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.34.59 PM (2).jpeg",
      category: "Hipo-Masofy",
    },

    {
      id: "25",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.01 PM (2).jpeg",
      category: "Ovel",
    },
    {
      id: "26",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.01 PM (3).jpeg",
      category: "Ovel",
    },
    {
      id: "27",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.02 PM (3).jpeg",
      category: "Ovel",
    },
    {
      id: "28",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.02 PM (4).jpeg",
      category: "Ovel",
    },
    {
      id: "29",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.02 PM (5).jpeg",
      category: "Ovel",
    },
    {
      id: "30",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.03 PM (2).jpeg",
      category: "Ovel",
    },
    {
      id: "31",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.03 PM (3).jpeg",
      category: "Ovel",
    },
    {
      id: "32",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.03 PM (4).jpeg",
      category: "Ovel",
    },
    {
      id: "33",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.04 PM.jpeg",
      category: "Ovel",
    },

    {
      id: "34",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.04 PM (1).jpeg",
      category: "Rihno",

    },

    {
      id: "35",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.05 PM.jpeg",
      category: "Rihno",

    },
    {
      id: "36",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.05 PM (1).jpeg",
      category: "Rihno",

    },
    {
      id: "37",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.06 PM.jpeg",
      category: "Rihno",

    },
    {
      id: "38",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.06 PM (1).jpeg",
      category: "Rihno",

    },
    {
      id: "39",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.06 PM (2).jpeg",
      category: "Rihno",

    },
    {
      id: "40",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.07 PM.jpeg",
      category: "Rihno",

    },
    {
      id: "41",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.07 PM (1).jpeg",
      category: "Rihno",

    },
    {
      id: "42",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.08 PM.jpeg",
      category: "Rihno",

    },

    {
      id: "43",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.08 PM (1).jpeg",
      category: "Rihno",

    },
    {
      id: "44",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.08 PM (2).jpeg",
      category: "RoseGold",

    }
    ,
    {
      id: "45",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.09 PM.jpeg",
      category: "RoseGold",

    }
    ,
    {
      id: "46",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.09 PM (1).jpeg",
      category: "RoseGold",

    }
    ,
    {
      id: "47",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.09 PM (2).jpeg",
      category: "RoseGold",

    }
    ,
    {
      id: "48",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.10 PM.jpeg",
      category: "RoseGold",

    }
    ,
    {
      id: "49",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.10 PM (1).jpeg",
      category: "RoseGold",

    }
    ,
    {
      id: "50",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.11 PM.jpeg",
      category: "RoseGold",

    },
    {
      id: "51",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.11 PM (1).jpeg",
      category: "Turtle",

    }
    ,
    {
      id: "52",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.12 PM.jpeg",
      category: "Turtle",

    }
    ,
    {
      id: "53",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.12 PM (1).jpeg",
      category: "Turtle",

    }
    ,
    {
      id: "54",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.12 PM (2).jpeg",
      category: "Turtle",

    }
    ,
    {
      id: "55",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.13 PM.jpeg",
      category: "Turtle",

    }
    ,
    {
      id: "56",
      rev: '1101',
      name: "Bib Cock",
      img: "../assets/WhatsApp Image 2024-04-17 at 6.35.13 PM (1).jpeg",
      category: "Turtle",

    }

  ];


  const filteredData = data.filter((item) => item.category === params.categoryName);

  return (
    <>
      <Layout>
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
            backgroundImage: 'url("../assets/footer-bg2.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            filter: 'brightness(50%)'
          }} className='' />


          <div style={{
            position: 'relative',
            zIndex: '1',
          }} className=''>
            <div className='justify-center md:p-20 p-16'>
              <p className='md:text-5xl text-3xl font-bold'>{params.categoryName}</p>

              <nav className="flex mt-5 ms-5" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li className="inline-flex items-center">
                    <a href="/" className="inline-flex items-center md:text-xl text-md hover:text-[#252525] ">
                      Home  -
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <a className="md:text-xl text-md ">{params.categoryName}</a>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:w-full'>

          <div className="flex justify-center">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:p-4 w-full">
              {filteredData.map((item, index) => (
                <div key={index} className="flex-none">
                  <Link href="/enquiry">
                    <div className="block shadow-xl p-3 md:p-5 bg-gray-50 border border-gray-200">
                      <img src={item.img} className="shadow-md w-full md:h-[430px] xs:h-[250px]" alt={item.name} />
                      <div className="text-center mt-3 md:mt-5">
                        <p className="font-bold text-lg md:text-xl">REV-{item.rev}</p>
                        <p className="font-medium text-md md:text-lg mt-2 md:mt-3">{item.name}</p>
                        <div className="mt-3 md:mt-5 mb-3 md:mb-5">
                          <a className="bg-black text-white py-2 md:py-3 px-10 md:px-16 text-sm md:text-base">ENQUIRY NOW</a>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

