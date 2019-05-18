const path = require('path')

module.exports = function(app) {
  app.get('/survey', (req,res,end)=>{
    res.sendFile(path.join(__dirname, '../public/survey.html'))
  })
  app.get('/*', (req,res,end)=>{
    res.sendFile(path.join(__dirname, '../public/home.html'))
  })
}
