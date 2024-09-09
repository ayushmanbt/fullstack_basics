/*selecting elements form a HTML page*/
let buttons = document.getElementsByClassName("btn")
// other examples
// document.getElementById("btn1")
// document.getElementsByClassName()
// document.querySelector()
// document.querySelectorAll("button.red")

// don't need to go in deep but this just converts the list of buttons to iterables
buttons = Array.from(buttons)



function click_alert_btn12(){
    alert("Clicked Button 1 or 2")
}



buttons.forEach(button => {
    button.addEventListener("click", click_alert_btn12)
});

