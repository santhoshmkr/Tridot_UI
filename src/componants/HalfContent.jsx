import React from 'react';
// import { content__one, content__two,menu,profile } from '../constants/content.js';
import {  content__two, menu, profile,profile_two,Section__three,section__three__group__one,section__three__group__two, section__three__group__three } from '../constants/content.js';

function HalfContent() {
  return (
    <div className='mx-10'>
      <div className="mt-8 w-full ">
        <div className="grid grid-cols-5 justify-evenly w-full mb-4">
          {content__two.map((item, index) => (
            <div key={index} className=''>
              <img src={item.image} alt="B2B managed marketplace The Yarn" className="w-56 h-36 rounded-lg" />
              <p className="mt-2  font-[Inter] text-[13.5px]" style={{width:"90%"}}>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="">
            <h2 className="text-xl font-bold font-[Roboto]">Trending</h2>
            <div className="w-10 border-2 border-red-500"></div>
        </div>
        <div className="flex flex-row justify-evenly my-4">
            {menu.map((item, index) => (
                <div className="border p-2" key={index}>
                    <p className="text-sm font-[Inter] text-[#504e4e]">{item}</p>
                </div>
            ))}
        </div>
        
        <div className="w-full flex gap-5 my-2">
            <div className="w-[58%] ">
            <div className="flex justify-between mb-4">
              <div className="">
                <h2 className="text-xl font-bold font-[Roboto]">Leaders Ink</h2>
                <div className="w-10 border-2 border-red-500"></div>
              </div>
              <div className="">
                <p className='text-[12px] font-[Roboto] text-[#504e4e]'>
                  Seemore 
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 space-x-2 justify-around">
                {
                    profile.map((item,index)=>(
                        <div className="border rounded-md" key={index}>
                            <div className="">
                                <img src={item.image} alt={item.main__description}
                                className='w-full h-44 rounded-md' />
                            </div>
                            <div className="flex gap-2 my-2 items-center mx-2">
                                <img src={item.profile_image} alt={item.profile_description} 
                                className='rounded-full'/>
                                <p className='font-[Inter] w-[80%] my-2'>{item.profile_description}</p>
                            </div>
                            <p className='font-[Inter] text-[14px] text-[#504e4e] my-2 mx-2'>{item.main__description}</p>
                            <p className='font-[Robotto] mx-2 text-black'>{item.author}</p>
                        </div>
                    ))
                }
                </div>
            </div>
            <div className="w-[38%]">
              <div className="flex justify-between mb-4">
                <div className="">
                  <h2 className="text-xl font-bold font-[Roboto]">Leaders Ink</h2>
                  <div className="w-10 border-2 border-red-500"></div>
                </div>
                <div className="">
                  <p className='text-[12px] font-[Roboto] text-[#504e4e]'>
                    Seemore 
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gsp-2">
                {
                  profile_two.map((item,index)=>(
                    <div className="border w-[90%] rounded-md" key={index}>
                      <div className="">
                        <img src={item.image} alt={item.description} className=' h-60'/>
                      </div>
                      <div className="mx-2 my-2">
                        <p className="font-[Inter] text-[#666666] rounded-md text-[14px]">{item.description}</p>
                        <p className="Font-[Roboto] uppercase text-red-500 my-2">{item.author}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
        </div>
        <div className="mt-8 w-full bg-black my-2 p-4 flex gap-1">
            <div className="w-[40%] mr-4">
              {
                Section__three.map((item,index)=>(
                  <div className="relative" key={index}>
                    <img src={item.image} alt={item.description} className='rounded-md'/>
                    <p className="absolute bottom-2 text-white text-[21px] mx-5 font-[Inter]">
                      <span className='font-[700]'>{item.description}</span>     
                    </p>
                  </div>
                ))
              }
            </div>
            <div className="w-[20%]">
              <div className="">
              <div className="">
                <h2 className="text-xl text-white font-bold font-[Roboto]">Retail With Rasul</h2>
                <div className="w-10 border-2 border-red-500"></div>
                {
                section__three__group__one.map((arr,index)=>(
                  <div className="" key={index}>
                    <img src={arr.image} alt={arr.description} className='rounded-md'/>
                    <p className="font-[Inter] text-white text-[11px] w-[70%]">
                      {arr.description}
                    </p>
                  </div>
                ))
                }
              </div>
              
              </div>
            </div>
            <div className="w-[20%]">
              <div className="">
              <div className="">
                <h2 className="text-xl text-white font-bold font-[Roboto]">Retail With Rasul</h2>
                <div className="w-10 border-2 border-red-500"></div>
                {
                section__three__group__two.map((arr,index)=>(
                  <div className="" key={index}>
                    <img src={arr.image} alt={arr.description} className='rounded-md w-[70%]'/>
                    <p className="font-[Inter] text-white text-[11px]">
                      {arr.description}
                    </p>
                  </div>
                ))
                }
              </div>
              
              </div>
            </div>
            <div className="w-[20%]">
              <div className="">
              <div className="">
                <h2 className="text-xl text-white font-bold font-[Roboto]">Retail With Rasul</h2>
                <div className="w-10 border-2 border-red-500"></div>
                {
                section__three__group__three.map((arr,index)=>(
                  <div className="" key={index}>
                    <img src={arr.image} alt={arr.description} className='rounded-md'/>
                    <p className="font-[Inter] text-white text-[11px] w-[70%]">
                      {arr.description}
                    </p>
                  </div>
                ))
                }
              </div>
              
              </div>
            </div>

            
            
        </div>
      </div>
    </div>
  );
}

export default HalfContent;
