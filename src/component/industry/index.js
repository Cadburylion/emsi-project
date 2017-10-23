import React from 'react'
import d3 from 'd3'

export default class Industry extends React.Component{
  constructor(props){
    super(props)
    this.state={
      occupation: '',
      region: '',
      summary: '',
      trend_comparison: '',
      employing_industries: '',
    }
  }

  componentWillMount(){
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
    let summary = this.state.summary
    return(
      <div className='chart-container'>
        <div className='chart-header'>
          <p className='industry'>Industry</p>
          <p className='fl-right'>% of Total Jobs in Industry
            <span>({summary.jobs.year})</span>
          </p>
          <p className='fl-right'>% of % of Occupation Jobs in Industry
            <span>({summary.jobs.year})</span>
          </p>
          <p className='fl-right'>Occupation Jobs in Industry
            <span>({summary.jobs.year})</span>
          </p>
        </div>
        <ul className='industryChart'></ul>
      </div>
    )
  }
}
