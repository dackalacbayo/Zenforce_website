import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/white_logo_transparent@2x.png'


const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
     <div className="container">
       <Link className="navbar-brand js-scroll-trigger" to="../">ZenForce</Link>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarResponsive">
         <ul className="navbar-nav ml-auto">
             <li className="nav-item header dropdown">
                <a className="nav-link dropdown-toggle  pr-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Product
                 </a>
               <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item pr-3" to="../benefits">Benefits</Link>
                  <Link className="dropdown-item pr-3" to="../features">Features</Link>
                  <Link className="dropdown-item pr-3" to="../services">Services</Link>
               </div>
             </li>
           <li className="nav-item header">
              <Link className="nav-link js-scroll-trigger pr-3" to="../about">About</Link>
           </li>
           <li className="nav-item header">
              <Link className="nav-link js-scroll-trigger pr-3" to="../contact">Contact</Link>
           </li>
           <li className="nav-item header">
              <Link className="nav-link js-scroll-trigger pr-3" to="../faQ">FaQ</Link>
           </li>
           <li className="nav-item header">
            <Link className="nav-link js-scroll-trigger pr-3" to="../blog">Blog</Link>
           </li>

         </ul>
       </div>
     </div>
   </nav>


)

export default Nav
