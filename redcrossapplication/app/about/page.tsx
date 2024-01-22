import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import aboutIcon from './iconAbout.png'
import questionIcon from './questionIcon.png'
import panavPFP from './panavPFP.jpg'
import rohanPFP from './rohanPFP.jpg'
import eddiePFP from './eddiePFP.jpg'
export default function page() {
  return (
    <div className='w-screen h-screen bg-red-700 overflow-x-hidden'>
        <Navbar />
        <section className="bg-red-700">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <a href="/info" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full " role="alert">
                    <span className="text-s bg-primary-600 rounded-full text-red-700 px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium text-red-700">Resources are out! See what's new</span> 
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white mt-8">Get to know about Red Alert</h1>
                <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">Here at red alert we prioritize awareness and education about natural disaster to keep as many civilians as safe as possible.</p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="/info" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white border-2 border-white rounded-lg bg-primary-700 hover:bg-white hover:text-red-700 duration-300">
                        Access Resources
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a> 
                </div> 
            </div>
        </section>
        <section class="bg-red-700">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <Image className="rounded-full" src={aboutIcon} alt="dashboard image"/>
                <div class="mt-4 md:mt-0">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">Why start Red Alert?</h2>
                    <p class="mb-6 font-light text-white text-xl">Recently there seems to be a lack of awareness and preparation for natural disasters even though 60,000 people die from them annually. This prompted Red Alert's team to create a useful website to help educate others about natural disasters and how to stay ready for them as well as spread awareness about such a topic.</p>
                </div>
            </div>
        </section>
        <section class="bg-red-700">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div class="mt-4 md:mt-0">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">Who are we?</h2>
                    <p class="mb-6 font-light text-white text-xl">Red Alert's team is a group of high schoolers keen to make a change. By employing and making the best use of our technical skillset, we have deployed this website in hopes of it spreading among communities so awareness about natural disasters can finally be raised and put as a priority.</p>
                </div>
                <Image className="rounded-full" src={questionIcon} alt="dashboard image"/>
            </div>
        </section>
        <section class="bg-red-700">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white ">Our team</h2>
                    <p class="font-light text-white sm:text-xl ">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
                </div> 
                <div class="grid gap-8 lg:gap-16 sm:grid-cols-1 md:grid-cols-3">
                    <div class="text-center text-gray-500 dark:text-gray-400">
                        <Image class="mx-auto mb-4 w-auto h-auto rounded-full border-4 border-white" src={rohanPFP} alt="Rohan Sarakinti"/>
                        <h3 class="mb-1 text-2xl font-bold tracking-tight text-white">
                            <a href="#">Rohan Sarakinti</a>
                        </h3>
                        <p className="text-white">Front End Developer</p>
                    </div>
                    <div class="text-center text-gray-500 dark:text-gray-400">
                        <Image class="mx-auto mb-4 w-auto h-auto rounded-full border-4 border-white" src={panavPFP} alt="Panav Mhatre"/>
                        <h3 class="mb-1 text-2xl font-bold tracking-tight text-white">
                            <a href="#">Panav Mhatre</a>
                        </h3>
                        <p className="text-white">Front End Developer</p>
                    </div>
                    <div class="text-center text-gray-500 dark:text-gray-400">
                        <Image class="mx-auto mb-4 w-auto h-auto rounded-full border-4 border-white" src={eddiePFP} alt="Eddie Zhou"/>
                        <h3 class="mb-1 text-2xl font-bold tracking-tight text-white">
                            <a href="#">Eddie Zhou</a>
                        </h3>
                        <p className="text-white">Back End Developer</p>
                    </div>
                </div>  
            </div>
            <div className="bg-red-700 flex justify-center items-center pb-20">
                <a href="/contact" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white border-2 border-white rounded-lg bg-primary-700 hover:bg-white hover:text-red-700 duration-300">
                        Want to Apply!
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a> 
            </div>
        </section>
      </div>
  )
}
