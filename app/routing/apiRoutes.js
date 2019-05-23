const ohana = require('../data/ohana')

module.exports = (app)=>{
  app.get('/api/ohana', (req,res)=>{
    res.json(ohana)
  })
// I would just like to complain that this method drives the programmer to using nested for loops. Gross. If my math was better, I'm sure I could have figured out a better solution.
  app.post('/api/ohana', (req,res)=>{
    // Iterate over current ohana array to compare and find the best match.
    let userInput = req.body
    let match = 0
    let minDif = 40
    for (let i=0; i < ohana.length; i++) {
      let totDif = 0
      for (let j = 0; j < ohana[i].scores.length; j++) {
        let difference = Math.abs(userInput.scores[j] - ohana[i].scores[j])
        totDif += difference
      }
        if(totDif < minDif) {
          match = i
          minDif = totDif
        }
    }
    // add it to array and return to survey
    ohana.push(userInput)
    res.json(ohana[match])
  })
}
