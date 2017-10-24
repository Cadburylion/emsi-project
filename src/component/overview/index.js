import React from 'react'
import './style.css'

export default class Overview extends React.Component {
  render(){
    return(

      <div className='overview-container'>

        <h1 className='overview-title'>Occupation Overview</h1>

        <h2 className='overview-description'>
          {this.props.report.occupation.title} in {this.props.report.region.title}.
        </h2>

        <h3 className='overview-occupation'>
          Occupation Summary for {this.props.report.occupation.title}
        </h3>

        <div className='overview-statistics'>
          <div className='overview-jobs'>
            <div className='overview-jobs-inner'>
              <p>{this.props.report.summary.jobs.regional}</p>
              <p>Jobs({this.props.report.summary.jobs.year})</p>
              <p>
                {this.props.report.summary.jobs_growth.job_perc}%
                <span className={this.props.report.summary.jobs_growth.job_perc > 100 ? 'positive' : 'negative'}> {this.props.report.summary.jobs_growth.job_perc > 100 ? 'above' : 'of'} </span>
                National average
              </p>
            </div>
          </div>
          
          <div className='overview-change'>

            <div className='overview-change-inner'>
              <p className={this.props.report.summary.jobs_growth.regional > 0 ? 'positive' : 'negative'}>{this.props.report.summary.jobs_growth.regional > 0 ? '+' : ''}{this.props.report.summary.jobs_growth.regional}%</p>
              <p>% Change ({this.props.report.summary.jobs_growth.start_year})-({this.props.report.summary.jobs_growth.end_year})</p>
              <p>Nation: <span className={this.props.report.summary.jobs_growth.national_avg > 0 ? 'positive' : 'negative'}>{this.props.report.summary.jobs_growth.national_avg > 0 ? '+' : ''}{this.props.report.summary.jobs_growth.national_avg}%</span></p>
            </div>
          </div>

          <div className='overview-earnings'>
            <div className='overview-earnings-inner'>
              <p>${this.props.report.summary.earnings.regional}/hr</p>
              <p>Median Hourly Earnings</p>
              <p>Nation: ${this.props.report.summary.earnings.national_avg}/hr</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
