'use client'


import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import pic from "/public/graphics/igenergyy.png"

export default function Navside() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white shadow-md transform transition-transform duration-300 ease-in-out
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
      >
        <div className="h-full overflow-y-auto p-4 bg-white border-r">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a1 1 0 011 1v14a1 1 0 11-2 0V3a1 1 0 011-1z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            {/* Add more sidebar items here */}
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-yellow-500 h-screen">
        <header className="bg-gray-900">
          <nav
            aria-label="Top"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center justify-between">
                {/* Logo and Title */}
                <div className="flex items-center space-x-3">
                  <img alt="Logo" src={pic} className="h-12 w-auto" />
                  <span className="text-xl font-semibold font-[serif] text-white">
                    IGENERGY
                  </span>
                </div>

                {/* Hamburger button */}
                <button
                  type="button"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden ml-auto p-2 text-gray-400"
                >
                  <span className="sr-only">Toggle menu</span>
                  {sidebarOpen ? (
                    <XMarkIcon className="h-6 w-6 text-white" />
                  ) : (
                    <Bars3Icon className="h-6 w-6 text-white" />
                  )}
                </button>
              </div>
            </div>
          </nav>
          
        </header>

        {/* Your main content can go here */}
      </div>
    </div>
  );
}