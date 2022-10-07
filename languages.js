const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const express = require('express')
const app = express()


// below are variables for what you want to search (keywords within specific elements on a page.) & an array of URL's to search within.
const searchCriteria = 'p:contains("Technical")'
const url = ['https://www.pghcareerconnector.com/jobs/']

//forEach loops through the above URL's and axios/cheerio parse the data within the elements
url.forEach(element => {
  axios(element)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const languages = []
  
    $(searchCriteria, html).each(function() {
      const language_Reference = $(this).text()
      
      languages.push({
        language_Reference,
        
      })
    })
    console.log(languages)
    const numOfReferences = languages.length
    console.log(`Number of References: ${numOfReferences}`)
  }).catch(err => console.log(err))
})


app.listen(PORT, () => console.log(`server running on port ${PORT}`))

