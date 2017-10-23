import React from 'react'

import * as data from '../../db/data.json'

import Overview from '../overview/index.js'
import Industry from '../industry/index.js'

export default class Fetch extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  componentWillMount(){
    // fetch(data, {method: 'GET'})
    //   .then((res) => res.ok ? res.json() : '')
    //   .then((res) => setState({res: res}))

    this.setState({
      report: data,
    })


  }

  render(){
    let reportCopy = JSON.parse(JSON.stringify(this.state.report))
    return(
      <div className='component-container'>
        <Overview report={reportCopy} />
        <Industry report={reportCopy} />
      </div>
    )
  }
}
