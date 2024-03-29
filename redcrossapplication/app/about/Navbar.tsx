import React from 'react'
import logo from "../assets/redAlertLogo.png"
import Image from 'next/image'
export default function Navbar() {
  return (
      <>
        <header>
          <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <a href="/" className="flex items-center">
                      <Image src={logo} className="mr-3 h-6 w-auto sm:h-9" alt="Red Cross Logo" />
                      <span className="self-center text-xl font-semibold whitespace-nowrap text-red-600 hover:text-red-500 duration-300">Red Alert</span>
                  </a>
                  <div className="flex items-center lg:order-2 mr-8">
                      <a href="/info" className="text-red-600 bg-white font-medium rounded-3xl text-s px-4 lg:px-5 py-2 lg:py-2.5 mr-2 border-red-700 border-2 hover:bg-red-700 hover:text-white duration-300">Get started</a>
                      <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-red-700 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                          <span className="sr-only">Open main menu</span>
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </button>
                  </div>
                  <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                          <li>
                              <a href="/" className="block py-2 pr-4 pl-3 text-red-600 hover:text-red-500 duration-300rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 " aria-current="page">Home</a>
                          </li>
                          <li>
                              <a href="/about" className="block py-2 pr-4 pl-3 text-red-600 border-b hover:text-red-500 duration-300 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">About Us</a>
                          </li>
                          <li>
                              <a href="/info" className="block py-2 pr-4 pl-3 text-red-600 border-b hover:text-red-500 duration-300 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">Resources</a>
                          </li>
                          <li>
                              <a href="/contact" className="block py-2 pr-4 pl-3 text-red-600 border-b hover:text-red-500 duration-300 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
        </header>
      </>
  )
}
