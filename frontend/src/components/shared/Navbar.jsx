import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  const navLinks = [
    { id: 1, name: "Home", href: "/home" },
    { id: 2, name: "About", href: "/About" },
    { id: 3, name: "Service", href: "/Service" },
    { id: 4, name: "Contact", href: "/Contact" },
  ];

  const renderNavLinks = () => {

   const listItems = navLinks.map( (link)=> {
    const liElement = <li className="nav-item" key={link.id} >
        <a className="nav-link" href={link.href}>
        {link.name}
        </a>
    </li>;
    return liElement;
   });
    return listItems;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
        <img src="../src/assets/Calender.png" style={{width: "30px"}} title="Calender" />
          <ul className="navbar-nav">
          {
            renderNavLinks()
          }           
          </ul>
        </div>
        <div className="navbar-brand" href="#" >
          <span className="text-secondary" style={{fontSize:"15px", color:""}}><IoPersonCircle />Demo<IoMdArrowDropdown /></span>
        </div>        
      </div>
    </nav>
  );
};

export default Navbar;