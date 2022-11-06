import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Counter App</title>
        <meta name="description" content="Use our counter application made with a custom react hook and a useReducer hook" />
        <link rel="canonical" href="/" />
      </Helmet>
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