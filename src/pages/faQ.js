import React , {Component} from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/white_logo_transparent@2x.png'
import 'bootstrap/dist/css/bootstrap.css';
import Contact from '../components/Contact'

const faqsProduct = [
  {question:'How do I edit a page?', answer:'1Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-1',href:'#collapse-1', display:true},
  {question:'Why was my article deleted?', answer:'2Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-2',href:'#collapse-2', display:true},
  {question:'How do I change the name of an article?', answer:'3Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-3',href:'#collapse-3', display:true},
  {question:'How do I delete my account?', answer:'4Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-4',href:'#collapse-4', display:true},
]

const faqsSale = [
  {question:'Who writes the articles on Wikipedia?', answer:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-5',href:'#collapse-5', display:true},
  {question:'Who owns Wikipedia?', answer:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-6',href:'#collapse-6', display:true},
  {question:'Why am I having trouble logging in?', answer:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-7',href:'#collapse-7', display:true},
  {question:'How can I contact Wikipedia?', answer:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-8',href:'#collapse-8', display:true},
  {question:'How do I delete my account?', answer:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-9',href:'#collapse-9', display:true},
  {question:'Who writes the articles on Wikipedia?', answer:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-10',href:'#collapse-10', display:true},
]

const FaqDiv = ({question, answer, id, href}) => (
  <div className="card">
      <div className="card-header panel-heading" role="tab" id="headingOne">
          <a role="button" className="collapsed text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href={href} aria-expanded="false" aria-controls="collapse1">
              <p className="lead black display-5">
                  <span className="sign mbr-iconfont mbri-arrow-down inactive"></span> {question}
              </p>
          </a>
      </div>
      <div id={id} className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne">
          <div className="panel-body p-4">
              <p className="mbr-fonts-style panel-text display-7">
               {answer}</p>
          </div>
      </div>
  </div>

)

class faQ extends Component {
  render(){
    return(
      <div className="pt-5 pb-1 mb-2" id="content-14">
      <div className="features-banner" data-stellar-offset-parent="true" >
            <div className="container" >
              <div className="f_vcenter">
                <div className="f_vbottom">
                    <h1 className="profile-title display-4 font-weight-bold mb-2 ">Questions</h1>
                </div>
                <div className ="f_rht">
                    <p className="lead">Frequently asked questions</p><br/>
                </div>
              </div>
            </div>
          </div>
                  <div className="container pt-5 pb-5">
                      <div className="row pb-5">
                          <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
                              <h1 className="faq mb-2">Product</h1>
                              <hr className="mt-3 mb-4"/>
                              {faqsProduct.filter((faq) => {return (faq.display === true)})
                                       .map((faq) => {return <FaqDiv {...faq}/>})}

                              <h1 className="faq mb-2 mt-5">Sales</h1>
                              <hr className="mt-3 mb-4"/>
                              {faqsSale.filter((faq) => {return (faq.display === true)})
                                       .map((faq) => {return <FaqDiv {...faq}/>})}
                          </div>
                      </div>
                  </div>

                <Contact />

            </div>
    )
  }
}


export default faQ
