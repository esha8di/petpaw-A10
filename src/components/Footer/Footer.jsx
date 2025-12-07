import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center">
        
       
        <div className="flex flex-col items-center md:items-start">
          <img
            src="https://img.freepik.com/premium-vector/vector-cute-dog-logo-design-pet-paw-logo-pet-care-pet-shop_729049-88.jpg"
            alt="PawMart Logo"
            className="w-16 h-16 mb-3 rounded-4xl"
          />
          <h2 className="text-2xl font-bold">PawMart</h2>
          <p className="mt-2 text-center md:text-left">
            PawMart connects local pet owners and buyers for adoption 
            and pet care products.
          </p>
        </div>

       
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-3 text-center">Useful Links</h3>
          <ul className="space-y-2  text-center">
            <li>
              <Link className="hover:text-green-700" to="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-green-700" to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="hover:text-green-700" to="/contact">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

       
        <div className="flex flex-col items-center md:items-start md:text-left text-center">
          <h3 className="text-xl font-semibold mb-3">Legal</h3>
          <p>© 2025 PawMart</p>
          <p className="mt-1">All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
