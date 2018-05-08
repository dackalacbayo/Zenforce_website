import React, { Component } from 'react'
import Link from 'gatsby-link'
import image1 from '../assets/images/if_alarm_32381.png'
import image2 from '../assets/images/mobile2.png'
import image3 from '../assets/images/if_Group_Meeting_Light_80844.png'

const benefits = [
    {title: 'Never miss a deadline', desc:"Manage your deadlines, save more time on follow ups", display:true, icons:'bene fas fa-stopwatch',image:image1, active:true, id:'a', href:'#a'},
    {title: 'Attain Visibility', desc:"Keep track of your mobile workforce", display:true,icons:'bene fas fa-mobile-alt',image:image2, active:false, id:'aa', href:'#aa'},
    {title: 'Team Collaborate', desc:"Share your works collaboratively on projects with anyone ", display:true, icons:'bene fas fa-users',image:image3, active:false, id:'aaa', href:'#aaa'},
    {title: 'Eliminate Geographic Barriers', desc:"Allow virtual meetings and trainings without having to find a location or make travel arrangements", display:false,icons:'bene fas fa-globe',image:image1, active:false, id:'aaaa', href:'#aaaa'},
    {title: 'Optimize decision making', desc:"Make your decisions as good as possible", display:false, icons:'bene fas fa-eye',image:image2, active:false, id:'aaaaa', href:'#aaaaa'},
    {title: 'Access anytime anywhere', desc:"Availability of information anytime & anywhere ", display:false,icons:'bene fas fa-cogs',image:image3, active:false, id:'aaaaaa', href:'#aaaaaa'},
]

const TabImage = ({image,active,id}) => (
  <div className={active ? "tab-pane fade show active" : "tab-pane fade" } id={id} role="tabpanel" aria-labelledby="tab-1">
      <img alt="Image" className="img-fluid box-shadow" src={image} />
  </div>
)

const TabDesc = ({id, href, title, desc, icons }) => (
  <div className="card mb-1 " id="tab-1" data-toggle="tab" href={href} role="tab" aria-controls={id} aria-selected="true">
      <div className="card-body col-12 col-md-12 col-lg-12">
          <h5><i className={icons}></i>{title}</h5>
          <p>{desc}</p>
      </div>
  </div>
)

class Benefits extends Component {
  render(){
    return(
   <div className="container py-5 mt-5 ">
       <div className="row justify-content-center text-center section-intro">
           <div className="col-12 col-md-9 col-lg-8">
               <h2 className="display-4">Benefits of Using ZenForce</h2>
               <span className="lead">Lorem ipsum dolor sit amet, omnis tractatos ad sea. Duo elitr abhorreant eu, ex vis mundi quaestio intellegebat.</span>
           </div>
       </div>

       <div className="row justify-content-around align-items-center py-5">
           <div className="col-12 col-md-6 col-lg-5 order-md-2">
               <ul className="nav" id="myTab" role="tablist">
                   <li>
                        {benefits.filter((benes) => {return (benes.display === true)})
                            .map((benes) => {return <TabDesc {...benes}/>})}
                   </li>
               </ul>
           </div>

           <div className="col-12 col-md-6 order-md-1">
               <div className="tab-content mt-5 text-center" id="myTabContent">
                   {benefits.filter((bene) => {return (bene.display === true)})
                            .map((bene) => {return <TabImage {...bene}/>})}
               </div>
           </div>
       </div>

       <div className="row justify-content-center text-center section-outro">
           <div className="col-lg-4 col-md-5">
               <h6>Detailed Overview</h6>
               <p>Lorem ipsum dolor sit amet, omnis tractatos ad sea. Duo elitr abhorreant eu, ex vis mundi quaestio intellegebat. </p>
                  <Link to="/benefits"><button className="btn more mr-2 btn-lg" >View More &rsaquo;</button></Link>
           </div>
       </div>
   </div>

    )
  }
}

export default Benefits
