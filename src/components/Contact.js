import React, { Component } from 'react'
import image1 from '../assets/images/twodevices@2x.png'
import ContactForm from '../components/ContactForm'

class Contact extends Component {
  render
  render(){
    return(
      <section className="bg-gradient p-0 text-white" id="contact">
       <svg className="decorative-divider" preserveAspectRatio="none" width="100%" height="100" viewBox=" 0 0 100 100">
           <polygon fill="#F8F9FB" points="0 0 100 0 100 60"></polygon>
       </svg>

       <div className="container space-lg">
           <div className="row text-center">
               <div className="col pb-5 mb-5">
                   <h3 className="h1">Need a Free Demo & Quotation?</h3>
                   <h5 className="h5">ZenForce offers a free demo and quotation for you. Just fill up the form and send us a message.</h5>
                   <ContactForm />
               </div>
           </div>
       </div>
    </section>
    )
  }
}

export default Contact
