import { useState } from 'react';
import { FaHome, FaTv, FaClock, FaFire, FaUsers, FaTags, FaRss, FaCalendar } from 'react-icons/fa';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [showNames, setShowNames] = useState(true);

  const toggleNames = () => {
    setShowNames(!showNames);
  };

  return (
    <div className="pt-[7%] flex flex-col bg-white w-full h-full inset-y-0 left-0 clear border-right drop-shadow-lg max-h-screen">
      <div className="px-6 pb-3">
        <ul className="space-x-2">
          <li>
            <Link to="/signup" className="flex items-center text-gray-600 hover:text-gray-800 text-red-800">
              <span>Start Using FlairFiner</span>
            </Link>
          </li>
          <li>
            <Link to="/login" className="flex items-center text-gray-600  hover:text-red-800 underline text-xs">
              <span>Login</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between py-4">
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={toggleNames}>
          {showNames ? <MdVisibilityOff size={24} /> : <MdVisibility size={24} />}
        </button>
      </div>
      <nav className="px-6 pb-6 overflow-y-auto">
        <ul className="space-y-1">
          <li>
            <Link to="/dashboard" className="flex items-center text-gray-600 hover:text-gray-800 mb-2">
              <FaHome className="mr-2" size={18} />
              {showNames && <span>Home</span>}
            </Link>
          </li>
          <li>
            <Link to="#" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
              <FaTv className="mr-2" size={20} />
              {showNames && <span>Live</span>}
            </Link> 
          </li>
          <li>
            <Link to="#" className="flex items-center text-gray-600 hover:text-gray-800 mb-2">
              <FaClock className="mr-2" size={18} />
              {showNames && <span>Recent</span>}
            </Link>
          </li>
          <li>
            <Link to="#" className="flex items-center text-gray-600 hover:text-gray-800 mb-2">
              <FaFire className="mr-2" size={18} />
              {showNames && <span>Popular</span>}
            </Link>
          </li>
          <li>
            <Link to="#" className="flex items-center text-gray-600 hover:text-gray-800 mb-2">
              <FaUsers className="mr-2" size={18} />
              {showNames && <span>Following</span>}
            </Link>
          </li>
          <li>
            <Link to="categories" className="flex items-center text-gray-600 hover:text-gray-800 mb-2">
              <FaTags className="mr-2" size={18} />
              {showNames && <span>Category</span>}
            </Link>
          </li>
          <li>
            <Link to="#" className="flex items-center text-gray-600 hover:text-gray-800 mb-2">
              <FaRss className="mr-2" size={18} />
              {showNames && <span>Feed</span>}
            </Link>
          </li>
          <li>
            <Link to="events" className="flex items-center text-gray-600 hover:text-gray-800 mb-2">
              <FaCalendar className="mr-2" size={18} />
              {showNames && <span>Event</span>}
            </Link>
          </li>
        </ul>
        <div className="mt-8">
          <h2 className="flex font-medium text-gray-500 text-xs uppercase tracking-wide mb-2">Recommended</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <img src="https://source.unsplash.com/random/32x32" alt="" className="rounded-full w-8 h-8 object-cover" />
              <div>
                <div className="font-medium text-gray-800">John Doe</div>
                <div className="text-gray-500 text-xs">Designer</div>
              </div>
            </li>
            <li className="flex items-center space-x-2">
              <img src="https://source.unsplash.com/random/32x32" alt="" className="rounded-full w-8 h-8 object-cover" />
              <div>
                <div className="font-medium text-gray-800">Jane Doe</div>
                <div className="text-gray-500 text-xs">Developer</div>
              </div>
            </li>
            <li className="flex items-center space-x-2">
              <img src="https://source.unsplash.com/random/32x32" alt="" className="rounded-full w-8 h-8 object-cover" />
              <div>
                <div className="font-medium text-gray-800">Bob Smith</div>
                <div className="text-gray-500 text-xs">Marketer</div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
