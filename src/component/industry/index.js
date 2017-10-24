import React from 'react'
import './style.css'

export default class Industry extends React.Component{
  render(){
    let {summary} = this.props.report
    return(

      <div className='line-chart-container'>

        <div className='line-chart-header'>
          <h2 className='line-chart-header-title'>Industries Employing {this.props.report.occupation.title}</h2>
          <p className='industry'>Industry</p>
          <p className='fl-right'>% of Total Jobs in Industry
            <span>({summary.jobs.year})</span>
          </p>
          <p className='fl-right'>% of Occupation Jobs in Industry
            <span>({summary.jobs.year})</span>
          </p>
          <p className='fl-right'>Occupation Jobs in Industry
            <span>({summary.jobs.year})</span>
          </p>
        </div>

        <ul className='industry-line-chart'>
          {this.props.report.employing_industries.industries.map((e, i) => {
            return <li key={i + 'a'} className='clearfix'>
              <p key={i + 'b'} style={{width: e.perc_occupation_in_industry + '%'}}>
                {e.title}
              </p>
              <span key={i + 'c'}>
                {e.perc_total_jobs_in_industry + '%'}
              </span>
              <span key={i + 'd'}>
                {e.perc_occupation_in_industry + '%'}
              </span>
              <span key={i + 'e'}>
                {e.in_occupation_jobs}
              </span>
            </li>
          })}
        </ul>

      </div>
    )
  }
}
