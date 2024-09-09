/*selecting elements form a HTML page*/
let button = document.getElementById("btn1")

// other examples
// document.getElementsByClassName()
// document.querySelector()
// document.querySelectorAll("button.red")

function click_alert_btn12(){
    alert("Clicked Button 1 or 2")
}

button.addEventListener("click", click_alert_btn12)