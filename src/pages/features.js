import React , {Component} from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/white_logo_transparent@2x.png'
import Contact from '../components/Contact'
import PageHeader from '../components/shared/PageHeader'
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
  <div className="col-12 col-lg-3 mb-5">
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


const featureItem = [
    {tabTitle:'Task Creation', href:'#task', title:'Task Creation Management',active:true, image: task, id:'task',
      desc1:'Involves in planning, tracking and reporting. It helps individual or groups to achieve goals.',
      desc2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,',
      desc3:'malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.',},
    {tabTitle:'Tracker', href:'#tracker',title:'Expense & Budget Tracker',active:false, image: expense, id:'tracker',
      desc1:'Track project expenses for small to large-scale of projects that also include budget tracking.',
      desc2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,',
      desc3:'malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.',},
    {tabTitle:'Geo Tagging', href:'#location',title:'Geo Tagging',active:false, image: location, id:'location',
      desc1:'Automatically attach location information to your digital media',
      desc2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,',
      desc3:'malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.',},
    {tabTitle:'Mobile Ready', href:'#mobile',title:'Mobile Ready',active:false, image: mobile, id:'mobile',
      desc1:'Performs well even on mobile devices',
      desc2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,',
      desc3:'malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.',},
  ]

const NavItem = ({tabTitle,href,active}) => (
  <li className="nav-item">
      <a className = {active ? "nav-link active" : "nav-link"} data-toggle="tab" href={href}>{tabTitle}</a>
  </li>
)

const TabItem = ({image, title, desc1, desc2, desc3, id, active}) => (
  <div className = { active ? "tab-pane fade show active" : "tab-pane fade" } id={id} >
    <div className="d-flex flex-column flex-lg-row">
        <img className="m-auto img-fluid mr-lg-5" src={image} height="100px"/>
        <div className="">
            <h2 className="feat-title">{title}</h2>
            <strong className="text-justify">{desc1}</strong>
            <p className="desc2 text-justify mt-3">{desc2}</p>
            <p className="desc3 text-justify">{desc3}</p>
        </div>
    </div>
  </div>
)

class features extends Component {
  render(){
    return(
      <div>
        <div className="pt-5 mb-2" id="content-14">
            <PageHeader title={"Features"} breadcrumbItem1={"Home"} breadcrumbItem2={"Features"}/>

                <div className="section light-bg mb-5">
                    <div className="container pb-5 mb-2 pt-2">
                        <div className="section-title">
                            <h3 className="feat-header-title mt-5">Do more with our app</h3>
                        </div>
                        <ul className="nav nav-tabs nav-justified" role="tablist">
                            {featureItem.map((items) => <NavItem {...items} />)}

                        </ul>
                        <div className="tab-content p-4 py-5">
                            {featureItem.map((tabFeat) => <TabItem {...tabFeat} />)}
                        </div>
                    </div>
                </div>
                <hr className="features"/>
                <div className="section light-bg pb-5 pt-4 my-3 mb-5" id="features">
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
        </div>
          <Contact />
      </div>
    )
  }
}


export default features
