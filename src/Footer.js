import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer py-10 bg-gray-800 text-gray-100 ">
           <div className="flex items-center justify-center my-4">
          <a href="https://github.com/Mwaqas2134" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-4xl hover:text-gray-300" />
          </a>
        </div>
      <div className="container mx-auto px-4">
        
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <a className="hover:underline" href="#">Branding</a>
              </li>
              <li className="mb-2">
                <a className="hover:underline" href="#">Design</a>
              </li>
              <li className="mb-2">
                <a className="hover:underline" href="#">Marketing</a>
              </li>
              <li className="mb-2">
                <a className="hover:underline" href="#">Advertisement</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h2 className="text-2xl font-bold mb-4">Company</h2>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <a className="hover:underline" href="#">About us</a>
              </li>
              <li className="mb-2">
                <a className="hover:underline" href="#">Contact</a>
              </li>
              <li className="mb-2">
                <a className="hover:underline" href="#">Jobs</a>
              </li>
              <li className="mb-2">
                <a className="hover:underline" href="#">Press kit</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h2 className="text-2xl font-bold mb-4">Legal</h2>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <a className="hover:underline" href="#">Terms of use</a>
              </li>
              <li className="mb-2">
                <a className="hover:underline" href="#">Privacy policy</a>
              </li>
              <li className="mb-2">
                <a className="hover:underline" href="#">Cookie policy</a>
              </li>
            </ul>
          </div>
        </div>
       
      </div>
    </footer>
  )
}

export default Footer

