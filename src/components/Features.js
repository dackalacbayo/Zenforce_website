import React, { Component } from 'react'

const features = [
    {title: 'Notifications for Individual and broadcast messages', active:false},
    {title: 'Task Creation & Management', active:true},
    {title: 'Detailed Reporting', active:true},
    {title: 'Email Integration', active:false},
    {title: 'Calendar View', active:false},
    {title: 'Task List View', active:false},
    {title: 'Expense & Budget Tracker', active:true},
    {title: 'In-App Search Facility', active:false},
    {title: 'Commenting Facility', active:false},
    {title: 'Template Creation For Recurring Tasks', active:true},
    {title: 'Budget Tracker', active:false},
    {title: 'Address Book For Client Details', active:false},
    {title: 'Work Group Creation and Management', active:false},
    {title: 'Check In/Out from Sites', active:true},
    {title: 'Geo Tagging', active:true},
    {title: 'Offline Capable', active:true},
    {title: 'Mobile Ready', active:true},
    {title: 'Chat Facility', active:false},
]

const FeatureItem = ({title}) => (
  <div className="col-lg-3">
    <img className="rounded-circle"
    src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
    <h5 className="">{title}</h5>
    <p>Donec sed odio dui. Etiam porta sem ut id elit. Morbi leo risus</p>
  </div>
)


class Features extends Component {
  render
  render(){
    return(
      <div className="container text-center py-5">
      <div className="row">
        {features.filter((feat) => {return (feat.active === true)})
                 .map((feat) => {return <FeatureItem title={feat.title}/>})
        }
      </div>
      </div>
    )
  }
}

export default Features
