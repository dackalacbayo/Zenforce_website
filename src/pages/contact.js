import React , {Component} from 'react'
import Link from 'gatsby-link'
import { Header, Icon, Segment,Label, Dropdown,Grid,Input, TextArea, Divider, Button, Select } from 'semantic-ui-react'
import logo from '../assets/images/white_logo_transparent@2x.png'
import Contact from '../components/Contact'
import PageHeader from '../components/shared/PageHeader'
import ContactForm from '../components/shared/ContactForm'

class contact extends Component {
  render(){
    return(
      <div className="pt-5 pb-5 mb-5" id="content-14">
        <PageHeader title={"Contact"} breadcrumbItem1={"Home"} breadcrumbItem2={"Contact"} />

        <div className="container pt-5">
            <div className ="f_rht ml-3 mr-3 mb-3 text-center">
                <h2 className="feat-title">Get in Touch</h2>
                <span className="lead black">Please fill out the quick form and we will be in touch with lightning speed.<br/>Email us with any questions or inquiries or use our contact data. We would be happy to answer your questions.</span>
            </div>
        </div>
        <form method="POST" action="https://formspree.io/dackalacbayo@gmail.com">
            <div className="container pb-5">
                 <section className="section pb-0 py-3">
                   	  <div className="container about">
                   		  <ContactForm />
                   		 </div>
                 </section>
                 <section id="contact-us">
                     <div className="wrap">
                           <button className="btn viewMore mr-3 pl-5 pr-5 btn-lg" ><Icon name='send' />Send</button>
                     </div>
                </section>
           </div>
        </form>
      </div>
    )
  }
}

export default contact
