import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { Header, Icon, Segment,Label, Dropdown,Grid,Input, TextArea, Divider, Button } from 'semantic-ui-react'


const InputField = props => (
   <div className="form-row">
     <div className="form-group col-md-12">
       <div> <label className="col-form-label">{props.name}</label> </div>
       <Input width={8} fluid type="text" placeholder={props.name} name={props.fieldKey} onChange={props.onChange}/>
     </div>
    </div>
)

const DropdownField = props => (
  <div className="form-row">
    <div className="form-group col-md-12 dropdown">
      <label className="col-form-label">{props.name}</label><br/>
      <Dropdown label={props.name} search fluid selection placeholder={props.name} name={props.fieldKey} onChange={props.onChange} options={props.options} />
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

      const companySize = [
      { key: 1, text: '1-9 employees', value: '1' },
      { key: 2, text: '10-150 employees', value: '2' },
      { key: 3, text: '151-300 employees', value: '3' },
      { key: 4, text: '301-500 employees', value: '4' },
      { key: 5, text: '501-2000 employees', value: '5' },
      { key: 6, text: 'Over 2000 employees', value: '6' },
    ]

    const industry = [
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

    const items = [
        {name:"Name", fieldKey:"name"},
        {name:"Email", fieldKey:"email"},
        {name:"Job Title", fieldKey:"jobTitle"},
        {name:"Phone", fieldKey:"phone"},

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
                        <form>
                          <div className="col">
                            <div>
                              <label className="col-form-label">Company Name</label><br/>
                              <Input fluid placeholder="CompanyName" name="companyName" onChange={this.onChange.bind(this)}/><br/>
                            </div>
                                <DropdownField className="" name="Company Size" fieldKey="companySize" options={companySize} onChange={this.onChange.bind(this)}/>
                                <DropdownField className="" name="Industry" fieldKey="industry" options={industry} onChange={this.onChange.bind(this)}/>
                            </div>
                            </form>
                        </Segment>
                      </Segment.Group>
                      <Segment color='teal'>  <form>
                          <div className="form-group">
                            <label className="col-form-label">Message</label>
                            <TextArea className="form-control" name="message" id="message-text" onChange={this.onChange.bind(this)}/>
                          </div>
                        </form>
                      </Segment>
                    </Segment.Group>
                </ModalBody>
                  <ModalFooter>
                      <Button width={16} color="primary" content="Send" icon="send"
                          onClick={this.sendContact.bind(this)}> <Icon name='send' /> Send</Button>
                      <Button color="negative" onClick={this.close}><Icon name='delete' />Cancel</Button>
                  </ModalFooter>
              </Modal>
          </div>
      );
  }
}


const FormSection = props => {
  const { onChange, items } = props
  return(
    <form>
      {items.map(row=> <InputField key={row.fieldKey} {...row} onChange={onChange}/>)}
    </form>
  )
}

export default ContactForm
