import React, { useContext } from 'react';
import { Contextapi } from '../Authprovider/Authprovider';
import { Navigate, useLocation } from 'react-router';

const Privaterouter = ({children}) => {
   const {user,loading}=useContext(Contextapi);
   

   const location=useLocation()
   console.log('location',location)

   if(loading ){

    return <p>loading .........</p>
    
   }

   if(user){
    return children;
   }

   return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Privaterouter;