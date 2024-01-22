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
                  <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border-2 border-gray-300 rounded-lg hover:bg-white hover:text-red-700 duration-300">
                      Contact Us
                  </a> 
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <div className='flex bg-white rounded-full p-14'>
                    <Image src={logo} alt="mockup"/>
                  </div>
                  
              </div>                
          </div>
        </section>
        <section className="bg-red-700">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="max-w-screen-md mb-8 lg:mb-16">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white ">Equipped with an array of resources and features.</h2>
                  <p className="text-white sm:text-xl">Here at Red Alert, we try to provide the most amount of preparation and readiness we can to help you and others to overcome the diverse natural disasters you could encounter.</p>
              </div>
              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                  
                  <div>
                      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                          <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                      </div>
                      <h3 className="mb-2 text-xl font-bold ">Education</h3>
                      <p className="text-white ">Learn about the varoius natural disasters through curated lessons and resources uploaded on the website.</p>
                  </div>
                  <div>
                      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                          <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                      </div>
                      <h3 className="mb-2 text-xl font-bold ">Responders Map</h3>
                      <p className="text-white ">Find responders for emergencies in your local area so you can be prepared for any kind of situation.</p>
                  </div>
                  <div>
                      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                          <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                      </div>
                      <h3 className="mb-2 text-xl font-bold ">Accessibility</h3>
                      <p className="text-white ">With our easy to use UI and navigation, find the natural disaster you want to know more about quicker .</p>
                  </div>
              </div>
          </div>
        </section>
        <div className='w-full bg-red-700 flex items-center justify-center py-20'>
          <a href="/about" className="text-white bg-red-700 border-white border-2 hover:bg-white hover:text-red-700 duration-300  font-medium rounded-3xl text-xl px-20 py-4 mr-2 mb-2 ">Explore -></a>
        </div>
        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-red-700 ">Learn more about us!</h2>
                  <p className="mb-6 font-light text-gray-700  md:text-lg">Explore details such as why we started as well as our goals.</p>
                  <a href="/about" className="text-red-700 bg-white border-red-700 border-2 hover:bg-red-700 hover:text-white duration-300  font-medium rounded-3xl text-l px-7 py-2.5 mr-2 mb-2 ">Go Now!</a>
              </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="py-2 px-4 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-red-700 ">Or ...</h2>
              </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-red-700 ">Contact Us!</h2>
                  <p className="mb-6 font-light text-gray-700  md:text-lg">If you have any questions, suggestions, or anything else that you want to ask us.</p>
                  <a href="/about" className="text-red-700 bg-white border-red-700 border-2 hover:bg-red-700 hover:text-white duration-300  font-medium rounded-3xl text-l px-7 py-2.5 mr-2 mb-2 ">Let's Go!</a>
              </div>
          </div>
        </section>
      </div>
  )
}
