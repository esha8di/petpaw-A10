import React, { useEffect, useState } from 'react';
import Servicecard from '../Servicecard/Servicecard';

const Popularsection = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://back-end-livid-delta.vercel.app/createlist')
        .then(res =>res.json())
        .then(data=>setServices(data))
        .catch(error =>console.log(error))

    },[])

    
    console.log('popularid',services);
    return (
        <>
        <div className='w-[90%] mx-auto my-6 '>
            <div>
                <h2 className='text-3xl font-bold text-center text-green-900'>Popular Winter Care Service</h2>
                
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-2 mt-10">
                {
                    services.slice(0,3).map(service =>
                        <Servicecard key={service._id} service={service}></Servicecard>
                    )
                }

            </div>
            
        </div>
           

        </>
    );
};

export default Popularsection;