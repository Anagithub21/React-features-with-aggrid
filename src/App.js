import './App.css';
import './index.css';
import Navbar from './components/Layout/Navbar';
import Dropdown from './components/Layout/Dropdown';
import React, { useState, useEffect } from 'react';
import Footer from './components/Layout/Footer';
// import Hero from './components/Hero';
import Home from './components/Pages/Home';
import { Route, Switch } from 'react-router-dom';
import About from './components/Pages/about';
import Features from './components/Pages/features';
import Pricing from './components/Pages/pricing';
import Contact from './components/Pages/Contact';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggel = () => {
    setIsOpen(!isOpen)
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })
  return (
    <>
      <Navbar toggel={toggel} />
      <Dropdown isOpen={isOpen} toggel={toggel} />
      <div className="max-w-2xl mx-auto">
        <div className="mt-4">
         <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/features' component={Features}></Route>
          <Route exact path='/pricing' component={Pricing}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/signup' component={Signup}></Route>

         </Switch>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
