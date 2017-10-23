import React from 'react'
import * as d3 from 'd3'

import './style.css'

export default class Trend extends React.Component {
  constructor(props){
    super(props)
    this.state={
      report: this.props.report,
    }
    this.addCommas = this.addCommas.bind(this)
    this.stateChangePerc = this.stateChangePerc.bind(this)
    this.computePercentages = this.computePercentages.bind(this)
  }

  componentWillMount() {
    this.stateChangePerc(this.state.report.trend_comparison.state)
  }

  addCommas(num) {
    return (num + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  }

  stateChangePerc(data) {
    this.setState({
      stateChangePerc: Math.round((((data[data.length - 1] - data[0]) / data[0]) * 100) * 10) / 10,
    })
  }

  computePercentages(data){
    data.industries.forEach(e => {
      e.perc_occupation_in_industry = Math.round(((e.in_occupation_jobs / data.jobs) * 100) * 10) / 10

      e.perc_total_jobs_in_industry = Math.round(((e.in_occupation_jobs / e.jobs) * 100) * 10) / 10
    })
    return data
  }

  render(){
    console.log('trend component state: ', this.state)
    let trend = this.state.report.trend_comparison
    return(
      <div className='trend-container'>
        <div className='trend-bar-header'>
          <p className='trend-bar-title'>Region</p>
          <p className='fl-right'>
            <span>{this.state.report.trend_comparison.end_year}</span> jobs
          </p>
          <p className='fl-right'>
            <span>{this.state.report.trend_comparison.start_year}</span> jobs
          </p>
          <p className='fl-right'>Change</p>
          <p className='fl-right'>% Change</p>
        </div>
        <ul>
          <li className='trend-li clearfix'>
            <p>Region</p>
            <span>{this.state.report.summary.jobs_growth.regional}%</span>
            <span>{trend.regional[trend.regional.length - 1] - trend.regional[0]}</span>
            <span>{trend.regional[trend.regional.length - 1]}</span>
            <span>{trend.regional[0]}</span>
          </li>
          <li className='trend-li clearfix'>
            <p>State</p>
            <span>{this.state.stateChangePerc}%</span>
            <span>{trend.state[trend.state.length - 1] - trend.state[0]}</span>
            <span>{trend.state[trend.state.length - 1]}</span>
            <span>{trend.state[0]}</span>
          </li>
          <li className='trend-li clearfix'>
            <p>Nation</p>
            <span>{this.state.report.summary.jobs_growth.national_avg}%</span>
            <span>{trend.nation[trend.nation.length - 1] - trend.nation[0]}</span>
            <span>{trend.nation[trend.nation.length - 1]}</span>
            <span>{trend.nation[0]}</span>
          </li>
        </ul>
      </div>
    )
  }
}
