import React , {Component} from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/white_logo_transparent@2x.png'
import Contact from '../components/Contact'
import PageHeader from '../components/shared/PageHeader'
import image1 from '../assets/images/if_user 4_6711.png'
import image2 from '../assets/images/mobile2.png'
import image3 from '../assets/images/if_Group_Meeting_Light_80844.png'
import image4 from '../assets/images/if_39-Globe_34330.png'
import image5 from '../assets/images/if_view_126581.png'
import image6 from '../assets/images/if_kservices_18068.png'


const ourTeam = [
  {name:'Richard Roe', position:'Creative Director',image:image1,facebook:'https://www.facebook.com/',twitter:'https://www.twiiter.com/',instagram:'https://www.instagram.com/'},
  {name:'Ann Doe', position:'Designer', image:image1,facebook:'https://www.facebook.com/',twitter:'https://www.twiiter.com/',instagram:'https://www.instagram.com/'},
  {name:'Jane Doe', position:'Copywriter', image:image1,facebook:'https://www.facebook.com/',twitter:'https://www.twiiter.com/',instagram:'https://www.instagram.com/'},
]

const ourClients = [
  {icon:'fab fa-facebook',href:'https://www.facebook.com/'},
  {icon:'fab fa-twitter',href:'https://www.twitter.com/'},
  {icon:'fab fa-instagram',href:'https://www.instagram.com/'},
  {icon:'fab fa-google', href:'https://www.google.com/'},
  {icon:'fab fa-github',href:'https://www.github.com/'},
]

const OurTeam = ({name, position, image, facebook, twitter, instagram}) => (
  <div className="col-md-4">
    <div className="card card-sm border-0 mb-3 mb-md-0">
      <img className="m-auto img-fluid" src={image} height="100px"/>
      <div className="">
        <h5 className="card-title text-center ">
          {name}, <small className="text-muted">{position}</small>
        </h5>
        <div className="widget">
           <ul className="social text-center">
              <li><a href={facebook}><i className="fab fa-facebook-f"></i></a></li>
              <li><a href={twitter}><i className="fab fa-twitter"></i></a></li>
              <li><a href={instagram}><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

const OurClients = ({icon, href}) => (
  <div className="col-6 col-md">
    <a href={href} className="brand-item mb-3 mb-md-0">
      <i className={icon}></i>
    </a>
  </div>
)


class about extends Component {
  render(){
    return(
      <div>
        <div className="pt-5 mb-2" id="content-14">
          <PageHeader title={"About Us"} breadcrumbItem1={"Home"} breadcrumbItem2={"About"}/>

          <div className="pb-5 mb-5 mt-5">
            <section className="section pb-0 py-3">
              <div className="container about py-2">
                <div className="row">
                  <div className="col-md-2">
                    <div className="title-about"> About our company </div>
                  </div>
                    <div className="col-md-5">
                        <h3 className="mb-4">
                          We help people find great products at a <span className="text-primary">reasonable</span> price
                        </h3>
                        <blockquote className="blockquote">
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos excepturi, eveniet, accusamus magnam unde mollitia facere similique corrupti veniam odit.
                          </p>
                        </blockquote>
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores repellat, consectetur eligendi necessitatibus reiciendis reprehenderit porro expedita consequuntur vitae dolorem beatae commodi adipisci cupiditate qui quisquam blanditiis praesentium labore enim.
                        </p>
                    </div>
                    <div className="col-md-5">
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum vero corrupti voluptates, aperiam est asperiores, ea odio, maxime eos corporis ut magni.
                      </p>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolor debitis soluta, excepturi, laboriosam dolorum non, beatae veniam ipsa eum ad quia expedita minus explicabo placeat itaque voluptate, quos culpa!
                      </p>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti laboriosam sit natus totam libero at accusantium excepturi doloremque quae, vitae dignissimos soluta quod nesciunt, provident adipisci quas inventore odit impedit!
                      </p>
                    </div>
                </div>
              </div>
            </section>

            <section className="section pb-0 py-3">
              <div className="container about">
                <div className="row">
                  <div className="col-md-2">
                    <div className="title-about mt-4">	Our team</div>
                  </div>
                    <div className="col-md-10">
                      <h2 className="feat-title">People behind the scenes</h2>
                        <p className="text-muted mb-5">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio deserunt dolor culpa repellat iusto nostrum tempora placeat fuga facere mollitia adipisci, animi, reiciendis dicta quam obcaecati ad quibusdam eius?
                        </p>
                        <div className="row">
                          {ourTeam.map((team) => <OurTeam {...team} />)}
                        </div>
                    </div>
                </div>
              </div>
            </section>

            <section className="section py-3">
              <div className="container about">
                <div className="row">
                  <div className="col-md-2">
                    <div className="title-about mt-4">Our clients</div>
                  </div>
                  <div className="col-md-10">
                    <h2 className="feat-title">Who We Serve</h2>
                    <p className="text-muted mb-5">
                      We are proud to work with large employers who view people as core to the organizations’ success.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit at nesciunt amet impedit rem facere placeat dicta iste atque recusandae earum voluptatem ea alias, sunt quo, qui ratione, error eius.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit at nesciunt amet impedit rem facere placeat dicta iste atque recusandae earum voluptatem ea alias, sunt quo, qui ratione, error eius.
                    </p>
                    <p className="text-muted mb-5">
                      We support our clients with all of their benefits communications needs.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit at nesciunt amet impedit rem facere placeat dicta iste atque recusandae earum voluptatem ea alias, sunt quo, qui ratione, error eius.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit at nesciunt amet impedit rem facere placeat dicta iste atque recusandae earum voluptatem ea alias, sunt quo, qui ratione, error eius.
                    </p>
                    <h3 className="mb-4">
                      Some of our <span className="text-primary">happy</span> clients
                    </h3>
                    <p className="text-muted mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit at nesciunt amet impedit rem facere placeat dicta iste atque recusandae earum voluptatem ea alias, sunt quo, qui ratione, error eius.
                    </p>
                    <div className="form-row align-items-center">
                      {ourClients.map((client) => <OurClients {...client} />)}
                    </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    <Contact />
  </div>
    )
  }
}


export default about
