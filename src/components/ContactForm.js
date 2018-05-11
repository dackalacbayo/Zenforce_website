import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { Header, Icon, Segment,Label, Dropdown,Grid,Input, TextArea, Divider, Button, Select } from 'semantic-ui-react'
import image1  from '../assets/images/if_window_screen_with_mobile_icon_2541663.png'
import logo  from '../assets/images/white_logo_transparent@2x.png'

const InputField = props => (
   <div className="form-row">
     <div className="col-md-12">
       <div><label className="col-form-label">{props.name}</label> </div>
       <Input fluid type={props.type} placeholder={props.name} name={props.fieldKey} onChange={props.onChange} required/>
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
  <option className="" value={ind.text}> {ind.text} </option>
))
const optionCompSize = companySize.map((size) => (
  <option className="" value={size.text}> {size.text} </option>
))


class ContactForm extends Component {
  state = {
    modal:false,
  }

    toggle = () => {
        this.setState({
            modal: true
        })
    }

    close = () => { this.setState({ modal: false  })}
    onChange = (e,{value,name}) => this.setState({[name]:value})
    sendContact = () => {console.log(this.state)}


render() {

const items = [
  {name:"Name", fieldKey:"name", type:"text"},
  {name:"Email", fieldKey:"email", type:"email"},
  {name:"Job Title", fieldKey:"jobTitle", type:"text"},
  {name:"Phone", fieldKey:"phone", type:"text"},
]

      return (
          <div className="pt-4">
            <Button type="button" className="btn mr-2 btn-lg"  onClick={this.toggle}> Contact Us Now</Button>

            <Modal className="modal-lg" isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.close}>
              <div className="row text-center">
                  <div className="col">
                      <h5 className="h5">Send Us a Message to get a Free Demo & Quotations </h5>
                  </div>
              </div>
                </ModalHeader>
                <form method="POST" action="https://formspree.io/dackalacbayo@gmail.com">
                <ModalBody>
                    <Segment.Group horizontal>
                        <Segment className="m-3">
                        <div className="row">
                        <div className="col-lg-4 form-group text-center">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="tab-1">
                      <div className="contact-information">

                        <ul className="list-unstyled text-small">
                         <a href='#'><img className="sec3_img" src={logo} alt="generic"/></a><br/>
                         <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
                        </ul>
                          <div className="single-contact-info d-flex py-1">
                              <div className="contact-icon mr-15 ">
                                <i className="fas fa-map-marker-alt"></i>
                              </div><p className="text-left lead black small ml-3">3201 Antel Global Corporate Center, J. Vargas Ave. ,<br/>  Ortigas Center, Pasig City</p>
                          </div>
                          <div className="single-contact-info d-flex py-1">
                              <div className="contact-icon mr-15">
                                  <i className="fas fa-phone-volume"></i>
                              </div>
                              <p className="lead black small ml-3">709-5125 </p>
                          </div>
                          <div className="single-contact-info d-flex py-1">
                              <div className="contact-icon mr-15">
                                  <i className="fas fa-at"></i>
                              </div>
                              <a href="http://iainnovations.com/"><p className=" lead black small ml-3"> www.iainnovations.com</p></a>
                          </div>
                          <div className="single-contact-info d-flex py-1">
                              <div className="contact-icon mr-15">
                                    <i className="fas fa-envelope"></i>
                              </div>
                              <p className="lead black small ml-3"><a className="__cf_email__">info@innovations.ph</a></p>
                          </div>
                      </div>
                    </div>
                        </div>
                          <div className="col-lg-4 form-group">
                              <FormSection items={items} onChange={this.onChange.bind(this)}/>
                          </div>
                          <div className="col-lg-4 form-group">
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
                            <TextArea className="form-control" name="message" id="message-text" required/>
                          </div>
                      </div>
                        </Segment>
                        </Segment.Group>
                </ModalBody>
                  <ModalFooter>
                      <button className="btn viewMore mr-3 py-2 pl-4 pr-4 btn-lg" ><Icon name='send' />Send</button>
                  </ModalFooter>
                </form>
              </Modal>
          </div>
      );
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

export default ContactForm
