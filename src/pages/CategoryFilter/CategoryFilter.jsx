import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Servicecard from '../../components/Servicecard/Servicecard';

const CategoryFilter = () => {
    const { categoryName } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://back-end-livid-delta.vercel.app/createlist?category=${categoryName}`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, [categoryName]);
    return (
        <div className="w-[90%] mx-auto my-6">
      <h2 className="text-3xl font-bold text-cente mb-6">
        {categoryName.toUpperCase() } SERVICES
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <Servicecard key={service.serviceId} service={service} />
        ))}
      </div>
    </div>
    );
};

export default CategoryFilter;