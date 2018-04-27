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
            <Button active type="button" className="btn btn-secondary mr-2 btn-lg"  onClick={this.toggle}> Contact Us  </Button>
            <Button active type="button" className="btn btn-secondary my-2" > Learn More<i className="fa fa-angle-right ml-2"></i></Button>

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
                              <div className="form-row select">
                                  <div className="form-group col-md-12 dropdown">
                                    <label className="col-form-label">Industry</label><br/>
                                    <select className="select_industry" name="industry">{optionIndustries}</select>
                                  </div>
                              </div>
                              <div className="form-row select">
                                <div className="form-group col-md-12 dropdown">
                                  <label className="col-form-label">Company Size</label><br/>
                                <select className="select_industry" name="companySize">{optionCompSize}</select>
                                </div>
                              </div>
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
                      <Button type="submit" width={16} color="secondary" content="Send" icon="send"> <Icon name='send' /> Send</Button>
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
