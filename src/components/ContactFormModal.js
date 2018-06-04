import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { Header, Icon, Segment,Label, Dropdown,Grid,Input, TextArea, Divider, Button, Select } from 'semantic-ui-react'
import image1  from '../assets/images/if_window_screen_with_mobile_icon_2541663.png'
import logo  from '../assets/images/white_logo_transparent@2x.png'
import ContactForm from '../components/shared/ContactForm'

class ContactFormModal extends Component {
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
                <div>
                  <div className="row">
                  <div className="col-lg-6 form-group">
                    <ul className="list-unstyled text-small">
                       <a href='#'><img className="img-fluid logo" src={logo} alt="generic"/></a>
                    </ul>
                  </div>
                  <div className="col-lg-6 form-group">
                  <div className="single-contact-info d-flex">
                      <div className="contact-icon mr-15 ">
                        <i className="fas fa-map-marker-alt"></i>
                      </div><p className="text-left lead black small ml-3">3201 Antel Global Corporate Center, J. Vargas Ave., Ortigas Center, Pasig City</p>
                  </div>
                  <div className="single-contact-info d-flex">
                      <div className="contact-icon mr-15">
                          <i className="fas fa-phone-volume"></i>
                      </div>
                      <p className="text-left lead black small ml-3">709-5125 </p>
                  </div>
                  <div className="single-contact-info d-flex">
                      <div className="contact-icon mr-15">
                          <i className="fas fa-at"></i>
                      </div>
                      <a href="http://iainnovations.com/">
                      <p className="text-left lead black small ml-3"> www.iainnovations.com</p></a>
                  </div>
                  <div className="single-contact-info d-flex">
                      <div className="contact-icon mr-15">
                            <i className="fas fa-envelope"></i>
                      </div>
                      <p className="text-left lead black small ml-3"><a className="__cf_email__">info@innovations.ph</a></p>
                  </div>
                </div>
            </div>
            <ContactForm/>
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

export default ContactFormModal
