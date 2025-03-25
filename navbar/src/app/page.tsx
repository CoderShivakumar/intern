'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        if (window.innerWidth >= 768) setIsSidebarOpen(false);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="bg-gray-900 border-gray-700 dark:bg-black dark:border-gray-800 fixed w-full top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a 
            href="#" 
            className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
            onClick={toggleSidebar}
          >
            <Image 
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="CosmoQuest Logo"
              width={32}
              height={32}
              priority
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              CosmoQuest
            </span>
          </a>

          {/* Hamburger icon removed since functionality moved to CosmoQuest */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-800 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900 dark:bg-black md:dark:bg-black dark:border-gray-800">
              <li>
                <a 
                  href="#" 
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-500 md:p-0 md:dark:text-blue-400 dark:bg-blue-600 md:dark:bg-transparent"
                >
                  Launch Pad
                </a>
              </li>
              {!isMobile && (
                <li>
                  <button 
                    id="dropdownNavbarLink" 
                    data-dropdown-toggle="dropdownNavbar" 
                    className="flex items-center justify-between w-full py-2 px-3 text-gray-200 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-400 dark:focus:text-white dark:border-gray-800 dark:hover:bg-gray-900 md:dark:hover:bg-transparent"
                  >
                    Missions 
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                  <div id="dropdownNavbar" className="z-10 hidden font-normal bg-gray-800 divide-y divide-gray-700 rounded-lg shadow w-44 dark:bg-gray-900 dark:divide-gray-800">
                    <ul className="py-2 text-sm text-gray-300 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 dark:hover:text-white">Mars Explorer</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 dark:hover:text-white">Lunar Base</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 dark:hover:text-white">Deep Space</a></li>
                    </ul>
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-white">Mission Control</a>
                    </div>
                  </div>
                </li>
              )}
              <li>
                <a 
                  href="#" 
                  className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Galaxies
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Star Systems
                </a>
              </li>
              {!isMobile && (
                <li>
                  <a 
                    href="#" 
                    className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Sign in                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        id="sidebar-nav"
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="text-xl font-semibold text-white">Space Menu</span>
          <button 
            onClick={toggleSidebar}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <ul className="flex flex-col p-4 space-y-2">
          <li>
            <a 
              href="#" 
              className="block py-2 px-3 text-white hover:bg-gray-700 rounded"
              onClick={toggleSidebar}
            >
              Stellar Dashboard
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="block py-2 px-3 text-white hover:bg-gray-700 rounded"
              onClick={toggleSidebar}
            >
              Orbit Tracker
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="block py-2 px-3 text-white hover:bg-gray-700 rounded"
              onClick={toggleSidebar}
            >
              Cosmic Events
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="block py-2 px-3 text-white hover:bg-gray-700 rounded"
              onClick={toggleSidebar}
            >
              Nebula Gallery
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="block py-2 px-3 text-white hover:bg-gray-700 rounded"
              onClick={toggleSidebar}
            >
              Astronaut Log
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="block py-2 px-3 text-white hover:bg-gray-700 rounded"
              onClick={toggleSidebar}
            >
              Launch Schedule
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}