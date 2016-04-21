var xhr = require('xhr')
var example = require('./views/example.hbs')
var $ = require('jquery')


xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body)
  document.body.innerHTML = example({ name: "Space" });
})

// xhr.get('https://api.spotify.com/v1/search?q=phox&type=artist', function(err, data) {
//   if (err) console.log(err) // do something
//
//   console.log(data.body)
//   document.body.innerHTML = example({ name: "test" });
// })




// $(document).ready(function() {
//
//   var getMeowth = function() {
//     console.log("testing")
//     xhr.get('http://pokeapi.co/api/v2/pokemon/meowth', function(err, data) {
//     if (err) console.log(err) // do something
//       var JSONd = JSON.parse(data.body)
//       var ability = JSONd.abilities[0].ability.name

//     document.body.innerHTML = example({ name: "Pokemon", pokeName: JSONd.name,
//       ability1: JSONd.abilities[0].ability.name, ability2: JSONd.abilities[1].ability.name,
//       ability3: JSONd.abilities[2].ability.name });
//
//     })
//   }
//
//     $("button").click(getMeowth)
// })
