import React from "react";
import { NavLink,Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Navitems=()=>{
        return(
            <> 
            <header className="header">
            <nav className="bd-highlight">
              <div className="nav-menu d-flex justify-content-end">
                <h3 className="flex-grow-1 p-4 pt-4 pb-2 text-white ">Beauty and Cosmetics</h3>
                <NavLink to="/" className="nav-link m-3 p-2">Login</NavLink>
                <NavLink to="/home" className="nav-link m-3 p-2">Contact</NavLink>
                <NavLink to="/contact" className="nav-link m-3 p-2">Home</NavLink>
              </div>
            </nav>
            </header>
            <Outlet/>
            </>
        );
};
export default Navitems;