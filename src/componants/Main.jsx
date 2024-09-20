import React, { useState } from 'react';
import image_1 from '../assets/img1.png';
import image_2 from '../assets/img2.png';
import image_3 from '../assets/img3.png';
import Politic__image from '../assets/poltics.png';
import store__image from '../assets/store.png';
import Man__stand__image from '../assets/manIn__store.png'
import Momo from '../assets/momo.png'
import kfc from '../assets/kfc.png'
import flower from '../assets/flower.png'
import group from '../assets/3 people.png'
import {content__two} from '../constants/content.js'
import scooteter__add from '../assets/section_one/add.png'


function Main() {
  const [cards, setCards] = useState([
    {
      title: "HOTSPOTS",
      description: "Luxury hotspots: 5 most expensive high streets in the world.",
      image: image_1
    },
    {
      title: "AI",
      description: "5 ways to leverage the power of chatGpt in retail.",
      image: image_2
    },
    {
      title: "Shipping",
      description: "Relience to open 250 Azorte stores in 2-3 years.",
      image: image_3
    }
  ]);

  const [cardTwo, setCardTwo] = useState([
    {
        image: Momo,
        title: "SELECT CITYWALK",
        description: "Wow! Momo Foods enters Bhopal with Wow!",
        hastag__one:"# Citywalk",
        hastag__two:"#reel stories podcast"
    },
    {
        image: kfc,
        title: "FOOD & BEVERAGE",
        description: "KFC opens another outlet in Punjab KFC opens another outlet in Punjab",
        hastag__one:"# Beverage ",
        hastag__two:"#reel stories podcast"
    },
    {
        image: Momo,
        title: "SELECT CITYWALK",
        description: "FNP (Ferns N Petals) appoints Ashish Goel",
        hastag__one:"# Citywalk",
        hastag__two:"#reel stories podcast"
    }
]);

  return (
    <div className="">
        
            
    <div className="bg-[#F8F9FA] px-16 py-4 flex items-center gap-4">
      {cards.map((card, index) => (
        <div key={index} className="bg-white p-3 rounded-md flex items-center gap-3 w-[450px]">
          <img src={card.image} alt={card.title} className="w-1/3 h-30 object-contain" />
          <div className="p-4">
            <h2 className="text-red-500 text-[15px] font-semibold font-[Roboto]">{card.title}</h2>
            <p className="text-[16px] font-[400] font-[Inter]">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
    
    <div className="container mx-auto p-4 font-[Inter]">
                    <div className="flex gap-14  border-b-2 pb-4">
                        <div className="">
                            <div className="mb-4 relative">
                            <div className="mt-2 absolute mt{-2} bottom-2 mx-2">
                                    <span className="text-white bg-red-500 p-2 font-bold font-[Rboto]">IN FOCUS</span>
                                    <h2 className="text-2xl font-bold text-white my-2 font-[Inter]">Rahul Gandhi in Manipur: Chopper Ride After Women Protesters Surround Car</h2>
                                    <p className='text-white font-droid-sans font-thin text-[18px]'>Rahul Gandhi</p>
                                </div>
                                <img src={Politic__image} alt="Rahul Gandhi in Manipur: Chopper Ride After Women Protesters Surround Car" className=" h-auto rounded-lg" />
                                
                            </div>
                           
                             {
                                    cardTwo.map((item,index) =>(
                                        <div className="shadow-md py-5 w-[587px] flex gap-5 px-2" key={index}>
                                            <div className="flex justify-between items-center">
                                                <img src={item.image} alt={item.description} className='rounded-lg'/>
                                                <div className="ml-4">
                                                    <p className='text-red-500 font-semibold text-[12px] uppercase font-[Roboto]'>{item.title}</p>
                                                    <p className='text-[17px] mt-3 font-[400] font-[Inter]'>{item.description}</p>
                                                    <div className="flex mt-3 gap-8">
                                                        <p className="text-[14px] font-[400] font-[Roboto]">{item.hastag__one}</p>
                                                        <p className="text-[14px] font-[400] text-[#504E4E] font-[Roboto]">{item.hastag__two}</p>
                                                    </div>
                                                </div>
                                                <div className="ml-12">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                    </div>
                                            </div>
                                        </div>
                                    ))
                                }
                        </div>
                        <div>
                            <div className="mb-4">
                                <h2 className="text-xl font-bold font-[Roboto]">Latest News</h2>
                                <div className="border-b-4 border-red-500 w-[10%]"></div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start flex-col">
                                    <img src={Man__stand__image} alt="Unwrapping the Archies' reinvention plan" className=" rounded-lg" />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-[400] text-center my-2 font-[Inter]">Unwrapping the Archies' reinvention plan</h3>
                                    </div>
                                </div>
                                <div className="flex items-start flex-col">
                                    <img src={store__image} alt="How AI is enhancing stores, How AI is enhancing stores" className="rounded-lg" />
                                    <div className="ml-4 mt-2 space-y-3">
                                        <h3 className="text-lg font-bold border-b-2 w-[70%]">How AI is enhancing stores, How AI is enhancing stores</h3>
                                        <p className='bordr-b-2 w-[70%] font-[Inter] text-[#504E4E]'>Croma opens 58 outlets in a, Croma retails more than 10,000</p>
                                        <p className='w-[70%] font-[Inter] text-[#504E4E]'>These companies created a lot of hype when they listed on the...</p>
                                    </div>
                                </div>
                                <div className="flex items-start border-t-2 w-[70%]">
                                    <div className="ml-4">
                                        <h3 className="text-lg font-bold ">Select Citywalk opens 4 new stores in June</h3>
                                        <p className=' font-[Inter] text-[#504E4E]'>These companies created a lot of hype when they listed on the...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="mb-4">
                                <h2 className="text-xl font-bold font-[Roboto]">Web Specials</h2>
                                <div className="border-b-4 border-red-500 w-[3%]"></div>
                            </div>
                        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="">
                                <img src={Politic__image} alt="Rahul Gandhi in Manipur: Chopper Ride After Women Protesters Surround Car" className="w-full h-auto rounded-lg" />
                                <div className="mt-2">
                                    <h3 className="text-lg font-bold">Rahul Gandhi in Manipur: Chopper Ride After Women Protesters Surround Car</h3>
                                </div>
                            </div>
                            <div>
                                <ul className="list-disc  list-inside space-y-5 margin-y-auto">
                                    <li>Cinema industry welcomes lowering GST rates</li>
                                    <li>Patanjali Ayurved to sell 7% stake in Patanjali</li>
                                    <li>Select Citywalk opens 4 new stores in June</li>
                                    <li>Govt imposes import restrictions on certain gold</li>
                                    <li>Joom Marketplace offers a global window for sellers</li>
                                </ul>
                            </div>
                            <div className="">
                            <img src={Politic__image} alt="Rahul Gandhi in Manipur: Chopper Ride After Women Protesters Surround Car" className="w-full h-auto rounded-lg" />
                            </div>
                        </div> */}
                        <div className="flex space-x-3 border-b-2">
                            <div className="w-[996px]">
                                <div className="mt-5 flex space-x-8">
                                    <div className="relative">
                                        <img src={Politic__image} className="" alt=""/>
                                        </div>
                                        <div className="border-l border-r">
                                            <ul className='space-y-4'><li className="flex items-center font-[Inter] mx-2 font-[400] text-[16px] space-x-3 border-b px-4 py-3"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-red-500" height="8" width="8" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path></svg>
                                            <p>Cinema industry welcomes lowering GST rates</p>
                                            </li>
                                            <li className="flex items-center font-[Inter] font-[400] text-[16px] space-x-3 border-b px-4 py-3">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-red-500" height="8" width="8" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path></svg><p>Patanjali Ayurved to sell 7% stake in Patanjali</p></li><li className="flex items-center font-[Inter] font-[400] text-[16px] space-x-3 border-b mx-2 px-4 py-3"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-red-500" height="8" width="8" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path></svg>
                                                <p>Select Citywalk opens 4 new stores in June</p>
                                                </li>
                                                <li className="flex items-center font-[Inter] font-[400] text-[16px] space-x-3 border-b mx-2 px-4 py-3"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-red-500" height="8" width="8" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path></svg>
                                                <p>Govt imposes import restrictions on certain gold </p>
                                                </li>
                                                <li className="flex items-center font-[Inter] font-[400] text-[16px] space-x-3 border-b-0 px-4 py-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-red-500" height="8" width="8" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path></svg>
                                                <p className='font-notoRashi'>Joom Marketplace offers a global window for sellers</p>
                                                </li>
                                                </ul>
                                                </div>
                                                </div>
                                                <div className="border-t-2 py-3 mt-5">
                                                    <ul className="flex items-center space-x-3"><li className="flex font-[Inter] font-[400] border-r-2 text-[16px] space-x-3 p-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-red-500 mt-2" height="8" width="8" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path></svg>
                                                    <p>B2B managed marketplace The Yarn</p>
                                                    </li>
                                                    <li className="flex font-[Inter] font-[400] border-r-2 text-[16px] space-x-3 p-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-red-500 mt-2" height="8" width="8" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path></svg>
                                                    <p>Sequoia Capital exits Go Fashion</p>
                                                    </li>
                                                    <li className="flex font-[Inter] font-[400] border-r-2 text-[16px] space-x-3 p-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-red-500 mt-2" height="8" width="8" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path></svg>
                                                    <p>B2B managed marketplace The Yarn</p>
                                                    </li>
                                                    <li className="flex font-[Inter] font-[400] border-r-2 text-[16px] space-x-3 p-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-red-500 mt-2" height="8" width="8" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path></svg>
                                                    <p>Sequoia Capital exits Go Fashion</p>
                                                    </li>
                                                    </ul>
                                                    </div>
                                                    </div>
                                                       <div className='mt-5'>
                                                            <p className="font-[12px] font-[Poppins] text-center text-[#504E4E] ">
                                                               <span className='font-[400]'> -Advertisement-</span>
                                                            </p>
                                                            <img src={scooteter__add} alt=""/>
                                                        </div>
                                                    </div>
                    </div>
                </div>

    </div>
  );
}

export default Main;
