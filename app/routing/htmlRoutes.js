const path = require('path')

module.exports = (app)=>{
  app.get('/survey', (req,res,end)=>{
    res.sendFile(path.join(__dirname, '../public/survey.html'))
  })
  app.use('/*', (req,res,end)=>{
    res.sendFile(path.join(__dirname, '../public/home.html'))
  })
}
