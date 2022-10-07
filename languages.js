const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const express = require('express')
const app = express()

const url = ['https://www.pghcareerconnector.com/jobs/']

url.forEach(element => {
  axios(element)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const languages = []
  
    $('html:contains("Print")', html).each(function() {
      const language = $(this).text()
      
      languages.push({
        language,
        
      })
    })
    console.log(languages)
    const numOfLanguages = languages.length
    console.log(numOfLanguages)
  }).catch(err => console.log(err))
})


app.listen(PORT, () => console.log(`server running on port ${PORT}`))

