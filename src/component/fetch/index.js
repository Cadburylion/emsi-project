import React from 'react'

import * as data from '../../db/data.json'

import Industries from '../industries/index.js'

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
    return(
      <Industries report={this.state.report}/>
    )
  }
}
