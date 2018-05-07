import React , {Component} from 'react'
import Link from 'gatsby-link'
import { Header, Icon, Segment,Label, Dropdown,Grid,Input, TextArea, Divider, Button, Select } from 'semantic-ui-react'
import logo from '../assets/images/white_logo_transparent@2x.png'
import 'bootstrap/dist/css/bootstrap.css';
import Contact from '../components/Contact'

const InputField = props => (
   <div className="form-row">
     <div className="col-md-12">
       <div><label className="col-form-label">{props.name}</label> </div>
       <Input fluid type={props.type} placeholder={props.name} name={props.fieldKey} required/>
     </div>
    </div>
)

const companySize = [
      { key: 1, text: '1-9 employees', value: '1' },
      { key: 2, text: '10-150 employees', value: '2' },
      { key: 3, text: '151-300 employees', value: '3' },
      { key: 4, text: '301-500 employees', value: '4' },
      { key: 5, text: '501-2000 employees', value: '5' },
      { key: 6, text: 'Over 2000 employees', value: '6' },
    ]

const industries = [
    { key: 1, text: 'Agriculture/Forestry/Fish', value: '1' },
    { key: 2, text: 'Automotive', value: '2' },
    { key: 3, text: 'Banking/Financial', value: '3' },
    { key: 4, text: 'Construction', value: '4' },
    { key: 5, text: 'Consulting/Business Services', value: '5' },
    { key: 6, text: 'Distribution', value: '6' },
    { key: 7, text: 'Engineering', value: '7' },
    { key: 8, text: 'Export/Import', value: '8' },
    { key: 9, text: 'Fashion/Art', value: '9' },
    { key: 10, text: 'Financial Services', value: '10' },
    { key: 11, text: 'Food/Beverage', value: '11' },
    { key: 12, text: 'Government and Public Sector', value: '12' },
    { key: 13, text: 'Healthcare', value: '13' },
    { key: 14, text: 'High Tech Manufacturing', value: '14' },
    { key: 15, text: 'Hospitality', value: '15' },
    { key: 16, text: 'Information and Communication Technology (ICT)', value: '16' },
    { key: 17, text: 'Insurance', value: '17' },
    { key: 18, text: 'Manufacturing', value: '18' },
    { key: 19, text: 'Marketing/PR/Comms', value: '19' },
    { key: 20, text: 'Media', value: '20' },
    { key: 21, text: 'Mining', value: '21' },
    { key: 22, text: 'Not for Profit', value: '22' },
    { key: 23, text: 'Oil/Gas', value: '23' },
    { key: 24, text: 'Pharmaceutical', value: '24' },
    { key: 25, text: 'Real Estate', value: '25' },
    { key: 26, text: 'Recreation', value: '26' },
    { key: 27, text: 'Religion', value: '27' },
    { key: 28, text: 'Retail and Consumer Goods', value: '28' },
    { key: 29, text: 'Semiconductor', value: '29' },
    { key: 30, text: 'Services', value: '30' },
    { key: 31, text: 'Shipping and Transportation', value: '31' },
    { key: 32, text: 'Technology', value: '32' },
    { key: 33, text: 'Telecommunications', value: '33' },
    { key: 34, text: 'Travel and Leisure', value: '34' },
    { key: 35, text: 'Utilities', value: '35' },
    { key: 36, text: 'Wholesale', value: '36' },
    { key: 37, text: 'Other', value: '37' },
]

const optionIndustries = industries.map((ind) => (
  <option value={ind.text}> {ind.text} </option>
))
const optionCompSize = companySize.map((size) => (
  <option value={size.text}> {size.text} </option>
))

class contact extends Component {
  render(){

const items = [
        {name:"Name", fieldKey:"name", type:"text"},
        {name:"Email", fieldKey:"email", type:"email"},
        {name:"Job Title", fieldKey:"jobTitle", type:"text"},
        {name:"Phone", fieldKey:"phone", type:"text"},
    ]

    return(
      <div className="pt-5 pb-5 mb-5" id="content-14">
      <div className="features-banner" data-stellar-offset-parent="true" >
            <div className="container" >
              <div className="f_vcenter">
                <div className="f_vbottom">
                    <h1 className="profile-title display-4 font-weight-bold mb-2 ">Contact Us</h1>
                </div>
                <div className ="f_rht">
                    <p className="lead">We&rsquo;re ready to lead you into the future of workforce management </p><br/>
                </div>
              </div>
            </div>
          </div>

          <div className="g-12 cols pointer-wrap">
          <svg className="pointer" version="1.1" width="100%" viewBox="0 0 100 7" preserveAspectRatio="none">
          	<path d="M0 0 L50 7 L100 0 Z"></path>
          </svg>

          </div>

          <section id="contact-us">
              <div className="wrap">
                <div className="panel-left">
                  <h3 className="feat-header-title mt-5">Get in Touch</h3>
                  <p className="lead black">Please fill out the quick form and we will be in touch with lightning speed.</p>
                </div>
              </div>
            </section>

  <form method="POST" action="https://formspree.io/dackalacbayo@gmail.com">
            <div className="container pb-5">
               <section className="section pb-0 py-3">
               	<div className="container about">
               		<div className="row">
               			<div className="col-md-6">
                      <FormSection items={items} />
               			</div>
               			<div className="col-md-6">
                      <label className="col-form-label">Company Name</label>
                      <Input fluid placeholder="Company Name" name="companyName" width={16} required/>

                      <label className="col-form-label">Industry</label><br/>
                      <select className="select_industry" name="industry" required>
                        <option value="" disabled selected hidden>Select Industry</option>
                        {optionIndustries}</select>

                      <label className="col-form-label">Company Size</label><br/>
                      <select className="select_industry" name="companySize" required>
                        <option value="" disabled selected hidden>Select Company Size</option>
                        {optionCompSize}</select>

                      <label className="col-form-label">Message</label>
                      <TextArea className="form-control" name="message" id="message-text" required/><br/>
                      <div>
                      </div>
               			</div>
               		</div>
               	</div>
               </section>
               <section id="contact-us">
                   <div className="wrap">
                         <button className="btn more mr-3 pl-5 pr-5 btn-lg" ><Icon name='send' />Send</button>
                   </div>
                 </section>
           </div>
        </form>
        </div>
    )
  }
}

const FormSection = props => {
  const { onChange, items } = props
  return(
    <div>
      {items.map(row=> <InputField key={row.fieldKey} {...row} onChange={onChange}/>)}
    </div>
  )
}

export default contact
