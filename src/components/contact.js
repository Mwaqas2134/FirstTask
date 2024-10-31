import { CogIcon } from '@heroicons/react/solid'
import React from 'react'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully');
     
  }

  const handleReset = (e) => {
    e.preventDefault();
 
    alert('Form reset successfully');

  }
     
  return (
    <section id='contact' className='relative'>
      <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
       
         <div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
            <iframe width="100%" height="100%" title="map" className="absolute inset-0" frameBorder="0" marginHeight="0" marginWidth="0" style={{filter:"opacity(0.7)"}} src="https://www.google.com/maps/embed/v1/place?q=sargodha&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
            </iframe>
            <div className='bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md'>
               <div className='lg:w-1/2 px-5'>
               <h2 className='title-font font-semibold text-white'>Address</h2>
                  <p className='leading-relaxed'>Sargodha pakistan</p>
               </div>
               <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
               <h2 className='title-font font-semibold text-white'>Email</h2>
                  <a className='text-orange-400 leading-relaxed'>waqas123@gmail.com</a>
                  <h2 className='title-font font-semibold text-white mt-4'>Phone</h2>
                  <p className='leading-relaxed'>03462104990</p>
               </div>
            </div>
         </div>
         <form
          netlify
          data-netlify="true"
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
               Hire Me
            </h2>
            <p className="leading-relaxed mb-5">
               I am available for hire. You can send me an email or a message on LinkedIn.
            </p>
            <div className="relative mb-4">
               <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                  Name
               </label>
               <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
               />
            </div>
            <div className="relative mb-4">
               <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                  Email
               </label>
               <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
               />
            </div>
            <div className="relative mb-4">
               <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                  Message
               </label>
               <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <button onClick={handleSubmit} type="submit" className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
               Submit
            </button><br></br>
            <CogIcon className='w-6 h-6 text-orange-400 absolute top-0 right-0 mt-4 mr-4 cursor-pointer' onClick={handleReset}/>
            <button onClick={handleReset} type="reset" className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
               Reset
            </button>
         </form>
     </div>
    </section>
  )
}

export default Contact
