import React from 'react'
import './style.css'

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
      emsiData: true,
    }
    this.mockAJAX = this.mockAJAX.bind(this)
    this.handleData = this.handleData.bind(this)
    this.toggleCurrent = this.toggleCurrent.bind(this)
  }

  componentDidMount(){
    // AJAX request would go here

    // fetch(url, {method: 'GET'})
    //   .then((res) => res.ok ? res.json() : '')
    //   .then((res) => perform logic on data)
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
    data = util.sortIndustries(data)
  }

  toggleCurrent(btn){
    this.setState({
      emsiData: btn === 'emsi' ? true : false,
    })
  }

  render(){
    let reportCopy = JSON.parse(JSON.stringify(this.state.report))
    return(

      <div className='component-container'>

        <div className='ajax-btn' onClick={() => {
          this.mockAJAX(mockData)
          this.toggleCurrent(null)
        }}>
          <span className={this.state.emsiData ? '' : 'current'}>Mock Data</span>
          <span></span>
          <span></span>
        </div>

        <div className='ajax-btn' onClick={() => {
          this.mockAJAX(emsiData)
          this.toggleCurrent('emsi')
        }}>
          <span className={this.state.emsiData ? 'current' : ''}>Emsi Data</span>
          <span></span>
          <span></span>
        </div>

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
