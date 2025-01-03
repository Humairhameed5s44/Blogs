"use client"
import Link from 'next/link'
import React,{useState , useEffect} from 'react'
export default function NavBar() {
const [currentDateTime , setCurrentDateTime] = useState(``)
useEffect(() => {
  const UpdateDateTime = () => {
      const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          weekday : 'long',
          year: 'numeric',
          month: 'long',
          day: '2-digit',
          hour:'2-digit',
          minute:'2-digit',
          second:'2-digit',
          hour12:false
      };
    setCurrentDateTime(
      now.toLocaleDateString(`en-US`, options ) +
      ""+                                      
      now.toLocaleDateString(`en-US` , { hour12:false})
    );
  };
  UpdateDateTime();
const InterValid = setInterval(UpdateDateTime,1000)
return() => clearInterval(InterValid)


},[])

  return (
      <div className='text-gray-400 body-font shadow-lg'>
        <div className=' container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center'>
          <div className=' flex-1 text-black'>
            <span>{currentDateTime}</span>
          </div>
          <nav className=' md:ml-auto flex flex-wrap items-center text-black justify-center'>
            <Link href={"http://localhost:3000/"} className='mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105'>{""}Home{""}</Link>
            <Link href={"http://localhost:3000/About"} className='mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105'>{""}About{""}</Link>
            <Link href={"http://localhost:3000/Blogs"} className='mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105'>{""}Blogs{""}</Link>
            <Link href={"http://localhost:3000/Contact"} className='mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105'>{""}Contact{""}</Link>
          </nav>
        </div>
      </div>
  )
}
