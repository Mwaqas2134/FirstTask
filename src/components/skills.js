import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid'
import React from 'react'
import { skills } from '../data'
const Skills = () => {
  return (
    <section id='skills'>
          <div className='container px-5 py-10 mx-auto'>
                <div className='text-center mb-20'>
                        <ChipIcon className='w-10 inline-block mb-4'></ChipIcon>
                        <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>My Skills</h1>
                        <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>I have worked on many projects. You can see some of them below. I am a self taught programmer and have been learning and building projects for over 5 years.</p>
                </div>
                <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 items-center'>
                    {skills.map(skill => (
                      <div key={skill} className='p-2 sm:w-4/5 w-full'>
                        <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
                          <BadgeCheckIcon className='text-orange-400 w-6 h-6 flex-shrink-0 mr-4'></BadgeCheckIcon>
                          <span className='title-font font-medium text-white'>{skill}</span>
                          </div>
                        </div>
                    ))}
                </div>
          </div>
    </section>
  )
}
export default Skills
