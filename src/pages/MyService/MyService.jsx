import React, { useContext, useEffect, useState } from 'react';
import { Contextapi } from '../../Authprovider/Authprovider';
import { Link } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyService = () => {
    const {user}=useContext(Contextapi)
    console.log('useremail',user)
     const [services,setServices]=useState([])

            useEffect(()=>{
                if(!user?.email) return;
                fetch(`https://back-end-livid-delta.vercel.app/myservices?email=${user.email}`)
                .then(res =>res.json())
                .then(data=>setServices(data))
                .catch(error =>console.log(error))
        
            },[user?.email])

            const handledelete=(id)=>{
                Swal.fire({
  title: "Do you want to delete ?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Delete",
  denyButtonText: `Don't Delete`
}).then((result) => {
  if (result.isConfirmed) {
    axios.delete(`https://back-end-livid-delta.vercel.app/delete/${id}`)
                .then(res=>{
                    console.log('delete',res.data);
                    if(res.data.acknowledged){
                        const filterData=services.filter(service=>service?._id != id)
                    setServices(filterData);
                    Swal.fire("Deleted!", "", "success");
                }

                    })
                    
                .catch(err=>{
                    console.log(err);
                })
    
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});

                

            }
    return (
        <div>
            {
                services.map(service=><>
                <ul>
                    <li>
                         {service?.email}
                          {service?.category}
                          <div className='flex  gap-3'>

                            <button className='btn' >
                                <Link to={`/myservices/${service?._id}`}>Edit</Link>
                               
                                </button>
                            <button onClick={()=>handledelete(service?._id)} className='btn'>Delete</button>

                          </div>
                          
                    </li>

                </ul>
               
                </>)
            }
           
        </div>
    );
};

export default MyService;