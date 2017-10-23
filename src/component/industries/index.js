import React from 'react'

export default class Industry extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  componentwillMount(){
    let {occupation, region, summary, trend_comparison, employing_industries} = this.props.report

    this.setState({
      occupation: occupation,
      region: region,
      summary: summary,
      trend_comparison: trend_comparison,
      employing_industries: employing_industries,
    })
  }

  render(){
    console.log('this.state: ', this.state)
    return(
      <h1>Soli Deo Gloria</h1>
    )
  }
}
