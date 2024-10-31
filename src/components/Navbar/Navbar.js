import React from 'react'
const Navbar = () => {
  return (
       <header className='bg-gray-800 md:sticky top-0 z-10'>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="#About" className="ml-3 text-xl text-orange-400">Waqas Rawn</a>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center ">
            <a href="#projects" className="mr-5 text-white hover:text-orange-400">Projects</a>
            <a href="#skills" className="mr-5 text-white hover:text-orange-400">Skills</a>
            <a href="#About" className="mr-5 text-white hover:text-orange-400">About</a>
            <a href="#testimonials" className="mr-5 text-white hover:text-orange-400">Testimonials</a>
            <a href="#contact" className="mr-5 text-white hover:text-orange-400">Contact us</a>
          </nav>
          <a href="#contact">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:text-orange-400 rounded text-base font-bold mt-4 md:mt-0">Hire me
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
          </div>
       </header>
  )
}
export default Navbar
