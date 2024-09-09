/*selecting elements form a HTML page*/
// let button = document.getElementById("Refresh")

// other examples
// document.getElementsByClassName()
// document.querySelector()
// document.querySelectorAll("button.red")

// button.addEventListener("click", function ref(){
//     alert("Clicked")
// })



let h1 = document.getElementById("test")
let text = document.getElementById("in1")
function clk(){
    h1.innerText = text.value;
}