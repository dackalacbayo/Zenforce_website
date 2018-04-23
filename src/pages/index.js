import React from 'react'
import { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import Link from 'gatsby-link'
import Features from '../components/Features'
import Benefits from '../components/Benefits'
import ContactForm from '../components/ContactForm'

import image  from '../assets/images/zenForce.png'
import image1  from '../assets/images/zenforceBrochure.png'
import 'bootstrap/dist/css/bootstrap.css';

import { Header, Icon, Segment,Label, Dropdown,Grid,Input, TextArea, Divider, Button } from 'semantic-ui-react'

// <section id="" className="">
//       <img className="sec3_img"  src={image1} alt="generic"/>
// </section>

const IndexPage = () => (
    <div>
          <section id="banner" className="">
              <Banner />
          </section>

          <section id="benefits" className="">
                <Benefits />
          </section>

          <section id="features" className="">
              <Features />
          </section>

          <section id="contactUs" className="">
              <ContactUs />
          </section>

    </div>
)

const Banner = () => (
  <div className="bg-banner">

    <div className="position-relative overflow-hidden p-3 p-md-5 text-center">
      <div className="col-md-5 p-lg-6 mx-sm-4 my-5">
        <div className="panel">
        <h1 className="display-4 font-weight-normal">ZenForce</h1>
        <p className="lead font-weight-normal">
          Zenforce is the easiest way to manage your work force. Whether you’re a sales team, collection team, repair team. Zenforce is here to help you tick off all your field operations needs.
          <br/><br/>
          <a href="#benefits"><Button className="button discover" ><span className="button">Discover More <i className="fas fa-angle-double-right"></i> </span></Button></a>
        </p>
        <br/>
        </div>
          <img className="intro-image"  src={image} alt="generic"/>
      </div>


      </div>
  </div>
)

const ContactUs = () => (

  <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Need a Free Demo & Quotation ?</h1>
        <p className="lead text-muted">ZenForce offers a free demo and quotation for you. Just fill up the form and send us a message. </p>
        <p>
          <ContactForm />
        </p>
      </div>
    </section>
)

export default IndexPage
