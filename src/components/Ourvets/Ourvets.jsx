import React from 'react';
const vets=[
  {
    "id": 1,
    "name": "Dr. Ayesha Rahman",
    "specialist": "Small Animal Veterinarian",
    "experience": "8+ Years Experience",
    "description": "Dr. Ayesha specializes in canine and feline internal medicine. She is passionate about preventive care and creating stress-free treatment plans for pets.",
    "image": "https://i.ibb.co.com/QxY8WGD/doctor-with-his-arms-crossed-white-background.jpg"
  },
  {
    "id": 2,
    "name": "Dr. Mehedi Hasan",
    "specialist": "Exotic & Wildlife Specialist",
    "experience": "6+ Years Experience",
    "description": "Dr. Mehedi is known for his expertise in treating birds, rabbits, and exotic pets. He focuses on nutrition-based recovery and gentle handling techniques.",
    "image": "https://i.ibb.co.com/gMmq000r/portrait-smiling-handsome-male-doctor-man.jpg"
  },
  {
    "id": 3,
    "name": "Dr. Farhana Siddiqua",
    "specialist": "Surgery & Dermatology Expert",
    "experience": "10+ Years Experience",
    "description": "Dr. Farhana handles complex surgeries and skin-related issues. She is dedicated to safe procedures and long-term healing plans for pets of all ages.",
    "image": "https://i.ibb.co.com/gMmq000r/portrait-smiling-handsome-male-doctor-man.jpg"
  }
]

const Ourvets = () => {
    return (
        <div className="w-[90%] mx-auto my-[100px] ">
      <div>
        <h2 className="text-3xl font-bold text-center text-green-900">
          Meet Our Vets
        </h2>
      </div>
      <div className=" grid grid-cols-2 md:grid md:grid-cols-3 gap-2 mt-10">
        {vets.map((tip) => (
            <>
               <div className="card bg-base-100 w-full shadow-sm">
            <figure>
              <img className=" justify-left w-full h-[200px] object-cover" src={tip?.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{tip?.name}</h2>
              <p>{tip?.specialist}</p>
              <p>{tip?.experience}</p>
            </div>
          </div>
            </>
       

        
        )
        )}
      </div>
    </div>
    );
};

export default Ourvets;