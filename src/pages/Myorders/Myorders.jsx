import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Myorders = () => {
    const [myorders, setMyorders] = useState([]);

    useEffect(() => {
        axios.get('https://back-end-livid-delta.vercel.app/orders')
            .then(res => setMyorders(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="w-[95%] md:w-[90%] mx-auto my-10 overflow-x-auto">
            <h2 className="text-2xl md:text-3xl font-bold  mb-6 text-center">My Orders</h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-black text-white">
                    <tr>
                        <th className="py-3 px-4 text-left">Product Name</th>
                        <th className="py-3 px-4 text-left">Buyer Name</th>
                        <th className="py-3 px-4 text-left">Price</th>
                        <th className="py-3 px-4 text-left">Quantity</th>
                        <th className="py-3 px-4 text-left">Address</th>
                        <th className="py-3 px-4 text-left">Phone</th>
                        <th className="py-3 px-4 text-left">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {myorders.map(order => (
                        <tr key={order._id} className="border-b hover:bg-gray-50">
                            <td className="py-2 px-4">{order?.productname}</td>
                            <td className="py-2 px-4">{order?.buyername}</td>
                            <td className="py-2 px-4">{order?.price} BDT</td>
                            <td className="py-2 px-4">{order?.quantity}</td>
                            <td className="py-2 px-4">{order?.address}</td>
                            <td className="py-2 px-4">{order?.phone}</td>
                            <td className="py-2 px-4">{new Date(order?.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Myorders;
