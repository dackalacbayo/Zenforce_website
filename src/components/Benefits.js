import React, { Component } from 'react'
import image1 from '../assets/images/twodevices@2x.png'


const benefits = [
    {title: 'Never miss a deadline', desc:"Manage your deadlines, save more time on follow ups", flip:false, icons:'bene fas fa-stopwatch',image:image1},
    {title: 'Attain Visibility', desc:"Keep track of your mobile workforce", flip:true, icons:'bene fas fa-mobile-alt',image:image1},
    {title: 'Team Collaborate', desc:"Share your works collaboratively on projects with anyone ", flip:false, icons:'bene fas fa-users',image:image1},
    {title: 'Eliminate Geographic Barriers', desc:"Allow virtual meetings and trainings without having to find a location or make travel arrangements", flip:true, icons:'bene fas fa-globe',image:image1},
    {title: 'Optimize decision making', desc:"Make your decisions as good as possible", flip:false, icons:'bene fas fa-eye',image:image1},
    {title: 'Access anytime anywhere', desc:"Availability of information anytime & anywhere ", flip:true, icons:'bene fas fa-cogs',image:image1},
]

const BenefitItem = ({title, desc, flip, icons, image}) => (
  <div className="row featurette">
    <div className={flip ? "order-md-2 col-md-7" : "col-md-7"} >
      <h2 className="featurette-heading"><i className={icons}></i> {title}</h2>
      <p className="lead">
        {desc}
      </p>
    </div><hr/>
    <div className={flip ? "order-md-1 col-md-5" : "col-md-5"}>
      <img className="featurette-image img-fluid mx-auto"  src={image} alt="generic"/>
    </div><hr/>

  </div>
)

class Benefits extends Component {
  render(){
    return(
      <div className="container text-center py-3">
      <h2 className="feature-heading">Why ZenForce</h2>
        <p className="bene_subtitle"> ZenForce is a workforce management solution for increasing productivity of your field operations.</p>
        {benefits.map((bene) => <BenefitItem {...bene} />)}
      </div>
    )
  }
}

export default Benefits
