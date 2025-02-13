import React from 'react'

const About = () => {
  return (
     <section id='About'>
             <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
                  <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center'> 
                      <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>Hi I'm Waqas Rawn
                        <br className='hidden lg:inline-block'/>i love to build amazing apps
                      </h1>
                        <p className='mb-8 leading-relaxed'>
                          I am a web developer. I love to build amazing apps. I am a self taught programmer and have been learning and building projects for over 5 years. I have a passion for building web applications that are fast, scalable and user friendly. I am also a big fan of open source software and have contributed to a number of projects on github.
                        </p>
                        <div className='flex justify-center'>
                         <a href='#contact' className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg'>Hire me</a>
                        <a href='#projects' className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>Projects</a>
                        </div>
                  </div>
                  <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                      <img className='object-cover object-center rounded' alt='hero' src='./imgae.jpg'/>
                    
                  </div>
             </div>
     </section>
  )
}
export default About
