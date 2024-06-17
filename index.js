require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/twitter' , (req , res) => {
    res.send('Rupammondal123')
})

app.get('/login' , (req , res) => {
    res.send('<h1>You are logged in<h1/>')
})

app.listen(process.env.port , () => {
    console.log(`Example app lisening on port ${port}`)
})