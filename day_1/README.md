# Day 1

In day 1, we talked about -
- JavaScript and how to link it to documents `<script src=""></script>` and `<script>alert(1)</script>`
- How to get elements by Id, className and use of query selector
    - `document.getElementById("element_id")` => gets the element with the id of "element_id"
    - `document.getElementsByClassName("class_name")` => gets all elements with the class name of "class_name"
    - `document.querySelector()` => uses jquery like queries to get elements 
        - just writing the name of the tag gets the first element with the tag
        - using a dot `.` before the name indicates a class being mentioned
        - using a hash `#` before the name indicates an id being mentioned
        - we can be more specific about the class name along with the 
    - `document.querySelectorAll()` => selects all the elements matching the query written follwoing the previous rule
- There are two ways to declare what to do if certain kind of interaction is detected -
    - If there an "on..." attribute declared with the function to execute as "function_name()"
    - Getting the element in JS using the previous methods and then adding an event listener `element.addEventListener("event_name", function f(){...})` 
- how to write loops using `for...of` loop and `for...each` loop.
- console.log() shows up in inspector.



## Helpful resources - 

Basics about queryselector - https://devdoc.net/web/developer.mozilla.org/en-US/docs/Web/API/document.querySelector.html