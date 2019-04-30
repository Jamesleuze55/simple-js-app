var pokemonRepository = (function() {
  var repository = [
    {name: 'Weedle', height: 0.3, types: ['bugs', 'poision']},
    {name: 'Bulbasaur', height: 0.7, types: ['grass', 'poision']},
    {name: 'Gigalith', height: 1.7, types: ['rock']},
    {name: 'Beedrill' , height: 1 , types: ['bug', 'poison']},
    {name: 'Persian' , height: 1, types: ['normal']},
    {name: 'Machamp', height: 1.6, types: ['fighting']},
    {name: 'Seaking', height: 1.3, types: ['water']},
    {name: 'Moltres', height: 2.0, types: ['fire', 'flying']},
    {name: 'Magcargo', height: 0.8 , types:['fire', 'rock']},
    {name: 'Entei', height: 2.1, types:['fire']},
    {name: 'Torkoal', height: 0.5, types:['fire']},
    {name: 'Crawdaunt', height: 1.1, types:['dark', 'water']},
    {name: 'Metagross', height: 1.6, types:['psychic', 'steel']},
    {name: 'Latios', height: 2.0, types:['psychic', 'dragon']},
    {name: 'Giratina', height: 4.5, types:['dragon', 'ghost']},
    {name: 'Emboar', height: 1.6, types:['fire', 'fighting']},
    {name: 'Herdier', height: 0.9, types:['normal']},
    {name: 'Krokorok', height: 1, types:['dark', 'ground']},
    {name: 'Carracosta', height: 1.2, types:['water', 'rock']},
    {name: 'Wobuffet', height: 1.3, types:['psychic']},
  ];

  function getAll() {
    return repository
  }

  function add(item){
    return repository.push(item)
  }

  return {
    add: add,
    getAll: getAll // <- this here allows us to do just that, access private data
  };

})();

pokemonRepository.getAll().forEach(function(pokemon){
  var h ='';

//document.write('<h1>Pokemon</h1>');
var h ='';
for (var a = 0; a<pokemonRepository.length; a++) {
  if (pokemonRepository[a].height > 16.9) {
    h = "-Wow That's Big!!";
  }
}
  console.log('Name: ' + pokemon.name + 'height: ' + pokemon.height + h);
});

//var listItems = document.querySelector('ul').getElementsByClassName(pokemon_name);

//console.log(listitems);



//Adding pokemon
function addListItem (jim) {
  console.log(jim);
}

var weedle={name: 'Weedle', height: 3, types: ['bugs', 'poision']};
var bulbasaur={name: 'Bulbasaur', height: 7, types: ['grass', 'poision']};
addListItem(weedle);
addListItem(bulbasaur);

/*function addingNumbers (jim, al, bill, joe) {
  var total=(jim+al+bill+joe);
  console.log(total)
}

addingNumbers(3, 2, 1, 0);
addingNumbers(4, 3, 2, 1);*/
