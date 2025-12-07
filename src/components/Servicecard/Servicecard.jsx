import React from 'react';
import { Link } from 'react-router';

const Servicecard = ({service}) => {
  console.log('service',service)
    return (
       
            <div className="card bg-base-100 w-full shadow-sm">
  <figure>
    <img
      src={service?.image }
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">service_name : {service?.name}</h2>
   <div className='flex justify-between  items-center'>
    <p>Category :{service?.category}</p>
    <p>Rating :{service?.rating}</p>
   </div>
    <div className="card-actions justify-end">
     <Link to={`/servicedetails/${service._id}`}>
     <button 
      className="btn bg-green-900 text-white">
        View Details</button>
     </Link>
      
    </div>
  </div>
</div>
       
    );
};

export default Servicecard;