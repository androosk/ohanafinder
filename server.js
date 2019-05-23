const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static(__dirname + '/app/public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)

app.listen(PORT, ()=>{
  console.log('App listening on PORT: ' + PORT)
})
