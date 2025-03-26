'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState("default");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        if (window.innerWidth >= 768) {
          setIsSidebarOpen(false);
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const toggleSidebar = (contentType = "default") => {
    setSidebarContent(contentType);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Sidebar content based on type
  const sidebarItems = {
    default: [
      "Stellar Dashboard",
      "Orbit Tracker",
      "Cosmic Events",
      "Nebula Gallery",
      "Astronaut Log",
      "Launch Schedule"
    ],
    home: [
      "Welcome Page",
      "Quick Start",
      "Featured Missions",
      "Latest Discoveries",
      "Community Hub",
      "Support Center"
    ]
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-900 border-gray-700 dark:bg-black dark:border-gray-800 fixed w-full top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link 
            href="/" 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => toggleSidebar("home")}
          >
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="CosmoQuest Logo"
              width={32}
              height={32}
              priority
            />
            <span className="self-center text-2xl font-semibold text-white">
              CosmoQuest
            </span>
          </Link>

          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4 border border-gray-800 rounded-lg bg-gray-800 md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900 dark:bg-black">
              <li>
                <a href="#" className="block py-2 px-3 text-white hover:text-blue-400">
                  Launch Pad
                </a>
              </li>

              {!isMobile && (
                <li className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center py-2 px-3 text-gray-200 hover:text-blue-400"
                  >
                    Missions
                    <svg className="w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1l4 4 4-4"
                      />
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-44 bg-gray-800 rounded-lg shadow-lg">
                      <ul className="py-2 text-sm text-gray-300">
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                            Mars Explorer
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                            Lunar Base
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                            Deep Space
                          </a>
                        </li>
                      </ul>
                      <div className="py-1 border-t border-gray-700">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                          Mission Control
                        </a>
                      </div>
                    </div>
                  )}
                </li>
              )}

              <li>
                <a href="#" className="block py-2 px-3 text-gray-200 hover:text-blue-400">
                  Galaxies
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-200 hover:text-blue-400">
                  Star Systems
                </a>
              </li>

              {!isMobile && (
                <li>
                  <Link href="/signin" className="block py-2 px-3 text-gray-200 hover:text-blue-400">
                    Sign in
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {isMobile && (
            <button onClick={() => toggleSidebar("default")} className="text-gray-300 hover:text-white focus:outline-none">
              ☰
            </button>
          )}
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="text-xl font-semibold text-white">
            {sidebarContent === "home" ? "Home Menu" : "Space Menu"}
          </span>
          <button onClick={() => toggleSidebar("default")} className="text-gray-300 hover:text-white focus:outline-none">
            ✖
          </button>
        </div>

        <ul className="flex flex-col p-4 space-y-2">
          {sidebarItems[sidebarContent].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:bg-gray-700 rounded"
                onClick={() => toggleSidebar("default")}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => toggleSidebar("default")} />}
    </>
  );
}