import React, { useContext, useEffect, useState } from 'react';
import { Contextapi } from '../../Authprovider/Authprovider';
import { Link } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyService = () => {
    const { user } = useContext(Contextapi);
    const [services, setServices] = useState([]);

    useEffect(() => {
        if (!user?.email) return;
        fetch(`https://back-end-livid-delta.vercel.app/myservices?email=${user.email}`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.log(error));
    }, [user?.email]);

    const handledelete = (id) => {
        Swal.fire({
            title: "Do you want to delete?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Don't Delete`
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://back-end-livid-delta.vercel.app/delete/${id}`)
                    .then(res => {
                        if (res.data.acknowledged) {
                            const filterData = services.filter(service => service?._id !== id);
                            setServices(filterData);
                            Swal.fire("Deleted!", "", "success");
                        }
                    })
                    .catch(err => console.log(err));
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    return (
        <div className="w-[90%] mx-auto my-10 overflow-x-auto border">
            <table className="min-w-full  border border-gray-200 rounded-lg">
                <thead className="bg-black text-white">
                    <tr>
                        <th className="py-3 px-4 text-left">Name</th>
                        <th className="py-3 px-4 text-left">Category</th>
                        <th className="py-3 px-4 text-left">Email</th>
                        <th className="py-3 px-4 text-left">Price</th>
                        <th className="py-3 px-4 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map(service => (
                        <tr key={service?._id} className="border-b ">
                            <td className="py-2 px-4">{service?.name}</td>
                            <td className="py-2 px-4">{service?.category}</td>
                            <td className="py-2 px-4">{service?.email}</td>
                            <td className="py-2 px-4">{service?.price} BDT</td>
                            <td className="py-2 px-4 flex flex-col md:flex-row gap-2">
                                <Link to={`/myservices/${service?._id}`}>
                                    <button className="btn bg-green-800 text-white hover:bg-green-900">Edit</button>
                                </Link>
                                <button onClick={() => handledelete(service?._id)} className="btn bg-red-600 text-white hover:bg-red-700">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyService;
