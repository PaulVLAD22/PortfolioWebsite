import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Sidebar from './components/SideBar';
import Home from './pages';
import SigninPage from './pages/signin'
import Footer from './components/Footer';

function App() {
  const [isOpen,setIsOpen]=useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/signin" component={SigninPage} exact></Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
