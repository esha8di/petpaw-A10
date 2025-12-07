import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

import { RouterProvider } from "react-router/dom";
import router from './Router/Router.jsx';
import Authprovider from './Authprovider/Authprovider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
       <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />

    </Authprovider>
  
  </StrictMode>,
)
