import React from 'react'
import { Component } from 'react'
import {Icon, Segment,Label, Dropdown,Grid,Input, TextArea, Divider, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Link from 'gatsby-link'
import Features from '../components/Features'
import Benefits from '../components/Benefits'
import Contact from '../components/Contact'
import Services from '../components/Services'
import Header from '../components/Header'
import image  from '../assets/images/zenForce.png'
import image1  from '../assets/images/zenforceBrochure.png'
import logo  from '../assets/images/white_logo_transparent@2x.png'
import 'bootstrap/dist/css/bootstrap.css';


const IndexPage = () => (
    <div>
      <Header />
          <section id="banner" className="">
              <Banner />
          </section>

          <section id="benefits" className="">
                <Benefits />
          </section>

          <hr className="m-0" />

          <section id="features" className="">
              <Features />
          </section>

          <hr className="m-0" />

          <section id="features" className="">
              <Services />
          </section>

          <section id="contacts" className="">
              <Contact />
          </section>

    </div>
)

const Banner = () => (
    <div className="bg-banner">
      <div className="position-relative overflow-hidden p-3 p-md-5 text-center">
        <div className="col-md-5 p-lg-6 mx-sm-4 my-5">
          <div className="panel">
            <h1 className="zenforce-header display-4 font-weight-normal">ZenForce</h1>
            <hr className="banner"/>
            <p className="lead font-weight-normal">Zenforce is the easiest way to manage your work force. Whether you’re a sales team, collection team, repair team. Zenforce is here to help you tick off all your field operations needs.<br/><br/>
            <a href="#benefits"><Button className="button discover" ><span className="button">Discover More <i className="aa fas fa-angle-double-right"></i> </span></Button></a></p><br/>
          </div>
            <img className="intro-image"  src={image} alt="generic"/>
          </div>
        </div>
    </div>
)

export default IndexPage
