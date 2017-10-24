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
    this.mockAJAX = this.mockAJAX.bind(this)
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

    this.mockAJAX(emsiData)
  }

  mockAJAX(data){
    let dataCopy = JSON.parse(JSON.stringify(data))
    this.handleData(dataCopy)

    this.setState({
      report: dataCopy,
    })
  }

  handleData(data){
    data = util.computePercentages(data)
    data = util.addCommas(data)
  }

  dashboardData(){
    this.mockAJAX(emsiData)
  }

  dashboardMockData(){
    this.mockAJAX(mockData)
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
