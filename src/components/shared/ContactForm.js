import React, { Component } from 'react'
import { Header, Icon, Segment,Label, Dropdown,Grid,Input, TextArea, Divider, Button, Select } from 'semantic-ui-react'

const InputField = props => (
   <div className="form-row">
     <div className="col-md-12">
       <div><label className="col-form-label">{props.name}<span className="text-danger"> *</span></label> </div>
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

const items = [
        {name:"Name", fieldKey:"name", type:"text"},
        {name:"Email", fieldKey:"email", type:"email"},
        {name:"Job Title", fieldKey:"jobTitle", type:"text"},
        {name:"Phone", fieldKey:"phone", type:"text"},
]
const ContactForm = (props) => {
   return (
     <div className="row">
       <div className="col-lg-6 form-group">
          <FormSection items={items} />
        </div>
        <div className="col-lg-6 form-group">
          <label className="col-form-label">Company Name<span className="text-danger"> *</span></label>
          <Input fluid placeholder="Company Name" name="companyName" width={16} required/>

          <label className="col-form-label">Industry<span className="text-danger"> *</span></label><br/>
          <select className="select_industry" name="industry" required>
          <option value="" disabled selected hidden>Select Industry</option>{optionIndustries}</select>

          <label className="col-form-label">Company Size<span className="text-danger"> *</span></label><br/>
          <select className="select_industry" name="companySize" required>
          <option value="" disabled selected hidden>Select Company Size</option>{optionCompSize}</select>

          <label className="col-form-label">Message<span className="text-danger"> *</span></label>
          <TextArea className="form-control" name="message" id="message-text" required/><br/>
       </div>
        </div>
  )
}


const FormSection = props => {
  const { onChange, items } = props
  return(
    <div>
      {items.map(row=> <InputField key={row.fieldKey} {...row} onChange={onChange}/>)}
    </div>
  )
}

export default ContactForm
