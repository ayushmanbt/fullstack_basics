let a = {firstName: "John", lastName: "Doe", address: {
    no: 123,
    street: "XYZ Street"
},
method1: function(){
    console.log(this)
},

method2(){
    console.log("am2")
},
method3: () => {
    console.log(this)
},}

 // let b = a // pass by reference

//spread operator - shallow copy
// let b = {...a}

// b.firstName = "Jane"

console.log(JSON.stringify(a))
console.log(typeof JSON.stringify(a))


// deep copy stringify and parse
let b = JSON.parse(JSON.stringify(a))

b.address.no = 121

console.log(a.address.no)
console.log(b.address.no)

a.method1()
a.method2()
a.method3()




// console.log(a === b)