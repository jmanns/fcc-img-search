# Free Code Camp Image Search Abstraction Layer Project

### Search Example

````
https://fcc-img-search-app.herokuapp.com/api/imagesearch/lolcats?offset=3
````

Example response
````json
[
  {
    "text": "lol-cats-v3BymIFUbfYre",
    "pageUrl": "http://giphy.com/gifs/lol-cats-v3BymIFUbfYre",
    "gifUrl": "http://media1.giphy.com/media/v3BymIFUbfYre/giphy.gif",
    "rating": "g"
  },
  {
    "text": "cat-animated-wtf-Vez16nHwgu1vG",
    "pageUrl": "http://giphy.com/gifs/cat-animated-wtf-Vez16nHwgu1vG",
    "gifUrl": "https://media3.giphy.com/media/Vez16nHwgu1vG/giphy.gif",
    "rating": "g"
  },
  {
    "text": "cat-animated-wtf-wUzk9ClilVnJS",
    "pageUrl": "http://giphy.com/gifs/cat-animated-wtf-wUzk9ClilVnJS",
    "gifUrl": "https://media1.giphy.com/media/wUzk9ClilVnJS/giphy.gif",
    "rating": "g"
  }
]
````

### View Search History

````
https://fcc-img-search-app.herokuapp.com/api/latest/imagesearch/
````

Example response
````json
[
  {
    "search": "lol cats",
    "dateTime": "Tue May 16 2017 20:10:23 GMT+0000 (UTC)"
  }
]
````
