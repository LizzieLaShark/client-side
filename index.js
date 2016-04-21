var xhr = require('xhr')
var example = require('./views/example.hbs')
var $ = require('jquery')

xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body)
  document.body.innerHTML = example({ name: "Space" });
})



















// $(document).ready(function() {
//
//   var getMeowth = function() {
//     console.log("testing")
//     xhr.get('http://pokeapi.co/api/v2/pokemon/meowth', function(err, data) {
//     if (err) console.log(err) // do something
//       var JSONd = JSON.parse(data.body)
//       var ability = JSONd.abilities[0].ability.name
//   // console.log(JSONd)
//   // console.log(JSONd.name)
//   // console.log(JSONd.abilities[0].ability.name)
//   // console.log(JSONd.abilities[1].ability.name)
//   // console.log(JSONd.abilities[2].ability.name)
//     document.body.innerHTML = example({ name: "Pokemon", pokeName: JSONd.name,
//       ability1: JSONd.abilities[0].ability.name, ability2: JSONd.abilities[1].ability.name,
//       ability3: JSONd.abilities[2].ability.name });
//
//     })
//   }
//
//     $("button").click(getMeowth)
// })


// xhr.get('http://pokeapi.co/api/v2/ability/52', function(err, data) {
//   if (err) console.log(err) // do something
//     var JSONd = JSON.parse(data.body)

//   console.log(JSONd)
//   console.log(JSONd.effect_entries)
//   console.log(JSONd.effect_entries[0].effect)
//   // console.log(JSONd.name)
//   document.body.innerHTML = example({ abilities: JSONd.effect_entries });
// })

// xhr.get('http://pokeapi.co/api/v2/api/v2/pokemon-habitat/52', function(err, data) {
//   if (err) console.log(err) // do something
//     var JSONd = JSON.parse(data.body)

//   console.log(JSONd)
//   console.log(JSONd.body)
//   // console.log(JSONd.name)
//   document.body.innerHTML = example({ name: "Pokemon!" });
// })
