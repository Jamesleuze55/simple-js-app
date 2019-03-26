/* var repository = [
  {name: 'Weedle', height: 3, types: ['bugs', 'poision']},
  {name: 'Bulbasaur', height: 7, types: ['grass', 'poision']},
  {name: 'Gigalith', height: 17, types: ['rock']},
];

console.log(repository);

document.write('<h1>Pokemon</h1>');
var h ='';
for (var a = 0; a<repository.length; a++) {
 if (repository[a].height >16.9) {
    h = "-Wow That's Big!!";
  document.write('<div>' + repository[a].name + '(height: ' +  repository[a].height + ') ' + h +' </div>');
}
*/



var repository = [
 {name: 'Weedle', height: 3, types: ['bugs', 'poision']},
 {name: 'Bulbasaur', height: 7, types: ['grass', 'poision']},
 {name: 'Gigalith', height: 17, types: ['rock']},
];

console.log(repository);

document.write('<h1>Pokemon</h1>');
var h ='';
for (var a = 0; a<repository.length; a++) {
 if (repository[a].height > 16.9) {
   h = " That's Big!!";
 }

 document.write('<div>' + repository[a].name + '(height: ' + repository[a].height +') ' + h +' </div>');
}
