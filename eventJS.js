// Event in jS
// events are two types: inline event( directly access in html code)
//                     : JS event(js access with certain function)

//event: onclick   -> ondblclick
let eventButton = document.querySelector(".eventbtn");
eventButton.onclick = () => {
    console.log("The button we clicked");
}
// event: mousehover
let boxupper = document.querySelector(".box");
// boxupper.onmouseover = () => {
//     console.log("The box was hovered");
// }

// event listeners.... where multiple function can implement on same element(div/btn etc)function
boxupper.addEventListener("dblclick", () => {             // can pass the entire function
    console.log("The box was double clicked");
});
const funPrint = () => {
    console.log("The box was hovered");
}
boxupper.addEventListener("mouseover", funPrint);        // can pass the function name

// event listener -> removeEventListener ...removes event listener


// dark light mode toggle
let modebtn = document.querySelector("#eventbtn1");
let mainBody = document.querySelector("body");
theme = "light";
const theme_function = () => {
    if( theme === "light"){
        theme = "dark";
        mainBody.classList.remove("light");
        mainBody.classList.add("dark");
    }
    else{
        theme = "light";
        mainBody.classList.remove("dark");
        mainBody.classList.add("light");
    }
}
modebtn.addEventListener("click", theme_function);