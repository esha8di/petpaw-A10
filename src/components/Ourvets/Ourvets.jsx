import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';



const Ourvets = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    
    fetch("https://back-end-livid-delta.vercel.app/createlist?limit=6")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
        Latest Listings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.slice(0,6).map((service) => (
          <div
            key={service._id}
            className="border rounded overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{service.name}</h3>
              <p className="text-sm text-gray-600">{service.category}</p>
              <p className="text-sm text-gray-600">
                {service.price ? `$${service.price}` : "Free for Adoption"}
              </p>
              <p className="text-sm text-gray-600">{service.location}</p>
              <Link
                to={`/servicedetails/${service._id}`}
                className="mt-2 inline-block text-white bg-green-700 px-3 py-1 rounded hover:bg-green-800"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Ourvets;