import React from 'react'
import * as d3 from 'd3'

import './style.css'

export default class Industry extends React.Component{
  constructor(props){
    super(props)
    this.state={
      report: '',
    }
    this.buildBarChart = this.buildBarChart.bind(this)
  }

  componentWillReceiveProps(nextProps){
    this.setState({report: nextProps.report})
  }

  componentDidMount() {
    this.buildBarChart()
  }

  // componentDidUpdate() {
  //   this.buildBarChart()
  // }


  buildBarChart(){
    let listItems = d3.select('.industry-chart').selectAll('p').data(this.props.report.employing_industries.industries).enter().append('li').classed('clearfix', true)

    listItems.append('p')
      .style('width', (d) => d.perc_occupation_in_industry + '%')
      .text((d) => d.title)

    listItems.append('span')
      .text((d) => d.perc_total_jobs_in_industry + '%')

    listItems.append('span')
      .text((d) => d.perc_occupation_in_industry + '%')

    listItems.append('span')
      .text((d) => d.in_occupation_jobs)
  }


  render(){
    return(
      <div className='chart-container'>
        <div className='chart-header'>
          <h2 className='chart-header-title'>Industries Employing {this.props.report.occupation.title}</h2>
          <p className='industry'>Industry</p>
          <p className='fl-right'>% of Total Jobs in Industry
            <span>({this.props.report.summary.jobs.year})</span>
          </p>
          <p className='fl-right'>% of Occupation Jobs in Industry
            <span>({this.props.report.summary.jobs.year})</span>
          </p>
          <p className='fl-right'>Occupation Jobs in Industry
            <span>({this.props.report.summary.jobs.year})</span>
          </p>
        </div>
        <ul className='industry-chart'></ul>
      </div>
    )
  }
}
