import React from 'react'
import * as d3 from 'd3'

import './style.css'

export default class Trend extends React.Component {

  render(){
    let {trend_comparison} = this.props.report
    return(
      <div className='trend-container'>
        <div className='trend-bar-header'>
          <p className='trend-bar-title'>Region</p>
          <p className='fl-right'>% Change</p>
          <p className='fl-right'>Change</p>
          <p className='fl-right'>
            <span>{trend_comparison.end_year}</span> jobs
          </p>
          <p className='fl-right'>
            <span>{trend_comparison.start_year}</span> jobs
          </p>
        </div>
        <ul>
          <li className='trend-li clearfix'>
            <p>Region</p>
            <span>{this.props.report.summary.jobs_growth.regional}%</span>
            <span>{trend_comparison.regional[trend_comparison.regional.length - 1] - trend_comparison.regional[0]}</span>
            <span>{trend_comparison.regional[trend_comparison.regional.length - 1]}</span>
            <span>{trend_comparison.regional[0]}</span>
          </li>
          <li className='trend-li clearfix'>
            <p>State</p>
            <span>{this.props.report.summary.jobs_growth.state}%</span>
            <span>{trend_comparison.state[trend_comparison.state.length - 1] - trend_comparison.state[0]}</span>
            <span>{trend_comparison.state[trend_comparison.state.length - 1]}</span>
            <span>{trend_comparison.state[0]}</span>
          </li>
          <li className='trend-li clearfix'>
            <p>Nation</p>
            <span>{this.props.report.summary.jobs_growth.national_avg}%</span>
            <span>{trend_comparison.nation[trend_comparison.nation.length - 1] - trend_comparison.nation[0]}</span>
            <span>{trend_comparison.nation[trend_comparison.nation.length - 1]}</span>
            <span>{trend_comparison.nation[0]}</span>
          </li>
        </ul>
      </div>
    )
  }
}
