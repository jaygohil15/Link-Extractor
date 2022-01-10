const express = require('express')

const app = express()

app.get('/', (req, res) => {
   console.log('get req')
   res.sendFile('./link_extractor.html', {root: __dirname})
})

app.listen(8080, () => {
   console.log('Server Running on 8080')
})