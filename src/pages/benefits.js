import React , {Component} from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/white_logo_transparent@2x.png'
import Contact from '../components/Contact'
import image1 from '../assets/images/if_alarm_32381.png'
import image2 from '../assets/images/mobile2.png'
import image3 from '../assets/images/if_Group_Meeting_Light_80844.png'
import image4 from '../assets/images/if_39-Globe_34330.png'
import image5 from '../assets/images/if_view_126581.png'
import image6 from '../assets/images/if_kservices_18068.png'

const benefitss = [
    {title: 'Never miss a deadline', desc:"Manage your deadlines, save more time on follow ups. Lorem ipsum dolor sit amet, cum nibh error sapientem at. Qui duis summo at, tale tibique conclusionemque pro ut, nec tibique deleniti delectus. Nec tibique deleniti delectus te, zril quaestio conclusionemque vis no", flip:false, icons:'bene fas fa-stopwatch',image:image1, active:true},
    {title: 'Attain Visibility', desc:"Keep track of your mobile workforce. Lorem ipsum dolor sit amet, cum nibh error sapientem at. Qui duis summo at, tale tibique conclusionemque pro ut, nec tibique deleniti delectus. Nec tibique deleniti delectus te, zril quaestio conclusionemque vis no", flip:true, icons:'bene fas fa-mobile-alt',image:image2, active:true},
    {title: 'Team Collaborate', desc:"Share your works collaboratively on projects with anyone. Lorem ipsum dolor sit amet, cum nibh error sapientem at. Qui duis summo at, tale tibique conclusionemque pro ut, nec tibique deleniti delectus. Nec tibique deleniti delectus te, zril quaestio conclusionemque vis no ", flip:false, icons:'bene fas fa-users',image:image3, active:true},
    {title: 'Eliminate Geographic Barriers', desc:"Allow virtual meetings and trainings without having to find a location or make travel arrangements. Lorem ipsum dolor sit amet, cum nibh error sapientem at. Qui duis summo at, tale tibique conclusionemque pro ut, nec tibique deleniti delectus. Nec tibique deleniti delectus te, zril quaestio conclusionemque vis no", flip:true, icons:'bene fas fa-globe',image:image4, active:false},
    {title: 'Optimize decision making', desc:"Make your decisions as good as possible. Lorem ipsum dolor sit amet, cum nibh error sapientem at. Qui duis summo at, tale tibique conclusionemque pro ut, nec tibique deleniti delectus. Nec tibique deleniti delectus te, zril quaestio conclusionemque vis no", flip:false, icons:'bene fas fa-eye',image:image5, active:false},
    {title: 'Access anytime anywhere', desc:"Availability of information anytime & anywhere. Lorem ipsum dolor sit amet, cum nibh error sapientem at. Qui duis summo at, tale tibique conclusionemque pro ut, nec tibique deleniti delectus. Nec tibique deleniti delectus te, zril quaestio conclusionemque vis no ", flip:true, icons:'bene fas fa-cogs',image:image6, active:true},
]

const BenefitItem = ({title, desc, flip, icons, image}) => (
  <div className="row mb-5">
    <div className={flip ? "order-md-2 col-lg-8 col-md-12 col-sm-12 ml-auto" : "col-lg-8 col-md-12 col-sm-12 ml-auto"} >
        <h3 className="feat-header-title mt-5">{title}</h3>
        <p className="text-secondary mr-5 mb-3">{desc}</p>
          <ul className="text-secondary list-unstyled mb-4">
              <li className="mb-2">
                  <i className="fa fa-check mr-2 text-secondary"></i>Mobile first design</li>
              <li className="mb-2">
                  <i className="fa fa-check mr-2 text-secondary"></i>1000×8 SVG icons are included</li>
              <li className="mb-2">
                  <i className="fa fa-check mr-2 text-secondary"></i>Easy customization</li>
              <li className="mb-2">
                  <i className="fa fa-check mr-2 text-secondary"></i>Clean code</li>
          </ul>
    </div>

    <div className={flip ? "order-md-1 col-lg-3 col-md-10 col-sm-12 mr-auto my-auto" : "col-lg-3 col-md-10 col-sm-12 mr-auto my-auto"}>
    <div className="card w-100 border-info py-3">
        <div className="py-5 d-flex">
            <img className="mb-4 m-auto" src={image} height="100px"/>
        </div>
    </div>
    </div><hr/>
  </div>
)


class benefits extends Component {
  render(){
    return(
      <div>
      <div className="pt-5 mb-2" id="content-14">
      <div className="features-banner" data-stellar-offset-parent="true" >
            <div className="container" >
              <div className="f_vcenter">
                <div className="f_vbottom">
                         <h1 className="profile-title display-4 font-weight-bold mb-2 ">Benefits</h1>
                </div>
                <div className ="f_rht">
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><br/>
                </div>
              </div>
            </div>
          </div>
            <div className="pt-5 pb-5 mb-2" id="content-14">
              <div className="container pt-3">
              {benefitss.map((bene) => <BenefitItem {...bene} />)}
              </div>
            </div>
            </div>

        <Contact />
      </div>
    )
  }
}


export default benefits
