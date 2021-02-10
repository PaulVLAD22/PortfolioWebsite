import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const SigninPage = () => {

  const [isOpen,setIsOpen]=useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <div>
        <h1>SIGN IN</h1>
      </div>
    </>
  )
}

export default SigninPage