import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { Header, Icon, Segment,Label, Dropdown,Grid,Input, TextArea, Divider, Button, Select } from 'semantic-ui-react'


const InputField = props => (
   <div className="form-row">
     <div className="form-group col-md-12">
       <div> <label className="col-form-label">{props.name}</label> </div>
       <Input width={8} fluid type={props.type} placeholder={props.name} name={props.fieldKey} onChange={props.onChange}/>
     </div>
    </div>
)

const SelectIndustry = () => (
  <div className="form-row select">
    <div className="form-group col-md-12 dropdown">
      <label className="col-form-label">Industry</label><br/>
      <select className="select_industry" name="industry">
        <option value="">Select Industry</option>
        <option value="Agriculture/Forestry/Fish">Agriculture/Forestry/Fish</option>
        <option value="Automotive">Automotive</option>
        <option value="Banking/Financial">Banking/Financial</option>
        <option value="Construction">Construction</option>
        <option value="Consulting/Business Services">Consulting/Business Services</option>
        <option value="Distribution">Distribution</option>
        <option value="Engineering">Engineering</option>
        <option value="Export/Import">Export/Import</option>
        <option value="Fashion/Art">Fashion/Art</option>
        <option value="Financial Services">Financial Services</option>
        <option value="Food/Beverage">Food/Beverage</option>
        <option value="Government and Public Sector">Government and Public Sector</option>
        <option value="Healthcare">Healthcare</option>
        <option value="High Tech Manufacturing">High Tech Manufacturing</option>
        <option value="Hospitality">Hospitality</option>
        <option value="Information and Communication Technology (ICT)">Information and Communication Technology (ICT)</option>
        <option value="Insurance">Insurance</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Marketing/PR/Comms">Marketing/PR/Comms</option>
        <option value="Media">Media</option>
        <option value="Mining">Mining</option>
        <option value="Not for Profit">Not for Profit</option>
        <option value="Oil/Gas">Oil/Gas</option>
        <option value="Pharmaceutical">Pharmaceutical</option>
        <option value="Real Estate">Real Estate</option>
        <option value="Recreation">Recreation</option>
        <option value="Religion">Religion</option>
        <option value="Retail and Consumer Goods">Retail and Consumer Goods</option>
        <option value="Semiconductor">Semiconductor</option>
        <option value="Services">Services</option>
        <option value="Shipping and Transportation">Shipping and Transportation</option>
        <option value="Technology">Technology</option>
        <option value="Telecommunications">Telecommunications</option>
        <option value="Travel and Leisure">Travel and Leisure</option>
        <option value="Utilities">Utilities</option>
        <option value="Wholesale">Wholesale</option>
        <option value="Other">Other</option>
    </select>
  </div>
</div>
)

const SelectCompanySize = () => (
  <div className="form-row select">
    <div className="form-group col-md-12 dropdown">
      <label className="col-form-label">Company Size</label><br/>
        <select className="select_industry" name="companySize">
          <option value="">Select company size</option>
          <option value="1-9 employees">1-9 employees</option>
          <option value="10-150 employees">10-150 employees</option>
          <option value="151-300 employees">151-300 employees</option>
          <option value="301-500 employees">301-500 employees</option>
          <option value="501-2000 employeess">501-2000 employees</option>
          <option value="Over 2000 employees">Over 2000 employees</option>
      </select>
    </div>
</div>
)


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
    // onChange(e, props){
    //   console.log(e)
    //   console.log(props)
    // }
    sendContact = () => {console.log(this.state)}


render() {

  const items = [
        {name:"Name", fieldKey:"name", type:"text"},
        {name:"Email", fieldKey:"email", type:"email"},
        {name:"Job Title", fieldKey:"jobTitle", type:"text"},
        {name:"Phone", fieldKey:"phone", type:"text"},

    ]

const company = [
        {name:"Company Size", fieldKey:"companySize"},
        {name:"Industry", fieldKey:"industry"},
    ]
      return (
          <div>
            <Button active type="button" className="btn btn-secondary"  onClick={this.toggle}> Contact Us  </Button>
            <Button type="button" className="btn btn-secondary my-2" > <a href="#">Learn More</a></Button>
            <Modal className="modal-lg" isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.close}>Send Us a Message to get a Free Demo & Quotation</ModalHeader>
                <form method="POST" action="https://formspree.io/dackalacbayo@gmail.com">
                <ModalBody>
                  <Segment.Group stacked >
                    <Segment.Group horizontal>
                        <Segment color='teal'>
                          <div className="row">
                            <div className="col">
                                <FormSection items={items} onChange={this.onChange.bind(this)}/>
                            </div>
                          </div>
                        </Segment>
                        <Segment color='teal'>
                            <label className="col-form-label">Company Name</label><br/>
                            <Input fluid placeholder="CompanyName" name="companyName" width={16}/><br/>
                            <SelectIndustry />
                            <SelectCompanySize />
                        </Segment>
                      </Segment.Group>

                      <Segment color='teal'>
                          <div className="form-group">
                            <label className="col-form-label">Message</label>
                            <TextArea className="form-control" name="message" id="message-text"/>
                          </div>
                      </Segment>
                  </Segment.Group>
                </ModalBody>
                  <ModalFooter>
                      <Button type="submit" width={16} color="primary" content="Send" icon="send"> <Icon name='send' /> Send</Button>
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
