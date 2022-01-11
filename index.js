const express = require('express')

const app = express()

app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
   console.log('get req')
   res.sendFile('./link_extractor.html', {root: __dirname})
})

app.listen(process.env.PORT || 8080, () => {
   console.log('Server Running on 8080')
})