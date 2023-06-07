import { useState } from 'react';
import { FaHome, FaTv, FaClock, FaFire, FaUsers, FaTags, FaRss, FaCalendar } from 'react-icons/fa';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import {Link} from 'react-router-dom'

const Sidebar = () => {
  const [showNames, setShowNames] = useState(true);

  const toggleNames = () => {
    setShowNames(!showNames);
  };

  return (
    // <div className="flex flex-col bg-white h-screen w-[15%] px-6 text-md col-span-1  inset-y-0 left-0 pt-10 border-right drop-shadow-lg">
      <div className="flex flex-col bg-white h-screen w-[15%] px-6 text-md col-span-1  inset-y-0 left-0 pt-10 border-right ">
      <div className=' px-6  pb-3'>
        <ul className='space-y-2'>
        <li>
          <Link to="/signup">
            <a href="#" className="flex items-center text-gray-600 hover:text-red-800 mb-6 ">
              <span>Start Using FlairFiner</span>
            </a>
          </Link>
            <Link to="/login">
            <a href="#" className="flex items-center text-gray-600 hover:text-red-800 underline text-sm">
              <span>Login</span>
            </a>
            </Link>
          
          </li>
        
        </ul>
      </div>
      <div className="flex items-center justify-between py-4 ">
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none " onClick={toggleNames}>
          {showNames ? <MdVisibilityOff size={24}  /> : <MdVisibility size={24} />}
        </button>
      </div>
      <nav className=" px-6 pb-6">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
              <FaHome className="mr-2" size={20} />
              {showNames && <span>Home</span>}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
              <FaTv className="mr-2" size={20} />
              {showNames && <span>Live</span>}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
              <FaClock className="mr-2" size={20} />
              {showNames && <span>Recent</span>}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
              <FaFire className="mr-2" size={20} />
              {showNames && <span>Popular</span>}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
              <FaUsers className="mr-2" size={20} />
              {showNames && <span>Following</span>}
            </a>
          </li>
          <li>
            <Link to='/dashboard/categories' className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
              <FaTags className="mr-2" size={20} />
              {showNames && <span>Category</span>}
            </Link>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
              <FaRss className="mr-2" size={20} />
              {showNames && <span>Feed</span>}
            </a>
          </li>
          <li>
            <Link to='/dashboard/events' className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
              <FaCalendar className="mr-2" size={20} />
              {showNames && <span>Event</span>}
            </Link>
          </li>
          
        </ul>
        <div className="mt-10">
  <h2 className="flex font-medium text-gray-500 text-sm uppercase tracking-wide">Recommended</h2>
  <ul className="mt-4 space-y-4">
    <li className="flex">
      <img src="https://source.unsplash.com/random/32x32" alt="" className="rounded-full w-8 h-8 object-cover" />
      <div className="ml-3">
        <div className="font-medium text-gray-800">John Doe</div>
        <div className="text-gray-500 text-sm">Designer</div>
      </div>
    </li>
    <li className="flex">
      <img src="https://source.unsplash.com/random/32x32" alt="" className="rounded-full w-8 h-8 object-cover" />
      <div className="ml-3">
        <div className="font-medium text-gray-800">Jane Doe</div>
        <div className="text-gray-500 text-sm">Developer</div>
      </div>
    </li>
    <li className="flex">
      <img src="https://source.unsplash.com/random/32x32" alt="" className="rounded-full w-8 h-8 object-cover" />
      <div className="ml-3">
        <div className="font-medium text-gray-800">Bob Smith</div>
        <div className="text-gray-500 text-sm">Marketer</div>
      </div>
    </li>
  </ul>
</div>
      </nav>
    </div>
    
  );
};

export default Sidebar;