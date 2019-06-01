const express = require('express')
const path = require('path')

const app = express()
app.get('/', function(_req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(process.env.PORT || 4000, function(){
    console.log(`Your node js server is running on port ${process.env.PORT || 4000}`)
})