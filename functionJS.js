//Functions and Methods in JavaScript

let string1 = "hello";
let upperstring = string1.toUpperCase();        //converts string to upper case
console.log(upperstring);

// function with parameter
function addition(num){
    new_num = num + 1;
    console.log(new_num);
}
addition(5);

// Arrow function in JS
const vowel_calculator = (string1) => {
    let count_vowel = 0;
    for (let i of string1){
        if(i === "a" || i === "e" || i === "i" || i ==="o" || i === "u"){
            count_vowel += 1;
        }
    }
    console.log(count_vowel);
}
vowel_calculator("kritishmaa");

// forEach function for arrays
names = ["hem", "tim", "jane"];
names.forEach((each_name) => {
    console.log(each_name + "verified");
});

// filter function 
marks = [20,50,60,12,45];
let lessmks = marks.filter((num) => {
    return num <50;
});
console.log(lessmks);

