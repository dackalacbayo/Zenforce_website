import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/white_logo_transparent@2x.png'
// import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';


const Header = () => (

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
     <div className="container">
       <a className="navbar-brand js-scroll-trigger" href="#page-top">ZenForce</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarResponsive">
         <ul className="navbar-nav ml-auto">
         <li className="nav-item">
           <a className="nav-link js-scroll-trigger active" href="#">Home</a>
         </li>
           <li className="nav-item">
             <a className="nav-link js-scroll-trigger" href="#benefits">Benefits</a>
           </li>
           <li className="nav-item">
             <a className="nav-link js-scroll-trigger" href="#features">Features</a>
           </li>
           <li className="nav-item">
             <a className="nav-link js-scroll-trigger" href="#about">About</a>
           </li>
           <li className="nav-item">
             <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
           </li>
         </ul>
       </div>
     </div>
   </nav>




)

export default Header
