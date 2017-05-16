const request = require('request')
const fs = require('fs')

const search = (searchTerm, limit = 10, cb) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=${limit}`
  request({ url, json: true }, (error, response, body) => {
    if (error) {
      return cb(error)
    }
    const results = body.data.map(gif => {
      return {
        text: gif.slug,
        pageUrl: gif.url,
        gifUrl: gif.images.original.url,
        rating: gif.rating
      }
    })
    cb(null, results)
    _save(searchTerm)
  })
}

const getHistory = () => {
  try {
    const historyString = fs.readFileSync('history-data.json')
    return  JSON.parse(historyString)
  } catch (err) {
    return []
  }
}

const _save = (search) => {
  const history = getHistory()
  history.unshift({
    search,
    dateTime: new Date().toString()
  })

  if (history.length > 10) {
    history.splice(-1, 1)
  }

  fs.writeFile('history-data.json', JSON.stringify(history), (err) => {
    if (err) {
      console.log('Error saving search')
    }
  })
}

module.exports = {
  search,
  getHistory
}
