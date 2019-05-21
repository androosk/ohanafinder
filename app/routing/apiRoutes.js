const ohana = require('../data/ohana')

module.exports = (app)=>{
  app.get('/api/ohana', (req,res)=>{
    res.json(ohana)
  })
  app.post('api/ohana', (req,res)=>{
    ohana.push(req.body)
    res.json(true)
  })
}
