import React, { Component } from 'react'


const benefits = [
    {title: 'Never miss a deadline', desc:"Manage your deadlines, save more time on follow ups", flip:false},
    {title: 'Attain Visibility', desc:"Keep track of your mobile workforce", flip:true},
    {title: 'Never miss a deadline', desc:"Manage your deadlines, save more time on follow ups", flip:false},
]

const BenefitItem = ({title, desc, flip}) => (
  <div className="row featurette">
    <div className={flip ? "order-md-2 col-md-7" : "col-md-7"} >
      <h2 className="featurette-heading">{title}</h2>
      <p className="lead">
      {desc}
      </p>
    </div>
    <div className={flip ? "order-md-1 col-md-5" : "col-md-5"}>
      <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image"/>
    </div>
    <hr />

  </div>
)

class Benefits extends Component {
  render(){
    return(
      <div className="container text-center py-5">
        {benefits.map((bene) => <BenefitItem {...bene} />)}
      </div>
    )
  }
}

export default Benefits
