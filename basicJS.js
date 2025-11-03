// All practice questions for JavaScript

// ***********prints the content inside "" in the console of browser*****************
console.log("Javascript from Scratch");
// ****************sends an alert message before loading page****************
alert("This is alert message from JS");

// ******************Constants and variables in js******************
let variable1 = "Hello JS";
console.log(variable1);
const value_of_pi = 3.14;
console.log(value_of_pi);

// **************object in jS (key value pair)****************
let object_fruit = {
    fruit1 : "mango",
    fruti2 : "apple",
    fruti3 : "kiwi"
};
console.log(object_fruit);

//****************taking input in the from of alert************
prompt("Enter yes to proceede");

//Conditional Statements
//**********************input number using prompt and check if number is multiple if 5 or not****************   
let num = prompt("Enter a number");
if( num % 5 === 0){
    console.log(`${num} is multiple of 5`);
}
else{
    console.log(`${num} is not multiple of 5`);
}

//***************write a code which can give grades to students on the basis of their marks*******************
let marks = prompt("Enter you marks ");
if( marks >= 90 && marks <= 100){
    console.log("Your grade is A+");
}
else if( marks >=50 && marks <= 80){
    console.log("Your grade is B");
}
else{
    console.log("Your grade is C");
}

// Strings and Loops
//prompt user to enter full and create username starting with @fullname[length of fullname]
let fullname = prompt("Enter you full name");
let name_length = 0;
for(let i of fullname ){
    name_length += 1;
}
let username = "@" + fullname + name_length;
console.log(username);

// Arrays 
let animals = ["lion", "cat", "dog", "hippo"];
console.log(animals);

animals.shift();    // removes element from first of array
console.log(animals);
animals.pop();      // removes element from last of array
console.log(animals); 
animals.splice(1,1, "jackle"); // replaces element in array
console.log(animals);
animals.push("panda");       // add element in the end of array
console.log(animals);

