import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import './bs-product.css'
import './style.css'
import '../assets/web-fonts-with-css/css/fontawesome-all.css'

import image1  from '../assets/images/white_logo_transparent@2x.png'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <div

    >
      {children()}
      <Footer />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Footer = () => (
  <section className="footer">
      <footer className="container py-2">
        <div className="row footer">

          <div className="col-6 col-md">
            <ul className="list-unstyled text-small">
             <a href='#'><img className="sec3_img"  src={image1} alt="generic"/></a><br/>
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
