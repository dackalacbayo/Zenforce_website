import React , {Component} from 'react'
import { Header, Icon, Segment,Label, Dropdown,Grid,Input, TextArea, Divider, Button, Select } from 'semantic-ui-react'
import Link from 'gatsby-link'
import logo from '../assets/images/white_logo_transparent@2x.png'
import Contact from '../components/Contact'
import PageHeader from '../components/shared/PageHeader'
import image1 from '../assets/images/twodevices@2x.png'
import image2 from '../assets/images/project-desktop-just-things.jpg'
import image3 from '../assets/images/project-mobile-zen-garden.jpg'


const articles = [
  {title:'Minimalist Chandelier' ,by:'Branding, Design' , date:'September 27, 2017' , image:image1, href:'https://www.facebook.com/',
    desc:'Just then her head struck against the roof of the hall in fact she was now more than nine feet high and she at once took up the little golden key and hurried off to the garden door.	The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them.'},
  {title:'Standard Shape' ,by:'Branding, Design' , date:'September 27, 2017' , image:image2, href:'https://www.instagram.com/',
    desc:'Just then her head struck against the roof of the hall in fact she was now more than nine feet high and she at once took up the little golden key and hurried off to the garden door.	The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them.'},
  {title:'Street Fashion' ,by:'Branding, Design' , date:'September 27, 2017' , image:image3, href:'https://www.twitter.com/',
    desc:'Just then her head struck against the roof of the hall in fact she was now more than nine feet high and she at once took up the little golden key and hurried off to the garden door.	The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them.'},
  {title:'Standard Shape' ,by:'Branding, Design' , date:'September 27, 2017' , image:image2, href:'https://www.instagram.com/',
    desc:'Just then her head struck against the roof of the hall in fact she was now more than nine feet high and she at once took up the little golden key and hurried off to the garden door.	The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them.'},
  {title:'Street Fashion' ,by:'Branding, Design' , date:'September 27, 2017' , image:image3, href:'https://www.twitter.com/',
    desc:'Just then her head struck against the roof of the hall in fact she was now more than nine feet high and she at once took up the little golden key and hurried off to the garden door.	The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them.'},
  {title:'Standard Shape' ,by:'Branding, Design' , date:'September 27, 2017' , image:image2, href:'https://www.instagram.com/',
    desc:'Just then her head struck against the roof of the hall in fact she was now more than nine feet high and she at once took up the little golden key and hurried off to the garden door.	The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them.'},
  {title:'Street Fashion' ,by:'Branding, Design' , date:'September 27, 2017' , image:image3, href:'https://www.twitter.com/',
    desc:'Just then her head struck against the roof of the hall in fact she was now more than nine feet high and she at once took up the little golden key and hurried off to the garden door.	The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them.'},

]

const ArticleItem = art => (
  <article id="113" className="post post-113 type-post status-publish format-standard has-post-thumbnail hentry category-benefits-of-field-workforce-management tag-fieldworkforcemanagement">
    <div className="post-head">
      <h2 className="post-title text-center"><a className="article-title" href="/">{art.title}</a></h2>
        <div className="post-meta text-center mb-4">
          <span className="author">By <a href="/" title="Posts by Team TrackOne" rel="author">{art.by}</a></span> &bull;
          <span className="date">{art.date}</span>
        </div>
    </div>
    <div className="featured-media text-center pb-3" >
      <a href="/"><img width="780" height="330" src={art.image}/></a>
    </div>
    <div className="post-content pt-3">
      <p>{art.desc.substring(0,300)+"..."}</p>
    <div className="post-permalink pt-3">
      <a href="/" className="btn btn-default">Continue Reading</a></div>
    </div>
  </article>
)

const mappingFunction = p => (
  <div className="py-2">
    <li>
      <a href={p.href}>{p.title}</a>
    </li>
  </div>
)

const titles = articles.map(mappingFunction);
var RecentPosts = titles.slice(0,5);

const article = articles.map(ArticleItem);
var Articles = article.slice(0,5);



class blog extends Component {
  render(){
    return(
      <div className="blog">
        <div className="pt-5 mb-2" id="content-14">
          <PageHeader title={"ZenForce"} breadcrumbItem1={"Home"} breadcrumbItem2={"Blog"} />
        </div>

        <div className="container pt-3">
          <div className="row pb-5">
            <div className="col-md-8">
              {Articles}
            </div>

            <div className="col-md-4">
              <div id="email-subscribers-2" className="widget widget_text elp-widget"><h4 className="title">Zenforce Management</h4>
                <div>
                  <form className="es_widget_form" data-es_form_id="es_widget_form">
                      <div className="es_textbox">
                        <label className="col-form-label">Email</label>
                        <Input fluid placeholder="Email" name="companyName" width={16}/>
                      </div>
                      <div className="es_button text-center" >
                        <button className="btn viewMore mr-2 btn-lg" >Subscribe</button>
                      </div>
                      <div className="es_msg" id="es_widget_msg">
                        <span id="es_msg"></span>
                      </div>
                  </form>
                </div>
              </div>

              <div id="futura_social_links_widget-2" className="widget widget_futura_social_links_widget">
                <h4 className="title">We&#8217;re Social</h4>
                  <div className="content">
        			       <ul className="social">
        			          <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://plus.google.com"><i className="fab fa-google-plus-g"></i></a></li>
                        <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
              </div>

              <div id="recent-posts-4" className="widget widget_recent_entries"><h4 className="title">Recent Posts</h4>
              	<ul>
                  {RecentPosts}
				        </ul>
		          </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default blog
