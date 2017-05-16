const express = require('express')
const giffy = require('./gifSearch')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(`
    <div style="height:100vh;display:flex;justify-content:center;align-items:center;color:#777;">
      <h1>Free Code Camp Image Search API</h1>
    </div>
  `)
})

app.get('/api/imagesearch/:search', (req, res) => {
  const { search } = req.params
  const { offset } = req.query

  giffy.search(search, offset, (err, results) => {
    if (err) {
      res.json({
        error: 'Error fetching gifs'
      })
    } else {
      res.json(results)
    }
  })

})

app.get('/api/latest/imagesearch', (req, res) => {
  res.json(giffy.getHistory())
})

app.listen(port, () => console.log('server is running on port:', port))
