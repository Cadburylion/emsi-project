import React from 'react'
import * as d3 from 'd3'

import './style.css'

export default class Overview extends React.Component {
  constructor(props){
    super(props)
    this.state={
      report: this.props.report || '',
    }
    // this.addCommas = this.addCommas.bind(this)
    // this.computePercentage = this.computePercentage.bind(this)
  }

  componentWillReceiveProps(nextProps){
    // console.log('will receive props', nextProps)
    this.setState({
      report: nextProps.report,
    })
  }

  componentWillMount(){
    this.setState({
      report: this.props.report,
    })
    // this.computePercentage(this.props.report.summary)

    // let {summary} = this.props.report

    // summary.jobs.regional = this.addCommas(summary.jobs.regional)
    // summary.jobs.national_avg = this.addCommas(summary.jobs.national_avg)
  }


  // addCommas(num) {
  //   return (num + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  // }

  computePercentage(data){
    // let jobPerc = Math.round(((data.jobs.regional / data.jobs.national_avg) * 100) * 10 ) /10
    //
    // this.setState({
    //   jobPerc: jobPerc + '%',
    //   jobGrowth: jobPerc > 100 ? true : false,
    //   regGrowth: data.jobs_growth.regional > 0 ? true : false,
    //   natGrowth: data.jobs_growth.national_avg > 0 ? true : false,
    // })
  }

  render(){
    return(
      <div className='overview-container'>
        <h1 className='overview-title'>Occupation Overview</h1>
        <h2 className='overview-description'>
          {this.state.report.occupation.title} in {this.state.report.region.title}.
        </h2>
        <h3 className='overview-occupation'>
          Occupation Summary for {this.state.report.occupation.title}
        </h3>
        <div className='overview-statistics'>
          <div className='overview-jobs'>
            <div className='overview-jobs-inner'>
              <p>{this.state.report.summary.jobs.regional}</p>
              <p>Jobs({this.state.report.summary.jobs.year})</p>
              <p>
                {this.props.report.summary.jobs_growth.job_perc}%
                <span className={this.props.report.summary.jobs_growth.job_perc > 100 ? 'positive' : 'negative'}> {this.props.report.summary.jobs_growth.job_perc ? 'above' : 'of'} </span>
                National average
              </p>
            </div>
          </div>
          <div className='overview-change'>
            <div className='overview-change-inner'>
              <p className={this.props.report.summary.jobs_growth.regional > 0 ? 'positive' : 'negative'}>{this.props.report.summary.jobs_growth.regional > 0 ? '+' : ''}{this.state.report.summary.jobs_growth.regional}%</p>
              <p>% Change ({this.state.report.summary.jobs_growth.start_year})-({this.state.report.summary.jobs_growth.end_year})</p>
              <p>Nation: <span className={this.props.report.summary.jobs_growth.national_avg > 0 ? 'positive' : 'negative'}>{this.props.report.summary.jobs_growth.national_avg > 0 ? '+' : ''}{this.props.report.summary.jobs_growth.national_avg}%</span></p>
            </div>
          </div>
          <div className='overview-earnings'>
            <div className='overview-earnings-inner'>
              <p>${this.state.report.summary.earnings.regional}/hr</p>
              <p>Median Hourly Earnings</p>
              <p>Nation: ${this.state.report.summary.earnings.national_avg}/hr</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
