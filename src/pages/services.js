import React , {Component} from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/white_logo_transparent@2x.png'
import Contact from '../components/Contact'
import PageHeader from '../components/shared/PageHeader'
import image1 from '../assets/images/if_user 4_6711.png'
import image2 from '../assets/images/mobile2.png'
import image3 from '../assets/images/if_Group_Meeting_Light_80844.png'
import image4 from '../assets/images/if_39-Globe_34330.png'
import image5 from '../assets/images/if_view_126581.png'
import image6 from '../assets/images/if_kservices_18068.png'

const serviceItems = [
  {icon:'fas fa-code-branch', title:'Our Approach', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores repellat, consectetur eligendi necessitatibus reiciendis reprehenderit porro expedita consequuntur vitae dolorem beatae commodi adipisci cupiditate qui quisquam blanditiis praesentium labore enim.'},
  {icon:'fas fa-handshake', title:'Service Offerings', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores repellat, consectetur eligendi necessitatibus reiciendis reprehenderit porro expedita consequuntur vitae dolorem beatae commodi adipisci cupiditate qui quisquam blanditiis praesentium labore enim.'},
  {icon:'fas fa-book', title:'Customer Education', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores repellat, consectetur eligendi necessitatibus reiciendis reprehenderit porro expedita consequuntur vitae dolorem beatae commodi adipisci cupiditate qui quisquam blanditiis praesentium labore enim.'},
]

const ServiceItems = ({title,icon,desc}) => (
  <div className="card pricing popular">
      <div className="card-head">
        <div className="icon-box-wrapper">
          <div className="square-icon-box is-landing primary">
            <div className="icon-box-wrapper">
              <div className="icon-box icon-square icon-circle mb-4">
                    <h2 className="featurette-heading py-2 pl-2">
                    <i className={`display-4 feat ${icon}`}></i></h2>
              </div>
            </div>
            </div>
        </div><span className="price mt-3">{title}</span></div>
        <p className="feature_desc text-center pl-5 pr-5 pb-5">{desc}</p>
    </div>
)

class services extends Component {
  render(){
    return(
      <div>
        <div className="pt-5 mb-2" id="content-14">
          <PageHeader title={"Our Services"} breadcrumbItem1={"Home"} breadcrumbItem2={"Services"}/>

          <div className="pb-5 mb-5 mt-5">
            <section className="container section pb-0 py-3">
            <div className ="f_rht ml-3 mr-3 mb-5 text-center">
                <h2 className="feat-title">Explore Our Services</h2>
                <blockquote className="blockquote">
                  <p className="mb-0">
                    With decades of experience and a high customer adoption rate, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos excepturi, eveniet, accusamus magnam unde mollitia facere similique corrupti veniam odit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos excepturi, eveniet, accusamus magnam unde mollitia facere similique corrupti veniam odit.
                  </p>
                </blockquote>
            </div>
            <div className="section" id="pricing">
            <div className="container">
              <div className="section-title">
                <div className="page-title text-center">
                    <h5 className="title">Services</h5>
                    <div className="space-10"></div>
                </div>
              </div>
              <div className="card-deck">
                    {serviceItems.map((service) => <ServiceItems {...service} />)}
              </div>

              <div className="section-title">
                <div className="page-title text-center mt-5">
                    <h5 className="title">Role</h5>
                    <div className="space-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        </div>
      </div>
    <Contact />
  </div>
    )
  }
}


export default services
