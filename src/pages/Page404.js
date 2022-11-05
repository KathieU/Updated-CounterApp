import React from 'react';
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className='error-page'>
      <h1>Oops!</h1>
      <h2>404 - PAGE NOT FOUND</h2>
      <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
      
        <Link to="/" className='error-link'>BACK TO HOME</Link>
      
    </div>
  );
}

export default Page404;