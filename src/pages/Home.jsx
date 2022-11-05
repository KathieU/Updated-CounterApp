import React from 'react';
import { Link } from "react-router-dom";
import ErrorTest from './ErrorTest';

const Home = () => {
  return (
    <div>
      <header>
        <h1>CounterApp</h1>
        
        <nav className='counter-nav'><Link to="/errortest" className='counter-links'>Test Error</Link></nav>
      </header>
      <div className='home-body'>
        <div className='home-content'>
          <h2>Select your choice of counter:</h2>
          <button ><Link to="/customhook" className='homepage-links'>Custom Counter</Link></button>
          <button ><Link to="/reducer" className='homepage-links'>useReducer Counter</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Home;