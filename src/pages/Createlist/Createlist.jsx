import React, { useContext } from 'react';
import { Contextapi } from '../../Authprovider/Authprovider';
import axios from 'axios';
import Swal from 'sweetalert2';

const Createlist = () => {
    const {user}=useContext(Contextapi);
    const handlesubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image.value;
        const date = form.date.value;
        const email = form.email.value;
        const quantity = parseInt(form.quantity.value);

        const formdata=
        {
            name,
            category,
            price,
            location,
            description,
            image,
            date,
           email,
            quantity
        }

        console.log(formdata);

        axios.post('https://back-end-livid-delta.vercel.app/createlist',formdata)
        .then(res =>{
            console.log('response from backend',res);

            if(res.data.acknowledged){
                 Swal.fire({
          title: "Service is created successfully!",
          icon: "success",
          draggable: true,
        });



            }

            else{
                 Swal.fire({
          title: "Service is created successfully!",
          icon: "success",
          draggable: true,
        });
            }
           
        })
        e.target.reset()

    };

    return (
        <form
            onSubmit={handlesubmit}
            className="max-w-xl m-10 bg-green-50 mx-auto p-5 space-y-4 border rounded-lg shadow"
        >
            {/* 1. Product or Pet Name */}
            <div>
                <label className="block font-semibold">Product / Pet Name</label>
                <input
                    name="name"
                    type="text"
                    placeholder="Enter name"
                    className="w-full border p-2 rounded"
                />
            </div>

            {/* 2. Category */}
            <div>
                <label className="block font-semibold">Category</label>
                <select name="category" className="w-full border p-2 rounded">
                    <option value="">Select Category</option>
                    <option value="pets">Pets</option>
                    <option value="food">Food</option>
                    <option value="accessories">Accessories</option>
                    <option value="care">Care Products</option>
                </select>
            </div>

            {/* 3. Price */}
            <div>
                <label className="block font-semibold">Price</label>
                <input
                    name="price"
                    type="number"
                    placeholder="0 if pet is selected"
                    className="w-full border p-2 rounded"
                />
            </div>

            {/* 4. Location */}
            <div>
                <label className="block font-semibold">Location</label>
                <input
                    name="location"
                    type="text"
                    placeholder="Enter location"
                    className="w-full border p-2 rounded"
                />
            </div>

            {/* 5. Description */}
            <div>
                <label className="block font-semibold">Description</label>
                <textarea
                    name="description"
                    placeholder="Write description"
                    className="w-full border p-2 rounded"
                    rows="3"
                ></textarea>
            </div>

            {/* 6. Image URL */}
            <div>
                <label className="block font-semibold">Image URL</label>
                <input
                    name="image"
                    type="text"
                    placeholder="Paste image link"
                    className="w-full border p-2 rounded"
                />
            </div>

            {/* 7. Date */}
            <div>
                <label className="block font-semibold">Pick-up Date</label>
                <input name="date" type="date" className="w-full border p-2 rounded" />
            </div>

            {/* 8. Email */}
            <div>
                <label className="block font-semibold">Email</label>
                <input
                value={user?.email || ""}
                    name="email"
                    type="email"
                    readOnly
                    placeholder="Current user email"
                    className="w-full border p-2 rounded"
                />
            </div>

            {/* 9. Quantity */}
            <div>
                <label className="block font-semibold">Quantity</label>
                <input
                    name="quantity"
                    type="number"
                    placeholder="Enter quantity"
                    className="w-full border p-2 rounded"
                />
            </div>

            <button
                type="submit"
                className="w-full btn bg-blue-600 text-white p-2 rounded mt-3"
            >
                Submit
            </button>
        </form>
    );
};

export default Createlist;
