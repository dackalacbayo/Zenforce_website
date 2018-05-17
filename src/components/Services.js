import React, { Component } from 'react'
import Link from 'gatsby-link'
import image1 from '../assets/images/twodevices@2x.png'
import image6  from '../assets/images/feature-image.png'

const roleItems = [
    {role:'Human Resources', count:'01', title: 'HR’s Guide to ZenForce software', id:'v-pills-home', aria:'v-pills-home-tab', href:'#v-pills-home', desc1:"Are you tired of managing time, scheduling, absence, and labor compliance processes manually for your diverse workforce?",
      desc2:'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.', display:true, icons:'bene fas fa-stopwatch',image:image1, active:true},
    {role:'Finance', count:'02', title: 'Finance’s Guide to ZenForce software', id:'v-pills-profile', aria:'v-pills-profile-tab', href:'#v-pills-profile', desc1:"Improve profitability and reduce costs without compromising business performance.",
      desc2:'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.', display:true,icons:'bene fas fa-mobile-alt',image:image1, active:false},
    {role:'Information Technology', count:'03', title: 'IT’s Guide to ZenForce software', id:'v-pills-messages', aria:'v-pills-messages-tab', href:'#v-pills-messages', desc1:"Improve business outcomes with proven cloud solutions. Eliminate information silos with fully integrated solutions that allow real-time visibility and actionable insights.",
      desc2:'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.', display:true, icons:'bene fas fa-users',image:image1, active:false},
    {role:'Operations', count:'04', title: 'Operations Guide to ZenForce software', id:'v-pills-settings', aria:'v-pills-settings-tab', href:'#v-pills-settings', desc1:"Are you challenged by coordinating diverse employee processes across your organization?",
      desc2:'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.', display:true,icons:'bene fas fa-globe',image:image1, active:false},
]

const NavlinkRole = ({active,id,href,role,count,aria}) => (
  <div className={ active ? "nav-link active" : "nav-link"} id={aria} data-toggle="pill" href={href} role="tab" aria-controls={id} aria-selected={active}><span>{count}</span> {role}</div>
)

const TabRole = ({active,id,title,desc1,desc2,aria }) => (
<div className={ active ? "tab-pane fade show active pb-5" : "tab-pane fade pb-5" } role="tabpanel" id={id} aria-labelledby={aria}>
    <span className="icon flaticon-hospital"></span>
    <h2 className="text-primary">{title}</h2>
    <strong className="text-justify">{desc1}</strong>
    <p className="desc2 text-justify mt-3">{desc2}</p>
  </div>
)

class Services extends Component {
  render
  render(){
    return(
      <div className="container">
        <div className="row justify-content-center text-center section-intro">
          <div className="col-12 col-md-9 col-lg-10 pt-5 pb-3">
          <div className="page-title text-center">
              <h5 className="title">Services</h5>
              <div className="space-10"></div>
          </div>
              <h2 className="display-4">Explore ZenForce By Your Role</h2>
          </div>
        </div>
        <div className="row mt-5">

        <section className="section custom-tabs">
      <div className="container">
        <div className="row ">

          <div className="col-md-4 border-right element-animate">
            <div className="nav flex-column nav-pills mt-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {roleItems.filter((benes) => {return (benes.display === true)})
                    .map((benes) => {return <NavlinkRole {...benes}/>})}
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-7 element-animate">
            <div className="tab-content" id="v-pills-tabContent">

            {roleItems.filter((role) => {return (role.display === true)})
              .map((role) => {return <TabRole {...role}/>})}

            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
          <div className="container text-center">
            <br/><Link to="/services"><button className="btn viewMore mr-2 btn-lg mb-5" >View More &rsaquo;</button></Link>
          </div>
      </div>
    )
  }
}

export default Services
