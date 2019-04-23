var pokemonRepository = (function() {
  var repository = [
    {name: 'Weedle', height: 3, types: ['bugs', 'poision']},
    {name: 'Bulbasaur', height: 7, types: ['grass', 'poision']},
    {name: 'Gigalith', height: 17, types: ['rock']},
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

/*document.write('<h1>Pokemon</h1>');
var h ='';
for (var a = 0; a<repository.length; a++) {
  if (repository[a].height > 16.9) {
    h = "-Wow That's Big!!";
  }

  console.log('Name: ' + pokemon.name + 'height: ' + pokemon.height + h);
});*/
