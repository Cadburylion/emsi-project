import React from 'react'
import * as d3 from 'd3'

import './style.css'

export default class Overview extends React.Component {
  constructor(props){
    super(props)
    this.state={
      occupation: this.props.report.occupation,
      region: this.props.report.region,
      summary: this.props.report.summary,
    }
    this.computePercentage = this.computePercentage.bind(this)

  }

  componentWillMount(){
    this.computePercentage(this.props.report.summary)

    let {summary} = this.props.report

    summary.jobs.regional = this.addCommas(summary.jobs.regional)
    summary.jobs.national_avg = this.addCommas(summary.jobs.national_avg)
  }

  addCommas(num) {
    return (num + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  }

  computePercentage(data){
    let jobPerc = Math.round(((data.jobs.regional / data.jobs.national_avg) * 100) * 10 ) /10

    this.setState({
      jobPerc: jobPerc + '%',
      jobGrowth: jobPerc > 0 ? true : false,
    })
  }

  render(){
    console.log(this.state)
    return(
      <div className='overview-container'>
        <h1 className='overview-title'>Occupation Overview</h1>
        <h2 className='overview-description'>
          {this.state.occupation.title} in {this.state.region.title}.
        </h2>
        <h3 className='overview-occupation'>
          Occupation Summary for {this.state.occupation.title}.
        </h3>
        <div className='overview-statistics'>
          <div className='overview-jobs'>
            <div className='overview-jobs-inner'>
              <p>{this.state.summary.jobs.regional}</p>
              <p>Jobs({this.state.summary.jobs.year})</p>
              <p>
                {this.state.jobPerc}
                <span className={this.state.jobGrowth ? 'positive' : 'negative'}> {this.state.jobGrowth ? 'above' : 'below'} </span>
                National average
              </p>
            </div>
          </div>
          <div className='overview-change'>
            <div className='overview-change-inner'>
              <p className={this.state.jobGrowth ? 'positive' : 'negative'}>{this.state.summary.jobs_growth.regional}%</p>
              <p>% Change ({this.state.summary.jobs_growth.start_year})-({this.state.summary.jobs_growth.end_year})</p>
              <p>Nation: <span className={this.state.jobGrowth ? 'positive' : 'negative'}>+{this.state.summary.jobs_growth.national_avg}%</span></p>
            </div>
          </div>
          <div className='overview-earnings'>
            <div className='overview-earnings-inner'>
              <p>${this.state.summary.earnings.regional}/hr</p>
              <p>Median Hourly Earnings</p>
              <p>Nation: ${this.state.summary.earnings.national_avg}/hr</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
