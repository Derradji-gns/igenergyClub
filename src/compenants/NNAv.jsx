'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import pic from "/public/graphics/igenergyy.png"

export default function Nav({toggleSidebar}) {

  return (
    <div className="bg-gray-900">
      <header className="relative bg-gray-900">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              
              {/* Logo and Title */}
              <div className="flex items-center space-x-3">
                <img
                  alt="Logo"
                  src={pic}
                  className="h-12 w-auto"
                />
                <span className="text-xl font-semibold font-[serif] text-white">IGENERGY</span>
              </div>

              {/* Desktop: Sign in / Create account */}
              <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <button
                type="button"
                onClick={toggleSidebar}
                className="lg:hidden ml-auto p-2 text-gray-400"
              >
                <span className="sr-only">Toggle menu</span>
  
              </button>
              </div>

              {/* Mobile: Hamburger button */}
              <button
                type="button"
                onClick={toggleSidebar}
                className="lg:hidden ml-auto p-2 text-gray-400"
              >
                <span className="sr-only">Toggle menu</span>
  
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu (Dropdown style) */}

      </header>
    </div>
  )
}