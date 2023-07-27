import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import ToggleSwitch from "../toggleswitch/ToggleSwitch";
import { Link } from "react-router-dom";

interface SettingsProps {
  darkMode: boolean;
  notifications: boolean;
  language: string;
  onDarkModeChange: (value: boolean) => void;
  onNotificationsChange: (value: boolean) => void;
  onLanguageChange: (value: string) => void;
}

const Settings: React.FC<SettingsProps> = ({
  darkMode,
  notifications,
  language,
  onDarkModeChange,
  onNotificationsChange,
  onLanguageChange,
}: SettingsProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const [pushNotificationsEnabled, setPushNotificationsEnabled] =
    useState(true);
  const [emailNotificationsEnabled, setEmailNotificationsEnabled] =
    useState(true);
  const [smsNotificationsEnabled, setSmsNotificationsEnabled] = useState(true);

  const handlePushNotificationsToggle = () => {
    setPushNotificationsEnabled(!pushNotificationsEnabled);
  };

  const handleEmailNotificationsToggle = () => {
    setEmailNotificationsEnabled(!emailNotificationsEnabled);
  };

  const handleSmsNotificationsToggle = () => {
    setSmsNotificationsEnabled(!smsNotificationsEnabled);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-col w-64">
        <div className="flex items-center justify-between h-16 px-4 bg-white border-b-2 border-gray-200">
          <h1 className="text-lg font-medium">Settings</h1>
          <button
            className="p-2 rounded-md hover:bg-gray-200"
            onClick={toggleMenu}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {showMenu ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <nav className={`flex-grow ${showMenu ? "block" : "hidden"} bg-white`}>
          <ul className="flex flex-col py-4 space-y-2">
            <li className="px-4 py-2 text-gray-700 hover:bg-gray-200">
              General
            </li>
            <li className="px-4 py-2 text-gray-700 hover:bg-gray-200">
              Account
            </li>
            <li className="px-4 py-2 text-gray-700 hover:bg-gray-200">
              Privacy & Security
            </li>
            <li className="px-4 py-2 text-gray-700 hover:bg-gray-200">
              Notifications
            </li>
            <li className="px-4 py-2 text-gray-700 hover:bg-gray-200">
              Language
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow pt-16 pb-8 px-8">
        <Link to="/dashboard">
          <button className="flex items-center text-gray-500 hover:text-gray-700 mb-4">
            <FaChevronLeft className="mr-2" />
            Back to Home
          </button>
        </Link>

        {/* General Settings */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">General</h2>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="dark-mode"
              checked={darkMode}
              onChange={(e) => onDarkModeChange(e.target.checked)}
              className="mr-2"
            />
            <label
              htmlFor="dark-mode"
              className="font-medium text-gray-700 cursor-pointer"
            >
              Dark Mode
            </label>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mt-8">
          {/* Notifications Settings */}
          <div className="mb-6">
            <h2 className="text-gray-700 font-semibold mb-2">Notifications</h2>

            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Push Notifications</span>
              <ToggleSwitch
                enabled={pushNotificationsEnabled}
                onToggle={handlePushNotificationsToggle}
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Email Notifications</span>
              <ToggleSwitch
                enabled={emailNotificationsEnabled}
                onToggle={handleEmailNotificationsToggle}
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-600">SMS Notifications</span>
              <ToggleSwitch
                enabled={smsNotificationsEnabled}
                onToggle={handleSmsNotificationsToggle}
              />
            </div>
          </div>

          {/* Profile Settings */}
          <div className="mb-6">
            <h2 className="text-gray-700 font-semibold mb-2">Profile</h2>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Display Name</span>
              <input
                type="text"
                className="border border-gray-300 py-2 px-3 w-1/2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Profile Picture</span>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://picsum.photos/200/200"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                  Upload
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Bio</span>
              <textarea
                id="bio"
                className="border border-gray-300 py-2 px-3 w-1/2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                rows={3}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Location</span>
              <input
                type="text"
                className="border border-gray-300 py-2 px-3 w-1/2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Account Settings */}
          <div>
            <h2 className="text-gray-700 font-semibold mb-2">Account</h2>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Email Address</span>
              <input
                type="email"
                className="border border-gray-300 py-2 px-3 w-1/2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Password</span>

              <div className="mb-4">
                <label
                  htmlFor="old-password"
                  className="text-gray-500 font-medium mb-1"
                >
                  Old Password
                </label>
                <input
                  type="password"
                  id="old-password"
                  className="border rounded-lg py-2 px-3 w-full"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="new-password"
                  className="text-gray-500 font-medium mb-1"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  className="border rounded-lg py-2 px-3 w-full"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirm-password"
                  className="text-gray-500 font-medium mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="border rounded-lg py-2 px-3 w-full"
                />
              </div>

              <div className="mt-8">
                <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
