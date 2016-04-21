var xhr = require('xhr')
var example = require('./views/example.hbs')
var $ = require('jquery')

xhr.get('https://api.spotify.com/v1/search?type=phox', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body)
  document.body.innerHTML = example({ name: data.body });
})
