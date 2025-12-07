import React from "react";
import { Link } from "react-router";

const Wintercarepet = () => {
  

  const heroes = [
    {
      name: "Sarah Johnson",
      role: "Pet Care Volunteer",
           img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=60",

    },
    {
      name: "Michael Lee",
      role: "Adopter & Advocate",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=60",
    },
    {
      name: "Priya Singh",
      role: "Rescue Caregiver",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&auto=format&fit=crop&q=60",
    },
    {
      name: "David Kim",
      role: "Animal Shelter Volunteer",
      img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=200&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div className="w-[90%] mx-auto my-6 space-y-16">

     

     
      <section className=" rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 ">
          Why Adopt from PawMart?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Adopting a pet saves lives, reduces overcrowding in shelters, and gives
          loving animals a forever home. Every adoption is a chance to make a
          difference in a pet’s life!
        </p>
        
      </section>

       
      <section>
        <h2 className="text-3xl font-bold mb-8  text-center">
          Meet Our Pet Heroes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {heroes.map((hero, idx) => (
            <div
              key={idx}
              className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition text-center p-4"
            >
              <img
                src={hero.img}
                alt={hero.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{hero.name}</h3>
              <p className="text-gray-600">{hero.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Wintercarepet;
