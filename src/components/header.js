import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/white_logo_transparent@2x.png'

import 'bootstrap/dist/css/bootstrap.css';


const Header = () => (

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
     <div className="container">
       <Link className="navbar-brand js-scroll-trigger" to="./#">ZenForce</Link>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarResponsive">
         <ul className="navbar-nav ml-auto">
             <li className="nav-item dropdown">
             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Product
             </a>
             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
               <a className="dropdown-item" href="./benefits">Benefits</a>
               <a className="dropdown-item" href="./features">Features</a>
             </div>
           </li>
           <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="./about">About</a>
           </li>
           <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="./#">Contact</a>
           </li>
           <li className="nav-item">
             <a className="nav-link js-scroll-trigger" href="./faq">FaQ</a>
           </li>
           <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="./blog">Blog</a>
           </li>

         </ul>
       </div>
     </div>
   </nav>




)

export default Header
