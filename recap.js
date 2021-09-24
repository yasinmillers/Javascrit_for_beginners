//OOPfunctions that enable creation of different objects. 
//CONSTRUCTOR FUNCTIONS. 
//Constructor functions use Pascal notation that is why the function name is start with capital letters. 
//Constructor function using the President class as an Example.
function President(name, country, age, tribe, height, weight, color) {
    this.name = name;
    this.country = country;
    this.age = age;
    this.tribe = tribe;
    this.height = height;
    this.weight = weight;
    this.color = color;
}
const president1 = new President('Paul Kagame', 'RWANDA', 50, 'Tutsi', 300, 100, 'black');
const president2 = new President('Tumuhaburwa Museveni', 'UGANDA', 98, 'Munyankole', 200, 180, 'Brown');
const president3 = new President('Uhuru Kenyatta', 'KENYA', 56, 'Kikuyu', 250, 150, 'Brown');
console.log(`THE FIRST PRESIDENT WE CREATED`);
console.log(president1);
console.log(`THE SECOND PRESIDENT WE CREATED`);
console.log(president2);
console.log(`THE THIRD PRESIDENT WE CREATED`);
console.log(president3);
//Constructor functions use Pascal notation that is why the function name is start with capital letters. 
//Constructor function using the Animal class as an Example.
function Animal(name, color, gender, kind) {
    this.name = name; //this keyword used to put properties name  in the class. 
    this.color = color; //this keyword used to put properties color in the class. 
    this.gender = gender; //this keyword used to put properties gender in the class. 
    this.kind = kind; //this keyword used to put properties  kind in the class. 
    this.cry = function(sound) {
        return this.name + '    ' + sound;
    }

}
const animal1 = new Animal('Lion', 'Brown', 'Female', 'Wild'); //object animal1 with the arguement values. 
const animal2 = new Animal('Pig', 'Black', 'Male', 'Domestic'); //object animal2 with the arguement values. 
console.log(`THE FIRST ANIMAL  WE CREATED`);
console.log(animal1);
console.log(animal1.cry(' My Lions roars '));
console.log(`THE SECOND ANIMAL  WE CREATED`);
console.log(animal2);
console.log(animal2.cry(' My Pigs Grunt '));
//Create seven classes with a minimum of seven properties and three methods  in each construction function. 
//with atleast two methods with atleast three instances of objects. 
//Put Comments in the work. And deadline 2pm tommorrow.
//Names graceOOP.JS 

//Introduction of arrow functions in JavaScript
//This is an arrow function of a woman object. 
function woman(name, height, color, beauty, tribe, character, style) {
    this.name = name;
    this.height = height;
    this.color = color;
    this.beauty = beauty;
    this.tribe = tribe;
    this.character = character;
    this.style = style;
    this.laugh = (laughsound) => {
        return this.name + '  ' + laughsound;
    }
}
const woman1 = new woman('Gryc', 100, 'light-skinned', true, 'Muganda', 'Good', 'Lady');
console.log(woman1);
console.log(woman1.laugh('  Nakazibwe Aseeka nga Mumbeejja'))