import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

const PageHeader = (props) => {
  var { title, breadcrumbItem1,breadcrumbItem2  } = props
   return (
     <div className="features-banner" data-stellar-offset-parent="true" >
       <div className="container" >
         <div className="f_vcenter">
           <div className="f_vbottom">
              <h1 className="profile-title display-4 font-weight-bold mb-2 ">{title}</h1>
           </div>
           <div className ="f_rht pb-3">
             <nav aria-label="breadcrumb">
               <ol className="breadcrumb">
                 <li className="breadcrumb-item"><a className="breadcrumb-item " href="#">{breadcrumbItem1}</a></li>
                 <li className="breadcrumb-item active" aria-current="page">{breadcrumbItem2}</li>
               </ol>
             </nav>
           </div>
         </div>
       </div>
      </div>
  )
}

export default PageHeader
