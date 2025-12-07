import React, { useContext, useEffect, useState } from 'react';
import { Contextapi } from '../../Authprovider/Authprovider';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

const Edit = () => {
    const {user}=useContext(Contextapi);
    const {id}=useParams();
    const [service,setService]=useState([]);
    const nevigate= useNavigate();

    const [category,setCategory]=useState(user?.category);

                useEffect(()=>{
                    fetch(`https://back-end-livid-delta.vercel.app/createlist/${id}`)
                    .then(res =>res.json())
                    .then(data=>
                    {
                          setService(data);
                          setCategory(data.category)

                    })
                      
                    .catch(error =>console.log(error))
            
                },[id])

                console.log('editservice',service)
    

    const handleedit=(e)=>{
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
        const quantity = form.quantity.value;

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
            quantity,
            createdAt:service?.createdAt
        }

        axios.put(`https://back-end-livid-delta.vercel.app/edit/${id}`,formdata)
        .then(res =>{
            console.log('response',res.data);
            nevigate('/myservices')
        })
        .catch(error=>{
            console.log(error)
        })

    }

    return (
         <form
            onSubmit={handleedit}
            className="max-w-xl m-10 bg-green-50 mx-auto p-5 space-y-4 border rounded-lg shadow"
        >
            {/* 1. Product or Pet Name */}
            <div>
                <label className="block font-semibold">Product / Pet Name</label>
                <input
                    name="name"
                    defaultValue={service?.name}
                    type="text"
                    placeholder="Enter name"
                    className="w-full border p-2 rounded"
                />
            </div>

            {/* 2. Category */}
            <div>
                <label className="block font-semibold">Category</label>
                <select
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                 name="category" className="w-full border p-2 rounded">
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
                    defaultValue={service?.price}
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
                    defaultValue={service?.location}
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
                    defaultValue={service?.description}
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
                    defaultValue={service?.image}
                    name="image"
                    type="text"
                    placeholder="Paste image link"
                    className="w-full border p-2 rounded"
                />
            </div>

            {/* 7. Date */}
            <div>
                <label className="block font-semibold">Pick-up Date</label>
                <input
                defaultValue={service?.date}
                 name="date" type="date" className="w-full border p-2 rounded" />
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
                    defaultValue={service?.quantity}
                    name="quantity"
                    type="number"
                    placeholder="Enter quantity"
                    className="w-full border p-2 rounded"
                />
            </div>

            <button
                type="submit"
                className="w-full btn bg-black text-white p-2 rounded mt-3"
            >
                Update
            </button>
        </form>
    );
};

export default Edit;