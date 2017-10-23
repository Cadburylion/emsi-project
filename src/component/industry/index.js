import React from 'react'
import * as d3 from 'd3'

import './style.css'

export default class Industry extends React.Component{
  constructor(props){
    super(props)
    this.state={
      occupation: this.props.report.occupation,
      region: this.props.report.region,
      summary: this.props.report.summary,
      trend_comparison: this.props.report.trend_comparison,
      employing_industries: this.props.report.employing_industries,
    }
    this.computePercentages = this.computePercentages.bind(this)
    this.buildBarChart = this.buildBarChart.bind(this)
  }

  componentWillMount(){
    let {employing_industries} = this.props.report

    employing_industries = this.computePercentages(employing_industries)
  }

  componentDidMount() {
    this.buildBarChart()
  }

  componentDidUpdate() {
    this.buildBarChart()
  }

  computePercentages(data){
    data.industries.forEach(e => {
      e.perc_occupation_in_industry = Math.round(((e.in_occupation_jobs / data.jobs) * 100) * 10) / 10

      e.perc_total_jobs_in_industry = Math.round(((e.in_occupation_jobs / e.jobs) * 100) * 10) / 10
    })
    return data
  }

  buildBarChart(){
    let listItems = d3.select('.industry-chart').selectAll('p').data(this.state.employing_industries.industries).enter().append('li')

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
    console.log(this.state.employing_industries.industries)
    return(
      <div className='chart-container'>
        <div className='chart-header'>
          <p className='industry'>Industry</p>
          <p className='fl-right'>% of Total Jobs in Industry
            <span>({this.state.summary.jobs.year})</span>
          </p>
          <p className='fl-right'>% of Occupation Jobs in Industry
            <span>({this.state.summary.jobs.year})</span>
          </p>
          <p className='fl-right'>Occupation Jobs in Industry
            <span>({this.state.summary.jobs.year})</span>
          </p>
        </div>
        <ul className='industry-chart'></ul>
      </div>
    )
  }
}
