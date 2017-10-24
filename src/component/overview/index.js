import React from 'react'
import './style.css'

export default class Overview extends React.Component {
  render(){
    let {summary} = this.props.report
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
              <p>{summary.jobs.regional}</p>
              <p>Jobs({summary.jobs.year})</p>
              <p>
                {summary.jobs_growth.job_perc}%
                <span className={summary.jobs_growth.job_perc > 100 ? 'positive' : 'negative'}> {summary.jobs_growth.job_perc > 100 ? 'above' : 'of'} </span>
                National average
              </p>
            </div>
          </div>

          <div className='overview-change'>

            <div className='overview-change-inner'>
              <p className={summary.jobs_growth.regional > 0 ? 'positive' : 'negative'}>{summary.jobs_growth.regional > 0 ? '+' : ''}{summary.jobs_growth.regional}%</p>
              <p>% Change ({summary.jobs_growth.start_year})-({summary.jobs_growth.end_year})</p>
              <p>Nation: <span className={summary.jobs_growth.national_avg > 0 ? 'positive' : 'negative'}>{summary.jobs_growth.national_avg > 0 ? '+' : ''}{summary.jobs_growth.national_avg}%</span></p>
            </div>
          </div>

          <div className='overview-earnings'>
            <div className='overview-earnings-inner'>
              <p>${summary.earnings.regional}/hr</p>
              <p>Median Hourly Earnings</p>
              <p>Nation: ${summary.earnings.national_avg}/hr</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
