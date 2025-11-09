// // object in JS
// const animal = {
//     name: " Dog",
//     color: "White",
//     type: "mammal",
//     details: function () {
//         console.log(`This is a ${this.name} and it is ${this.color} and ${this.type}`);    // this is object
//     },
// };
// // accessing individual elements
// console.log(animal.color);
// console.log(animal.details());

// // different way to access function via object
// const employee ={
//     empdetails() {
//         console.log("this is employee");
//     }
// };
// console.log(employee);
// console.log(employee.empdetails());

// // use prototype to access other objects elements
// const designation ={
//     designationType: "Senior Dev",
// }
// designation.__proto__ = employee;
// console.log(designation.empdetails());
// console.log(designation.designationType);
// //note: if prototype obj and main obj have same function name the function of original obj will be called 

// // CLASS in Js

// class Student{
//     stu_details() {
//         console.log("This is a girl");
//     }
//     stu_status() {
//         console.log("this is verified student");
//     }
// };
// Sobject = new Student();
// console.log(Sobject);
// console.log(Sobject.stu_details());
// console.log(Sobject.stu_status());

// // constructer in JS
// class Patient{
//     constructor(disease){
//         this.disease = disease;
//         console.log(`the patient has ${disease}`);      
//     }
//     patient_detail(name){
//         this.name = name;
//         console.log(`patient ${this.name} has ${this.disease}`);
//     }
// };
// Pobject = new Patient("Malaria");
// Pobject.patient_detail("Georg");

// // inheritance in JS
// class Parents{
//     parentType(){
//         console.log("This is father");
//     }
// };
// class Childs extends Parents{
//     childType(){
//         console.log("This is son");
//     }
// };
// Cobj = new Childs();
// Cobj.childType();
// Cobj.parentType();

