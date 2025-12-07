import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Myorders = () => {
    const [myorders, setMyorders] =useState([]);

    useEffect(()=>{
        axios.get('https://back-end-livid-delta.vercel.app/orders')
        .then(res=>{
            setMyorders(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    console.log('myorders',myorders)
    return (
        <div>
            this is my order

            {
                myorders.map(order=>
                    <li>
                       id: {order?.productId}
                    </li>
                )
            }
        </div>
    );
};

export default Myorders;