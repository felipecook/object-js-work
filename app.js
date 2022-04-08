// Creating my first JS Object :D
let beginnerUser = {
  name: 'John',
  age: 30,


}

// Displays the users age
console.log(beginnerUser.age);


// Add a property
beginnerUser.myCar = 'Volvo';

//Should display 3 properties now.
console.log(beginnerUser);


//Delete a property from object
delete beginnerUser.myCar;
console.log(beginnerUser);


//Add a multiword property name, notice you use sq brackets instead of dot notation
beginnerUser['fancy car'] = 'porche';

console.log(beginnerUser['fancy car']);
console.log(beginnerUser);

// The Sq bracket allows us to dynamically access properties at runtime
let key = prompt('What do you want to know about user', 'name');
alert(beginnerUser[key]);

let fruit = prompt("Which fruit are you buying", 'apples');

let bag = {
  [fruit]: 5,
}

console.log(bag);


//Lesson on Property Value Shorthand
//Here is the longhand version:
function makeUser(name, age){
  return{
    name: name,
    age: age,
  };
}

let user = makeUser('john', 30);
console.log(user);

//shorthand version
function makeShortUser(name, age){
  return{
    name,
    age
  };
}

//using the keyword in, to check if a property exists in an object
console.log('name' in user);



