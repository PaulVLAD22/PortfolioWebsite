import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const Home = () => {
  const [isOpen,setIsOpen]=useState(false)

  return (
    <>
      <Sidebar/>
      <Navbar/>
    </>
  )
}

export default Home
