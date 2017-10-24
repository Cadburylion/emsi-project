export const renderIf = (test, component) => test ? component : undefined

export const addCommas = (data) => {

  data.summary.jobs.regional = (data.summary.jobs.regional + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,')

  data.summary.jobs.national_avg = (data.summary.jobs.national_avg + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,')

  data.employing_industries.industries.forEach((e) => {
    e.in_occupation_jobs = (e.in_occupation_jobs + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,')

    e.jobs = (e.jobs + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  })

  return data
}

export const computePercentages = (data) => {
  let {summary} = data,
    {trend_comparison} = data,
    {employing_industries} = data

  summary.jobs_growth.job_perc = Math.round(((summary.jobs.regional / summary.jobs.national_avg) * 100) * 10 ) /10

  summary.jobs_growth.state = Math.round((((trend_comparison.state[trend_comparison.state.length - 1] - trend_comparison.state[0]) / trend_comparison.state[0]) * 100) * 10) / 10,

  employing_industries.industries.forEach(e => {
    e.perc_occupation_in_industry = Math.round(((e.in_occupation_jobs / employing_industries.jobs) * 100) * 10) / 10

    e.perc_total_jobs_in_industry = Math.round(((e.in_occupation_jobs / e.jobs) * 100) * 10) / 10
  })

  data.summary.jobs_growth

  return data
}

export const sortIndustries = (data) => {

  data.employing_industries.industries.sort((a, b) => {
    return b.perc_occupation_in_industry - a.perc_occupation_in_industry
  })
  return data
}
