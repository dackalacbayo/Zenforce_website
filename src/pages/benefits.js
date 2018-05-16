import React , {Component} from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/white_logo_transparent@2x.png'
import Contact from '../components/Contact'
import PageHeader from '../components/shared/PageHeader'
import image1 from '../assets/images/if_alarm_32381.png'
import image2 from '../assets/images/mobile2.png'
import image3 from '../assets/images/if_Group_Meeting_Light_80844.png'
import image4 from '../assets/images/if_39-Globe_34330.png'
import image5 from '../assets/images/if_view_126581.png'
import image6 from '../assets/images/if_kservices_18068.png'

const benefitss = [
    {title: 'Never miss a deadline', desc:"Manage your deadlines, save more time on follow ups. Lorem ipsum dolor sit amet, cum nibh error sapientem at. Qui duis summo at, tale tibique conclusionemque pro ut, nec tibique deleniti delectus. Nec tibique deleniti delectus te, zril quaestio conclusionemque vis no",
        list1:'Mobile first design', list2:'1000×8 SVG icons are included', list3:'Easy customization', list4:'Clean code', flip:false, icons:'bene fas fa-stopwatch',image:image1, active:true},
    {title: 'Attain Visibility', desc:"Keep track of your mobile workforce. Lorem ipsum dolor sit amet, cum nibh error sapientem at. Qui duis summo at, tale tibique conclusionemque pro ut, nec tibique deleniti delectus. Nec tibique deleniti delectus te, zril quaestio conclusionemque vis no",
        list1:'Mobile first design', list2:'1000×8 SVG icons are included', list3:'Easy customization', list4:'Clean code', flip:true, icons:'bene fas fa-mobile-alt',image:image2, active:true},
    {title: 'Team Collaborate', desc:"Share your works collaboratively on projects with anyone. Lorem ipsum dolor sit amet, cum nibh error sapientem at. Qui duis summo at, tale tibique conclusionemque pro ut, nec tibique deleniti delectus. Nec tibique deleniti delectus te, zril quaestio conclusionemque vis no ",
        list1:'Mobile first design', list2:'1000×8 SVG icons are included', list3:'Easy customization', list4:'Clean code', flip:false, icons:'bene fas fa-users',image:image3, active:true},
    {title: 'Eliminate Geographic Barriers', desc:"Allow virtual meetings and trainings without having to find a location or make travel arrangements. Lorem ipsum dolor sit amet, cum nibh error sapientem at. Qui duis summo at, tale tibique conclusionemque pro ut, nec tibique deleniti delectus. Nec tibique deleniti delectus te, zril quaestio conclusionemque vis no",
        list1:'Mobile first design', list2:'1000×8 SVG icons are included', list3:'Easy customization', list4:'Clean code', flip:true, icons:'bene fas fa-globe',image:image4, active:false},
    {title: 'Optimize decision making', desc:"Make your decisions as good as possible. Lorem ipsum dolor sit amet, cum nibh error sapientem at. Qui duis summo at, tale tibique conclusionemque pro ut, nec tibique deleniti delectus. Nec tibique deleniti delectus te, zril quaestio conclusionemque vis no",
        list1:'Mobile first design', list2:'1000×8 SVG icons are included', list3:'Easy customization', list4:'Clean code', flip:false, icons:'bene fas fa-eye',image:image5, active:false},
    {title: 'Access anytime anywhere', desc:"Availability of information anytime & anywhere. Lorem ipsum dolor sit amet, cum nibh error sapientem at. Qui duis summo at, tale tibique conclusionemque pro ut, nec tibique deleniti delectus. Nec tibique deleniti delectus te, zril quaestio conclusionemque vis no ",
        list1:'Mobile first design', list2:'1000×8 SVG icons are included', list3:'Easy customization', list4:'Clean code', flip:true, icons:'bene fas fa-cogs',image:image6, active:true},
]

const BenefitItem = ({title, desc, flip, icons, image, list1, list2, list3, list4}) => (
  <div className="row benefit-item mb-3">
    <div className={flip ? "order-md-2 col-lg-8 col-md-8 col-sm-12 " : "col-lg-8 col-md-8 col-sm-12"} >
        <h3 className="feat-header-title mt-5">{title}</h3>
        <p className="text-secondary mr-5 mb-3">{desc}</p>
          <ul className="text-secondary list-unstyled mb-2">
            <div className="row mt-4">
              <div className="col-xs-6 ml-3 mr-5">
                <li className="mb-2">
                    <i className="fas other-features fa-check mr-2 "></i>{list1}</li>
                <li className="mb-2">
                    <i className="fas other-features fa-check mr-2"></i>{list2}</li>
                </div>
                <div className="col-xs-6 ml-3 mr-5">
                <li className="mb-2">
                    <i className="fas other-features fa-check mr-2"></i>{list3}</li>
                <li className="mb-2">
                    <i className="fas other-features fa-check mr-2"></i>{list4}</li>
              </div>
            </div>
          </ul>
        </div>

    <div className={flip ? "order-md-1 col-lg-4 col-md-4 col-sm-12 mr-auto" : "col-lg-4 col-md-4 col-sm-12 mr-auto"}>
        <div className="d-flex">
            <img className="m-auto img-fluid" src={image} height="100px"/>
        </div>

    </div><hr/>
  </div>
)


class benefits extends Component {
  render(){
    return(
      <div>
        <div className="pt-5 mb-2" id="content-14">
          <PageHeader title={"Benefits"} breadcrumbItem1={"Home"} breadcrumbItem2={"Benefits"}/>

            <div className="pt-2" id="content-14">
                <div className="container pt-5">
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
