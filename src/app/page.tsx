"use client"
import React from 'react'
import NavBar from './Components/Nav'
import Auther from './Components/Auther'
import Mega from './Components/Mega'
import Footer from './Components/Footer'

export default function Home() {
  return (
    <div className=' bg-white'>
      <NavBar></NavBar>
      <Mega></Mega>
      <Auther></Auther>
      <Footer></Footer>
    </div>
  )
}
