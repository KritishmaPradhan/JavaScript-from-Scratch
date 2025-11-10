// //DOM Document Object Model
// // DOM tree is present where each node represent html attributes like window document html head body div h1.....
// console.log(document.body);              // document points to html;  prints body code

console.dir(document.body.childNodes[5]);            

// Note that para is an object reference to a <p> element
body_obj = document.querySelector("body")                         // queryselector selects any html tag
// First check that the element has child nodes and print them
if (body_obj.hasChildNodes()) {
  let children = body_obj.childNodes;

  for (const node of children) {
    console.log(node);
  }
}

// change the html css contents using js
document.body.style.backgroundColor = "pink";
document.body.childNodes[1].innerText = "JavaScript For Beginners";   

// DOM Manipulation 
//selecting with id
let boxnum = document.getElementById("boxnum1");
console.dir(boxnum);
//selecting with class
let boxclass = document.getElementsByClassName("box");
console.dir(boxclass);
// selecting with tag
let headingtag = document.getElementsByTagName("h1");
console.dir(headingtag);

// selecting the first element with querySelector
let body_obj = document.querySelector("body");
console.log(body_obj); 

let div_first = document.querySelector("div");       // gives first div it finds in html code
console.dir(div_first);

//selecting all elements with querySelectorAll
let div_all = document.querySelectorAll("div");      // gives list of all div it finds in html code
console.dir(div_all);

let box_with_id1 = document.querySelector("#boxnum1");
console.dir(box_with_id1);

let box_with_id2 = document.querySelector("#boxnum2");
console.dir(box_with_id2);

let box_with_class = document.querySelectorAll(".box");
console.dir(box_with_class);

// innerText -> gives the text value inside, tag and its children
console.log(box_with_id1.innerText);

// innerHTML -> changes the entire html content inside of a tag
let headingtag1 = document.querySelector("h1");
headingtag1.innerHTML = "<i>Java Script from Scratch</i>";
console.log(headingtag1.getAttribute("class"));                         // getattribute and setattribute
console.log(headingtag1.setAttribute("class", "newheadingclass"));      // overwrites existing class with new class

// Practice -> create 3 divs with common class divBox and access them in js and add a unique name for all div
let divbox_list  = document.querySelectorAll(".divBox");
let index = 0;
for(let i of divbox_list){
    i.innerText = `NewBox ${index}`;
    index++;
}


// styling via js and queryselector
divbox_list[0].style.backgroundColor = "pink";
box_with_id1.style.backgroundColor = "yellow";
box_with_id1.style.fontSize = "40px";

// create new element like div button h1 via js
let newbtn = document.createElement("button");
// append the button on a specific position
newbtn.innerText = "Submit Button";
let bodymain = document.querySelector("body");
bodymain.append(newbtn);                          //adds element at the end of body
newbtn.style.width = "80px";
newbtn.style.height = "80px";
newbtn.style.backgroundColor = "rgba(249, 90, 90, 1)";

// similarly node.perpend(newbtn) -> start of node
// node.before(newbtn) -> before node outside
// node.after(newbtn)  -> after node outside

// add a new class for an element   (newdivbox class is in  css)
divbox_list[1].classList.add("newdivbox");           

