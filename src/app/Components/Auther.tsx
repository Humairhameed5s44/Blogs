import React from 'react'
import Image from 'next/image'
import face from "../../../public/Images/face.jpg"
export default function Auther() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className=' flex items-center animate-pulse'>
        <Image src={face} width={64} height={64} alt="Author" className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500' />
        <div>
          <h3 className=' text-xl font-bold text-blue-700'>M Asad Hameed</h3>
          <p className='text-slate-500'>
            {""}
            9 Class Student | Web Dev 
            {""}
          </p>
        </div>
      </div>
      <p className='mt-4 text-black leading-relaxed'>
        Hi, I’m M. Asad Hameed, a class 9 student with a passion for web development.
         Despite my young age, I’ve already started diving into the exciting world of 
         coding and creating websites. Let me take you through my journey so far and 
        share why I believe web development is such an incredible skill to learn.
        </p>
      <div className=' mt-4 flex space-x-3'>
        <a href='#' className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
          Twitter
        </a>
        <a href='#' className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
          Linkdin
        </a>
        <a href='#' className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
          Github
        </a>
      </div>
    </div>
  )
}
