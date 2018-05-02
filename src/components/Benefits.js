import React, { Component } from 'react'
import image1 from '../assets/images/twodevices@2x.png'
import image2 from '../assets/images/project-desktop-just-things.jpg'
import image3 from '../assets/images/project-mobile-zen-garden.jpg'


const benefits = [
    {title: 'Never miss a deadline', desc:"Manage your deadlines, save more time on follow ups", flip:false, icons:'bene fas fa-stopwatch',image:image1, active:true},
    {title: 'Attain Visibility', desc:"Keep track of your mobile workforce", flip:true, icons:'bene fas fa-mobile-alt',image:image1, active:true},
    {title: 'Team Collaborate', desc:"Share your works collaboratively on projects with anyone ", flip:false, icons:'bene fas fa-users',image:image1, active:true},
    {title: 'Eliminate Geographic Barriers', desc:"Allow virtual meetings and trainings without having to find a location or make travel arrangements", flip:true, icons:'bene fas fa-globe',image:image1, active:false},
    {title: 'Optimize decision making', desc:"Make your decisions as good as possible", flip:false, icons:'bene fas fa-eye',image:image1, active:false},
    {title: 'Access anytime anywhere', desc:"Availability of information anytime & anywhere ", flip:true, icons:'bene fas fa-cogs',image:image1, active:true},
]


class Benefits extends Component {
  render(){
    return(
   <div className="container py-5">
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
                       <div className="card mb-1" id="tab-1" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                           <div className="card-body col-12 col-md-12 col-lg-12">
                               <h5><i className="bene fas fa-stopwatch"></i>Never miss a deadline</h5>
                               <p>Manage your deadlines, save more time on follow ups. Lorem ipsum dolor sit amet, omnis tractatos ad sea.</p>
                           </div>
                       </div>
                   </li>
                   <li>
                       <div className="card mb-1" id="tab-2" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                           <div className="card-body">
                               <h5><i className="bene fas fa-mobile-alt"></i>Attain Visibility</h5>
                               <p>Keep track of your mobile workforce. Lorem ipsum dolor sit amet, omnis tractatos ad sea.</p>
                           </div>
                       </div>
                   </li>
                   <li>
                       <div className="card mb-1" id="tab-3" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                           <div className="card-body">
                               <h5><i className="bene fas fa-users"></i>Team Collaborate</h5>
                               <p>Share your works collaboratively on projects with anyone. Lorem ipsum dolor sit amet, omnis tractatos ad sea. </p>
                           </div>
                       </div>
                   </li>
               </ul>
           </div>

           <div className="col-12 col-md-6 order-md-1">
               <div className="tab-content mt-5 ml-5" id="myTabContent">
                   <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="tab-1">
                       <img alt="Image" className="img-fluid box-shadow" src={image1} />
                   </div>
                   <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="tab-2">
                       <img alt="Image" className="img-fluid box-shadow" src={image2} />
                   </div>
                   <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="tab-3">
                       <img alt="Image" className="img-fluid box-shadow" src={image3} />
                   </div>
               </div>
           </div>

       </div>

       <div className="row justify-content-center text-center section-outro">
           <div className="col-lg-4 col-md-5">
               <h6>Detailed Overview</h6>
               <p>Lorem ipsum dolor sit amet, omnis tractatos ad sea.</p>
                 <a href="/benefits"><button className="btn more mr-2 btn-lg" >View More &raquo;</button></a>
           </div>
       </div>

   </div>

    )
  }
}

export default Benefits
