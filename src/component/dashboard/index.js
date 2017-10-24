import React from 'react'

import * as util from '../../lib/util.js'
import * as emsiData from '../../db/data.json'
import * as mockData from '../../db/mock-data.json'

import Trend from '../trend/index.js'
import Overview from '../overview/index.js'
import Industry from '../industry/index.js'

export default class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      report: '',
    }
    this.handleData = this.handleData.bind(this)
    this.dashboardData = this.dashboardData.bind(this)
    this.dashboardMockData = this.dashboardMockData.bind(this)
  }

  componentDidMount(){
    // AJAX request

    // fetch(data, {method: 'GET'})
    //   .then((res) => res.ok ? res.json() : '')
    //    .then((res) => perform logic on data)
    //   .then((res) => setState({report: res}))

    let dataCopy = JSON.parse(JSON.stringify(emsiData))
    this.handleData(dataCopy)

    this.setState({
      report: dataCopy,
    })
  }

  handleData(data){
    data = util.computePercentages(data)

    data = util.addCommas(data)

    // data.summary.jobs.regional = util.addCommas(data.summary.jobs.regional)
    //
    // data.summary.jobs.national_avg = util.addCommas(data.summary.jobs.national_avg)
    //
    // data.employing_industries.industries.forEach((e) => {
    //   e.in_occupation_jobs = util.addCommas(e.in_occupation_jobs)
    //   e.jobs = util.addCommas(e.jobs)
    // })
  }

  dashboardData(){
    this.setState({report: emsiData})
  }

  dashboardMockData(){
    this.setState({report: mockData})
  }

  render(){
    let reportCopy = JSON.parse(JSON.stringify(this.state.report))
    console.log('dashboard state: ', this.state.report)
    return(
      <div className='component-container'>
        <div onClick={this.dashboardData}> Emsi Data </div>
        <div onClick={this.dashboardMockData}> Mock Data </div>
        {util.renderIf(this.state.report,
          <div>
            <Overview report={reportCopy} />
            <Trend report={reportCopy} />
            <Industry report={reportCopy} />
          </div>
        )}
      </div>
    )
  }
}
