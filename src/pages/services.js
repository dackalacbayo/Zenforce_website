import React , {Component} from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/white_logo_transparent@2x.png'
import Contact from '../components/Contact'
import PageHeader from '../components/shared/PageHeader'
import Header from '../components/Header'
import image1 from '../assets/images/3.png'
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

const industryItems = [
    {title: 'Human Resources', desc:"Are you tired of managing time, scheduling, absence, and labor compliance processes manually for your diverse workforce? You can save time and reduce payroll costs while eliminating error-prone manual processes. We’ll help you:",href:'v-pills-hr', flip:false, icons:'bene fas fa-stopwatch',image:image1, active:true,
        list1:'Streamline compliance', listdesc1:'Stay up-to-date with hundreds of national and local labor laws, as well as absence regulations',
        list2:'Improve organizational efficiencies', listdesc2:'Manage time and labor processes in real time and eliminate error-prone spreadsheets',
        list3:'Improve leave case management', listdesc3:'Simplify eligibility determinations and absence management workflows',
        list4:'Boost employee satisfaction', listdesc4:'Improve communication and transparency with convenient self-service tools'},
    {title: 'Finance', desc:"Improve profitability and reduce costs without compromising business performance. Achieve greater cost efficiency with a global solution built to meet your existing and future workforce management needs. We’ll help you:", href:'v-pills-finance', flip:true, icons:'bene fas fa-mobile-alt',image:image1, active:true,
        list1:'Reduce payroll error',listdesc1:'Capture accurate time data and eliminate manual processes to efficiently manage labor and payroll costs',
        list2:'Increase organizational performance',listdesc2:'Enable more strategic scheduling processes to reduce overtime costs and unplanned absence',
        list3:'Mitigate compliance risks',listdesc3:'Simplify compliance with hundreds of national and local labor laws and absence regulations',
        list4:'Prepare for tomorrow', listdesc4:'From global expansion to new acquisitions, achieve the flexibility you need with our scalable and global solutions'},
    {title: 'Information Technology', desc:"Improve business outcomes with proven cloud solutions. Eliminate information silos with fully integrated solutions that allow real-time visibility and actionable insights. Our reliable, secure solutions will help you reduce variability and:", href:'v-pills-it', flip:false, icons:'bene fas fa-users',image:image1, active:true,
        list1:'Enable seamless integration', listdesc1:'Connect labor data to other critical business systems like HR and Payroll for optimal productivity and visibility',
        list2:'Protect data security ', listdesc2:'Guard employee data with industry-leading physical, technical, and administrative safeguards',
        list3:'Accelerate ROI ', listdesc3:'Generate measurable cost savings and achieve a faster return on your investment',
        list4:'Increase adoption',  listdesc4:'Empower employees with self-service tools that are accurate, reliable, and easy to use'},
    {title: 'Operations', desc:"Are you challenged by coordinating diverse employee processes across your organization? You can boost productivity with more efficient and consistent scheduling, time and labor processes and drive financial performance. We’ll help you:", href:'v-pills-operations', flip:true, icons:'bene fas fa-globe',image:image1, active:false,
        list1:'Improve efficiency', listdesc1: 'Manage employee and labor processes in real time and eliminate error-prone spreadsheets',
        list2:'Increase productivity', listdesc2: 'Never miss an opportunity by having the right people, with the right skills, the right attitude, in the right place, at the right time',
        list3:'Increase organizational performance', listdesc3: 'Reduce overtime costs and unplanned absence with more strategic and consistent scheduling processes',
        list4:'Boost employee satisfaction', listdesc4: 'Improve communication, collaboration and transparency with convenient self-service tools'},
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

const BenefitItem = ({title, desc, flip, icons, image, list1, list2, list3, list4, listdesc1, listdesc2, listdesc3, listdesc4, href}) => (
  <div className="bg-light" id="testimonials-03" id={href}>
      <div className="container-fluid">
          <div className="row mt-3">
              <div className={flip ? "order-md-2 col-lg-6 col-md-6 pt-5 text-center" : "col-lg-6 col-md-6 pt-5 text-center"}>
                <img className="max-width" src={image} height="100px"/>
              </div>
              <div className={flip ? "order-md-1 col-lg-6 col-md-10 pt-5 m-auto" : "col-lg-6 col-md-10 pt-5 m-auto"}>
                  <p className="display-4 mb-4">{title}</p>
                  <p className="card-text">{desc}</p>
                  <ul className="card-text text-justify">
                    <li className="py-1"><b>{list1}</b> - {listdesc1}</li>
                    <li className="py-1"><b>{list2}</b> - {listdesc2}</li>
                    <li className="py-1"><b>{list3}</b> - {listdesc3}</li>
                    <li className="py-1"><b>{list4}</b> - {listdesc4}</li>
                  </ul>
                  <hr className="mt-5 mb-4"/>
              </div>
          </div>
      </div>
  </div>
)


class services extends Component {
  render(){
    return(
      <div>
        <div className="pt-5 mb-2" id="content-14">
          <Header />
          <PageHeader title={"Our Services"} breadcrumbItem1={"Home"} breadcrumbItem2={"Services"}/>

          <div className="pb-5 mb-5 mt-5">
            <section className="container section">
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
                <div className="page-title text-center mt-5 pt-3">
                    <h5 className="title">Industries</h5>
                      <h2 className="feat-title">Guide To ZenForce Software</h2>
                      <blockquote className="blockquote">
                        <p className="mb-0">
                          Quos excepturi, eveniet, accusamus magnam unde mollitia facere similique corrupti veniam odit.
                        </p>
                      </blockquote>
                    <div className="space-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="content-14">
            <div className="container">
              {industryItems.map((bene) => <BenefitItem {...bene} />)}
            </div>
        </div>

        </div>
      </div>
    <Contact />
  </div>
    )
  }
}


export default services
