import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import logo from "../assets/redAlertLogo.png"
export default function page() {
  return (
      <div className='w-screen h-screen bg-red-700'>
        <Navbar />
        <section className="bg-red-700 ">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">Your Beacon in Natural Disasters.</h1>
                  <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl ">Stay informed, stay safe—our Red Cross Alert website is your trusted companion in times of natural disasters, delivering updates and crucial information to empower preparedness and resilience.</p>
                  <a href="/info" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-white hover:text-red-700 duration-300 focus:ring-4 focus:ring-primary-300 border-2 ">
                      Get started
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border-2 border-gray-300 rounded-lg hover:bg-white hover:text-red-700 duration-300">
                      Contact Us
                  </a> 
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <div className='flex bg-white rounded-full'>
                    <Image src={logo} alt="mockup"/>
                  </div>
                  
              </div>                
          </div>
      </section>
      </div>
  )
}
