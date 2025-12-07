import React, { useEffect, useState } from 'react';
import Servicecard from '../Servicecard/Servicecard';
import { Link } from 'react-router';


const Popularsection = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://back-end-livid-delta.vercel.app/createlist')
        .then(res =>res.json())
        .then(data=>setServices(data))
        .catch(error =>console.log(error))

    },[])

    const categories = [
  {
    name: "pets",
    label: "Pets (Adoption)",
    img: "https://images.unsplash.com/photo-1554830072-52d78d0d4c18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0JTIwYWRvcHRpb258ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "food",
    label: "Pet Food",
    img: "https://images.unsplash.com/photo-1571873735645-1ae72b963024?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "accessories",
    label: "Accessories",
    img: "https://images.unsplash.com/photo-1605092116196-404f5b8caa15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0JTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "care",
    label: "Pet Care Products",
    img: "https://i.ibb.chttps://images.unsplash.com/photo-1625321150203-cea4bee44b54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0JTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3Do.com/BKg9rg4/pet-care.jpg"
  }
];

    
    console.log('popularid',services);
    return (
        <>
         <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Shop by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            to={`/category-filtered-product/${cat.name}`}
            key={cat.name}
            className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={cat.img}
                alt={cat.label}
                className="w-full h-40 object-cover "
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center ">
                <p className="text-white text-lg font-semibold">
                  {cat.label}
                </p>
              </div>
            </div>

            <p className="text-center py-3 font-medium">{cat.label}</p>
          </Link>
        ))}
      </div>
    </div>
           

        </>
    );
};

export default Popularsection;