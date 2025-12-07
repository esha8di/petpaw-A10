import React from 'react';
import { Link } from 'react-router';

const Contact = () => {
    return (
         <div className='text-center flex flex-col justify-center items-center m-10 '>
                 
                  <h1 className='text-2xl font-bold my-3'>Contact:0928393884</h1>
                  <p className='text-gray-400 m-3'>No illegal work is allowed</p>
                  <Link to='/' className='btn text-white bg-green-900'>
  Go Back!
</Link>

                </div>
    );
};

export default Contact;