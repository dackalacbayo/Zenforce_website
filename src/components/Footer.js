import React, { Component } from 'react'
import logo  from '../assets/images/white_logo_transparent@2x.png'

const Footer = () => (
  <section className="footer pb-5">
      <footer className="container py-2">
        <div className="row footer">
        <a className="scroll-top" href="#"><i className="fas fa-angle-up mr-0"></i></a>
          <div className="col-6 col-md">
            <ul className="list-unstyled text-small">
             <a href='#'><img className="sec3_img"  src={logo} alt="generic"/></a><br/>
             <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
            </ul>
          </div>

          <div className="col-12 col-lg-3 py-4">
            <i className="fas fa-at"></i><a href="http://iainnovations.com/"><small className="text-muted site"> www.iainnovations.com</small></a> <br/ >
            <i className="fas fa-phone"></i><small className="text-muted"> 709-5125 </small><br/ >
            <i className="fas fa-envelope"></i><small className="text-muted">info@innovations.ph</small> <br/ ><hr/>

            <ul className="list-unstyled text-small icons">
              <li className="socialIcons"><a href="#" className="fab fa-twitter"><span className="label"> </span></a></li>
              <li className="socialIcons"><a href="#" className="fab fa-facebook"><span className="label"> </span></a></li>
              <li className="socialIcons"><a href="#" className="fab fa-instagram"><span className="label"> </span></a></li>
              <li className="socialIcons"><a href="#" className="fab fa-github"><span className="label"> </span></a></li>
              <li className="socialIcons"><a href="#" className="socialIcons fas fa-envelope "><span className="label"> </span></a></li>
              </ul>
          </div>

          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Cool stuff</a></li>
              <li><a className="text-muted" href="#">Random feature</a></li>
              <li><a className="text-muted" href="#">Team feature</a></li>
              <li><a className="text-muted" href="#">Stuff for developers</a></li>
              <li><a className="text-muted" href="#">Another one</a></li>
              <li><a className="text-muted" href="#">Last time</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Resource</a></li>
              <li><a className="text-muted" href="#">Resource name</a></li>
              <li><a className="text-muted" href="#">Another resource</a></li>
              <li><a className="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Business</a></li>
              <li><a className="text-muted" href="#">Education</a></li>
              <li><a className="text-muted" href="#">Government</a></li>
              <li><a className="text-muted" href="#">Gaming</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Team</a></li>
              <li><a className="text-muted" href="#">Locations</a></li>
              <li><a className="text-muted" href="#">Privacy</a></li>
              <li><a className="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
        </footer>
      </section>


)

export default Footer
