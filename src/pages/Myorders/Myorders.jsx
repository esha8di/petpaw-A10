import axios from 'axios';
import jsPDF from 'jspdf';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Myorders = () => {
    const [myorders, setMyorders] = useState([]);

    useEffect(() => {
        axios.get('https://back-end-livid-delta.vercel.app/orders')
            .then(res => setMyorders(res.data))
            .catch(err => console.log(err));
    }, []);

    const downloadReport = () => {
        if (myorders.length === 0) {
            toast.error("No orders to download!");
            return;
        }

        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text("My Orders Report", 14, 20);

        let y = 30;

        myorders.forEach((order, index) => {
            doc.setFontSize(12);
            doc.text(`Order ${index + 1}`,14,y);
            y+=6;
            doc.text(`Product Name:${order.productname}`, 14, y);
            y += 6;
            doc.text(`Buyer Name:${order.buyername}`, 14, y);
            y+=6;
            doc.text(`Price:${order.price} BDT`,14,y);
            y+=6;
            doc.text(`Quantity:${order.quantity}`,14,y);
            y+=6;
            doc.text(`Address: 
                ${order.address}`,14,y);
            y += 6;
            doc.text(`Phone:${order.phone}`,14,y);
            y += 6;
            doc.text(`Date:${new Date(order.date).toLocaleDateString()}`, 14, y);
            y += 10; 

           
            if (y>280) {
                doc.addPage();
                y = 20;
            }
        });

        doc.save("my_orders.pdf");
        toast.success("PDF downloaded!");
    };

    return (
        <div className="w-[95%] md:w-[90%] mx-auto my-10 overflow-x-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">My Orders</h2>
            <button
                className="mb-4 px-4 py-2 bg-black text-white rounded-lg btn"
                onClick={downloadReport}
            >
                Download Report
            </button>
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
