import React from "react";
import { useEffect, useState } from "react";
import Servicecard from "../../components/Servicecard/Servicecard";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Swal from "sweetalert2";

const Services = () => {
  const [services, setServices] = useState([]);

  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch(`https://back-end-livid-delta.vercel.app/createlist?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log("success creation", data);
        
      })
      .catch((error) => console.log(error));
  }, [category]);

  console.log("category", category);
  console.log("services", services);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: { duration: 1 },
      }}
      className="w-[90%] mx-auto my-6 "
    >
      <title>Services</title>
      <div>
        <h2 className="text-3xl font-bold text-center ">
          Our Services
        </h2>

        <div>
          <label className="block font-semibold">Category</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            className="w-full border p-2 rounded"
          >
            <option value="">All</option>
            <option value="pets">Pets</option>
            <option value="food">Food</option>
            <option value="accessories">Accessories</option>
            <option value="care">Care Products</option>
          </select>
        </div>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-2 mt-10">
        {services.map((service) => (
          <Servicecard key={service.serviceId} service={service}></Servicecard>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
