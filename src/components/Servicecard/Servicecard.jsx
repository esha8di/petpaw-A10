import React from "react";
import { Link } from "react-router";

const Servicecard = ({ service }) => {
  return (
    <div className="border rounded-lg shadow-sm  ">
     
      <figure>
        <img
          src={service?.image}
          alt={service?.name}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      </figure>

     
      <div className="p-3">
        
        <h2 className="text-lg font-semibold">{service?.name}</h2>

       
        <div className="mt-1 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Category:</span>{" "}
            {service?.category}
          </p>
          <p>
            <span className="font-semibold">Location:</span>{" "}
            {service?.location}
          </p>
        </div>

       
        <p className=" font-bold mt-2">
          Price: {service?.price} BDT
        </p>

      
        {service?.quantity && (
          <p className="text-sm text-gray-600">Stock: {service.quantity}</p>
        )}

       
        <div className="mt-3">
          <Link to={`/servicedetails/${service?._id}`}>
            <button className="w-full bg-black text-white py-2 rounded hover:bg-green-900 transition">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Servicecard;
