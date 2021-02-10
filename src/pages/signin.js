import React,{useState} from 'react'
import Navbar from '../components/Navbar'


const SigninPage = () => {

  const [isOpen,setIsOpen]=useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      
      <div>
        <h1>SIGN IN</h1>
      </div>
    </>
  )
}

export default SigninPage