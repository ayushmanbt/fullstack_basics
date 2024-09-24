# JavaScript Objects

In today's class we learnt a few things about JavaScript objects

- we learnt how to create an object without a class definiton
- we learnt 2 ways to add a method to that classless obejct namely -
```js
let b = {
    method1: func(){
        //function body goes here
    },
    method2(){
        //method body goes here
    }
}
```
- We learnt that if we assign an obejct to another directly it is a reference so if we change property in one of the object, both of them changes. 
- We can mitigate this issue by shallow copy / spread operator. 
- The issue with shallow copy is nested objects are still passed as reference.
- so we can use the deep copy method - stringify / parse methode 
```js
let a = {p1: v1, p2: v2}
let b = JSON.stringify(JSON.parse(a)) //this crates a deep copy of a
```
- You can use the classic `class` denotion with a constructor to create a class and from there an object
- In js objects, if you define a method with arrow function, it does not point to the parent obejct when we use the keyword `this`
- the global `this` in a HTML page with attached JS is the window object.