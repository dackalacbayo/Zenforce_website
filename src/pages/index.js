import React from 'react'

import { Component } from 'react'
import Link from 'gatsby-link'
import Features from '../components/Features'
import Benefits from '../components/Benefits'

const IndexPage = () => (
  <div>
    <Banner />
    <Benefits />
    <Features />
    <ContactUs cta="Call Usss" cta2="Demo" />
  </div>
)

const Banner = () => (
  <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 font-weight-normal">Punny headline</h1>
      <p className="lead font-weight-normal">
        Zenforce is the easiest way to manage your work force. Whether you’re a sales team, collection team, repair team, Zenforce is here to help you tick off all your field operations needs.
      </p>
      <a className="btn btn-outline-secondary" href="#">Coming soon</a>
    </div>
    <div className="product-device box-shadow d-none d-md-block"></div>
    <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
  </div>
)

const ContactUs = ({cta, cta2}) => (
  <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Album example</h1>
        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks dont simply skip over it entirely.</p>
        <p>
          <a href="#" className="btn btn-primary my-2">{cta}</a>
          <a href="#" className="btn btn-secondary my-2">{cta2}</a>
        </p>
      </div>
    </section>
)

export default IndexPage
