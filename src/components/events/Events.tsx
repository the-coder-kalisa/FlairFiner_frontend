import React, { useState } from "react";
import { FaChevronRight, FaSearch} from "react-icons/fa";
import { GoLocation} from "react-icons/go";
import { Link } from 'react-router-dom';
type Eventsprops={
  numImages:number;
}
const Events :React.FC<Eventsprops>=({numImages})=> {
  const height =128;
  const width=128;
  const Images=Array.from({length:numImages}).map(()=>{
    const randomId= Math.floor(Math.random()*1000);
    return `https://source.unsplash.com/random/${width}x${height}?sig=${randomId}`;

  })
  const [isDarkMode, setIsDarkMode] = useState(false);
  const event={
  name: 'Official  Stand up and Shine Talent Show  Competion 2023',
  desc_prize:'Performance on FlairFinder.Win 500$',
  duration:'Fri Jul 1, 9:00 AM - Fri jul 31,13:00 PM ',
  location: '517 Isanzure Road, Kigali, NY. Event by Official TV1',
}


  return (
    <div className=' w-full'>
      <div className="w-full h-screen  ">
        <div className="flex flex-row justify-around items-center h-20 shadow-md  border-[#969595]">
          <section className="">4 Events</section>
          <div className='relative'>
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <FaSearch className="text-gray-500" />
          </span>
          <input type="text" className={`py-2 pl-10 pr-4 rounded-lg border-2 focus:outline-none focus:border-${isDarkMode ? "gray-500" : "indigo-500"} ${isDarkMode? "bg-gray-700 text-gray-100" : "bg-white text-gray-800"}`} placeholder="Search events" />
        </div>
        <Link to='#'>Create Events</Link>
        </div>
        <div className="flex flex-row justify-between p-6 border-b-4">
          <div className="flex flex-row ">
          {Images.map((imageUrl, index)=>(
          <img id="image " 
          src={imageUrl}
          alt={`Image ${index+1}`}
          className="bg-black h-32 w-32" 
          key={imageUrl}
          />
            ))}
          <div id="others" className="flex flex-col justify-between px-4">
          <h1 className='text-[#860909] text-lg lg:font-extrabold  '>{event.name}</h1>
            <section className="text-sm">{event.desc_prize}</section>
            <section className="text-sm">{event.duration}</section>
            <span className=" flex flex-row justify-between items-center w-[77.333%] "><GoLocation className="text-[#434343]" />{event.location}</span>
          </div>
          </div>
          <div className=" self-end">
            <button className="flex flex-row justify-between items-center w-40 rounded-2xl bg-[#AB0303] text-white h-12  mr-[10em] hover:border-1 hover:border-[#AB0303] hover:bg-white hover:text-[#AB0303]">Attend Event <FaChevronRight className="hover-text-[#AB0303]" /></button>
          </div>
        </div>
        <div className="flex flex-row justify-between p-6 border-b-4">
          <div className="flex flex-row ">
            {Images.map((imageUrl, index)=>(
          <img id="image " 
          src={imageUrl}
          alt={`Image ${index+1}`}
          className="bg-black h-32 w-32" 
          key={imageUrl}
          />
            ))}
          <div id="others" className="flex flex-col justify-between px-4">
          <h1 className='text-[#860909] text-lg lg:font-extrabold  '>{event.name}</h1>
            <section className="text-sm">{event.desc_prize}</section>
            <section className="text-sm">{event.duration}</section>
            <span className=" flex flex-row justify-between items-center w-[77.333%]"><GoLocation className="text-[#434343]" />{event.location}</span>
          </div>
          </div>
          <div className=" self-end">
            <button className="flex flex-row justify-between items-center w-40 rounded-2xl bg-[#AB0303] text-white h-12  mr-[10em] hover:border-1 hover:border-[#AB0303] hover:bg-white hover:text-[#AB0303]">Attend Event <FaChevronRight className="hover-text-[#AB0303]" /></button>
          </div>
        </div>
        <div className="flex flex-row justify-between p-6 border-b-4">
          <div className="flex flex-row ">
          {Images.map((imageUrl, index)=>(
          <img id="image " 
          src={imageUrl}
          alt={`Image ${index+1}`}
          className="bg-black h-32 w-32" 
          key={imageUrl}
          />
            ))}
          <div id="others" className="flex flex-col justify-between px-4">
          <h1 className='text-[#860909] text-lg lg:font-extrabold  '>{event.name}</h1>
            <section className="text-sm">{event.desc_prize}</section>
            <section className="text-sm">{event.duration}</section>
            <span className=" flex flex-row justify-between items-center w-[77.333%]"><GoLocation className="text-[#434343]" />{event.location}</span>
          </div>
          </div>
          <div className=" self-end">
          <button className="flex flex-row justify-between items-center w-40 rounded-2xl bg-[#AB0303] text-white h-12  mr-[10em] hover:border-1 hover:border-[#AB0303] hover:bg-white hover:text-[#AB0303]">Attend Event <FaChevronRight className="hover-text-[#AB0303]" /></button>
          </div>
        </div>
        <div className="flex flex-row justify-between p-6 border-b-4">
          <div className="flex flex-row ">
          {Images.map((imageUrl, index)=>(
          <img id="image " 
          src={imageUrl}
          alt={`Image ${index+1}`}
          className="bg-black h-32 w-32" 
          key={imageUrl}
          />
            ))}
          <div id="others" className="flex flex-col justify-between px-4">
          <h1 className='text-[#860909] text-lg lg:font-extrabold  '>{event.name}</h1>
            <section className="text-sm">{event.desc_prize}</section>
            <section className="text-sm">{event.duration}</section>
            <span className=" flex flex-row justify-between items-center w-[77.333%]"><GoLocation className="text-[#434343]" />{event.location}</span>
          </div>
          </div>
          <div className=" self-end">
            <button className="flex flex-row justify-between items-center w-40 rounded-2xl bg-[#AB0303] text-white h-12  mr-[10em] hover:border-1 hover:border-[#AB0303] hover:bg-white hover:text-[#AB0303]">Attend Event <FaChevronRight className="hover-text-[#AB0303]" /></button>
          </div>
        </div>
        <div className="flex flex-row justify-between p-6 border-b-4">
          <div className="flex flex-row ">
          {Images.map((imageUrl, index)=>(
          <img id="image " 
          src={imageUrl}
          alt={`Image ${index+1}`}
          className="bg-black h-32 w-32" 
          key={imageUrl}
          />
            ))}
          <div id="others" className="flex flex-col justify-between px-4">
          <h1 className='text-[#860909] text-lg lg:font-extrabold  '>{event.name}</h1>
            <section className="text-sm">{event.desc_prize}</section>
            <section className="text-sm">{event.duration}</section>
            <span className=" flex flex-row justify-between items-center w-[77.333%]"><GoLocation className="text-[#434343]" />{event.location}</span>
          </div>
          </div>
          <div className=" self-end">
            <button className="flex flex-row justify-between items-center w-40 rounded-2xl bg-[#AB0303] text-white h-12  mr-[10em] hover:border-1 hover:border-[#AB0303] hover:bg-white hover:text-[#AB0303]">Attend Event <FaChevronRight className="hover-text-[#AB0303]" /></button>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Events
