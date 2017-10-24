export const renderIf = (test, component) => test ? component : undefined

export const addCommas = (data) => {
  // let insertCommas = replace(/(\d)(?=(\d{3})+$)/g, '$1,')

  data.summary.jobs.regional = (data.summary.jobs.regional + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,')

  data.summary.jobs.national_avg = (data.summary.jobs.national_avg + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,')

  data.employing_industries.industries.forEach((e) => {
    e.in_occupation_jobs = (e.in_occupation_jobs + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,')

    e.jobs = (e.jobs + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  })

}


// addCommas(num) {
//   return (num + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,')
// }




// data.summary.jobs.regional = util.addCommas(data.summary.jobs.regional)
//
// data.summary.jobs.national_avg = util.addCommas(data.summary.jobs.national_avg)
//
// data.employing_industries.industries.forEach((e) => {
//   e.in_occupation_jobs = util.addCommas(e.in_occupation_jobs)
//   e.jobs = util.addCommas(e.jobs)




export const computePercentages = (data) => {

  data.summary.jobs_growth.job_perc = Math.round(((data.summary.jobs.regional / data.summary.jobs.national_avg) * 100) * 10 ) /10

  data.employing_industries.industries.forEach(e => {
    e.perc_occupation_in_industry = Math.round(((e.in_occupation_jobs / data.employing_industries.jobs) * 100) * 10) / 10

    e.perc_total_jobs_in_industry = Math.round(((e.in_occupation_jobs / e.jobs) * 100) * 10) / 10
  })
  return data
}
