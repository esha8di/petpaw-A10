import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='text-center flex flex-col justify-center items-center m-10 '>
                 
                  <h1 className='text-2xl font-bold my-3'>Oops, page not found!</h1>
                  <p className='text-gray-400 m-3'>The page you are looking for is not available.</p>
                  <Link to='/' className='btn text-white bg-green-900'>
  Go Back!
</Link>

                </div>
        
    );
};

export default Error;