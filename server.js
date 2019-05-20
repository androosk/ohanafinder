const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static(__dirname + '/app/public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
// require('./app/routing/apiRoutes')
require('./app/routing/htmlRoutes')(app)

app.listen(PORT, ()=>{
  console.log('App listening on PORT: ' + PORT)
})
