import React , {Component} from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/white_logo_transparent@2x.png'
import Contact from '../components/Contact'
import ContactForm from '../components/ContactForm'
import image1  from '../assets/images/if_window_screen_with_mobile_icon_2541663.png'
import task  from '../assets/images/if_notes_87447.png'
import expense  from '../assets/images/if_dollar_87424.png'
import location  from '../assets/images/if_maps_87441.png'
import mobile  from '../assets/images/mobile2.png'

const otherFeatures = [
    {title: 'Template Creation For Recurring Tasks', active:true, icon:'other-features display-4 fas fa-list',desc:'Enables you to create a template for tasks that repeat at a desired interval'},
    {title: 'Offline Capable', active:true, icon:'other-features display-4 fas fa-power-off',desc:'Can access without an Internet Connection'},
    {title: 'Check In/Out from Sites', active:true, icon:'other-features display-4 fas fa-check-circle',desc:'Donec sed odio dui. Etiam porta sem ut id elit. Morbi leo risus'},
    {title: 'Detailed Reporting', active:true, icon:'other-features display-4 fas fa-clipboard-list',desc:'Gives you automatic, accurate and structural digital reports'},
    ]

const OtherFeatureItem = ({title,icon,desc}) => (
  <div className="col-12 col-lg-3">
      <div className="card features">
          <div className="card-body text-center">
          <i className={icon}></i>
              <div className="media">
                  <div className="media-body">
                      <h4 className="card-title mt-4">{title}</h4>
                      <p className="card-text">{desc}</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
)


class features extends Component {
  render(){
    return(
      <div>
        <div className="pt-5 mb-2" id="content-14">
          <div className="features-banner" data-stellar-offset-parent="true" >
            <div className="container" >
              <div className="f_vcenter">
                <div className="f_vbottom"> <h1 className="profile-title display-4 font-weight-bold mb-2 ">Features</h1></div>
                <div className ="f_rht">
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><br/>
                </div>
              </div>
            </div>
          </div>
        </div>

<div className="section light-bg">
    <div className="container pb-5 mb-2 pt-2">
        <div className="section-title">
            <h3 className="feat-header-title mt-5">Do more with our app</h3>
        </div>
        <ul className="nav nav-tabs nav-justified" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#task">Task Creation</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tracker">Tracker</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#location">Geo Tagging</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#mobile">Mobile Ready</a>
            </li>
        </ul>
        <div className="tab-content p-4">
            <div className="tab-pane fade show active" id="task">
                <div className="d-flex flex-column flex-lg-row">
                    <img src={task} alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0 mt-5"/>
                    <div className="mr-5">
                        <h2 className="feat-title">Task Creation Management</h2>
                        <p className="lead black">Involves in planning, tracking and reporting. It helps individual or groups to achieve goals.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                            congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
                        </p>
                        <p> malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor
                            sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.
                        </p>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="tracker">
                <div className="d-flex flex-column flex-lg-row">
                    <div className="mr-5">
                        <h2 className="feat-title">Expense & Budget Tracker</h2>
                        <p className="lead black">Track project expenses for small to large-scale of projects that also include budget tracking</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                            congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
                        </p>
                        <p> malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor
                            sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.
                        </p>
                    </div>
                    <img src={expense} alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0 mt-5"/>
                </div>
            </div>
            <div className="tab-pane fade" id="location">
                <div className="d-flex flex-column flex-lg-row">
                    <img src={location} alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0 mt-5"/>
                    <div className="mr-5">
                        <h2 className="feat-title">Geo Tagging</h2>
                        <p className="lead black">Automatically attach location information to your digital media</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                            congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
                        </p>
                        <p> malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor
                            sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.
                        </p>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="mobile">
                <div className="d-flex flex-column flex-lg-row">
                    <div className="mr-5">
                        <h2 className="feat-title">Mobile Ready</h2>
                        <p className="lead black">Performs well even on mobile devices</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                            congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
                        </p>
                        <p> malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor
                            sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.
                        </p>
                    </div>
                    <img src={mobile} alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0 mt-5"/>
                </div>
            </div>
        </div>
    </div>
</div>
  <hr className="features"/>
      <div className="section light-bg pb-5 pt-4 my-3" id="features">
             <div className="container">
                 <div className="section-title">
                     <h3 className="other-features pb-5">Other Features</h3>
                 </div>
                 <div className="row">
                   {otherFeatures.filter((feat) => {return (feat.active === true)})
                            .map((feat) => {return <OtherFeatureItem {...feat}/>})}
                 </div>
            </div>
      </div>

        <Contact />

      </div>
    )
  }
}


export default features
