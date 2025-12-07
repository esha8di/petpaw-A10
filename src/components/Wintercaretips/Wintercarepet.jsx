import React from "react";

const Wintercarepet = () => {
  const tips = [
    {
      id: 1,
      title: "Keep Your Pet Warm Indoors",
      description:
        "As temperatures drop, ensure your pet stays cozy indoors. Provide soft blankets, warm bedding, and avoid exposing them to cold floors for long periods.",
      image: "https://cdn-icons-png.flaticon.com/512/4151/4151050.png",
    },
    {
      id: 2,
      title: "Moisturize Paws Regularly",
      description:
        "Cold weather can cause cracked paws. Apply pet-safe balms to keep them moisturized and prevent irritation from snow, salt, or ice.",
      image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    },
    {
      id: 3,
      title: "Limit Outdoor Time",
      description:
        "Shorter walks during extreme cold reduce the risk of hypothermia and frostbite. Stay alert to your pet’s comfort and body language.",
      image: "https://cdn-icons-png.flaticon.com/512/892/892201.png",
    },
    {
      id: 4,
      title: "Hydrate & Maintain Nutrition",
      description:
        "Pets lose moisture faster in winter. Keep water bowls full and provide a balanced diet to support warmth and immunity.",
      image: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png",
    },
  ];

  console.log(tips);
  return (
    <div className="w-[90%] mx-auto my-6 ">
      <div>
        <h2 className="text-3xl font-bold text-center text-green-900">
          Popular Winter Care Service
        </h2>
      </div>
      <div className="  grid grid-cols-2 md:grid md:grid-cols-4 gap-2 mt-10">
        {tips.map((tip) => (
            <>
               <div className=" border  card bg-base-100 w-full shadow-sm">
            <figure>
              <img className="h-[50px] mt-4 justify-left" src={tip?.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{tip?.title}</h2>
              <p>{tip?.description}</p>
            </div>
          </div>
            </>
       

        
        )
        )}
      </div>
    </div>
  );
};

export default Wintercarepet;
