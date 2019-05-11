
//IIFE wrap-:please wrap all within interval
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
    {name: 'Wobbuffet', height: 1.3, types:['psychic']},
  ];

  function getAll() {
    return repository;
  }

  function add(pokemon){
    return repository.push(pokemon);
  }

  return {
    add: add,
    getAll: getAll
   // <- this here allows us to do just that, access private data
  };

})();

pokemonRepository.getAll().forEach(function(pokemon){   //The pokemonRepository points to the var=pokemonRepository at the top of code
  addListItem(pokemon);                                  //getAll is a function and grabs all the pokemon in the pokemonRepository and give back as an array; forEach is another function that is run on the array and  it requires us to pass in a function, the function then needs to excpt an item from the array and then do something with it.
});


//Adding pokemon
function addListItem (pokemon) {              //This is the function
  var listItem = document.createElement("li");  //This creates the li element
  var button = document.createElement("button"); //This creates the button
  button.classList.add("pokemon_name");         //This will mimic style as the others button by assigning the class for the button styling
  document.querySelector("#pokemon-list").appendChild(listItem); // querySelector looks for the id/class and then attaches the li(child) that was done on line 49 to the list
  button.innerText=pokemon.name;          //This adds the text "button" to the page
  listItem.appendChild(button);       //This adds the button element to the li(child) which was added on line52 to ther page
  button.addEventListener ('click', function (){  //This is adding eventlistener to the button.  So when the button is clicked the function () then refers to the next step which showDetails(pokemon) below.shows the details of the pokemon clicked in the console.  The pokemon is being pulled in from the arrugement of the original function "function addListItem (pokemon)" above
    showDetails(pokemon);       // This then looks for the showDetails function.  Since the function it looking for is not located on a local level within the addListItem function, it then looks to the global scope and find the function "function showDetails (pokemon) { console.log(pokemon) }" and then runs the console.log and with register to the console the pokemon info for the pokemon button clicked.
  });
}


function showDetails (pokemon) {
  console.log(pokemon);
}
























/*var h ='';

document.write('<h1>Pokemon</h1>');
var h ='';
for (var a = 0; a<pokemonRepository.length; a++) {
  if (pokemonRepository[a].height > 16.9) {
    h = "-Wow That's Big!!";
  }
}
  console.log('Name: ' + pokemon.name + 'height: ' + pokemon.height + h);
});



var weedle={name: 'Weedle', height: 3, types: ['bugs', 'poision']};
var bulbasaur={name: 'Bulbasaur', height: 7, types: ['grass', 'poision']};
var gigalith={name: 'Gigalith', height: 1.7, types: ['rock']};
var beedrill={name: 'Beedrill' , height: 1, types: ['bug', 'poison']};
var persian={name: 'Persian' , height: 1, types: ['normal']};
var machamp={name: 'Machamp', height: 1.6, types: ['fighting']};
var seaking={name: 'Seaking', height: 1.3, types: ['water']};
var moltres={name: 'Moltres', height: 2.0, types: ['fire', 'flying']};
var magcargo={name: 'Magcargo', height: 0.8 , types:['fire', 'rock']};
var entei={name: 'Entei', height: 2.1, types:['fire']};
var torkoal={name: 'Torkoal', height: 0.5, types:['fire']};
var crawdaunt={name: 'Crawdaunt', height: 1.1, types:['dark', 'water']};
var metagross={name: 'Metagross', height: 1.6, types:['psychic', 'steel']};
var latios={name: 'Latios', height: 2.0, types:['psychic', 'dragon']};
var giratina={name: 'Giratina', height: 4.5, types:['dragon', 'ghost']};
var emboar={name: 'Emboar', height: 1.6, types:['fire', 'fighting']};
var herdier={name: 'Herdier', height: 0.9, types:['normal']};
var krokorok={name: 'Krokorok', height: 1, types:['dark', 'ground']};
var carracosta={name: 'Carracosta', height: 1.2, types:['water', 'rock']};
var wobbuffet={name: 'Wobuffet', height: 1.3, types:['psychic']};
addListItem(weedle);
addListItem(bulbasaur);
addListItem(gigalith);
addListItem(beedrill);
addListItem(persian);
addListItem(machamp);
addListItem(seaking);
addListItem(moltres);
addListItem(magcargo);
addListItem(entei);
addListItem(torkoal);
addListItem(crawdaunt);
addListItem(metagross);
addListItem(latios);
addListItem(giratina);
addListItem(emboar);
addListItem(herdier);
addListItem(krokorok);
addListItem(carracosta);
addListItem(wobbuffet);



/*function addingNumbers (jim, al, bill, joe) {
  var total=(jim+al+bill+joe);
  console.log(total)
}

addingNumbers(3, 2, 1, 0);
addingNumbers(4, 3, 2, 1);*/
