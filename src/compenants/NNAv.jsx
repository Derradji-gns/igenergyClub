'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import pic from "/public/graphics/igenergyy.png"

export default function Example() {
  const [menuOpen, setMenuOpen] = useState(false)

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
                <span className="text-xl font-semibold text-white">Igenergy</span>
              </div>

              {/* Desktop: Sign in / Create account */}
              <div className="hidden lg:flex lg:items-center lg:space-x-6">
                <a href="#" className="text-sm font-medium text-white hover:text-gray-800">
                  Sign in
                </a>
                <span className="h-6 w-px bg-gray-200" />
                <a href="#" className="text-sm font-medium text-white hover:text-gray-800">
                  Create account
                </a>
              </div>

              {/* Mobile: Hamburger button */}
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden ml-auto p-2 text-gray-400"
              >
                <span className="sr-only">Toggle menu</span>
                {menuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu (Dropdown style) */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md border-t border-gray-200">
            <div className="flex flex-col space-y-2 p-4">
              <a href="#" className="text-base font-medium text-gray-700 hover:text-gray-900">
                Sign in
              </a>
              <a href="#" className="text-base font-medium text-gray-700 hover:text-gray-900">
                Create account
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
