class Rect{
    constructor(w, h){
        this.width = w
        this.height = h
    }
    area(){
        return this.width * this.height
    }
    peri = () => {
        return 2 * (this.width + this.height)
    }
}

let rect1 = new Rect(12,20)

console.log(rect1.area())
console.log(rect1.peri())


//creating an object with class
//constructor

function Square(side){
    this.side = side;
}

let newSquare = new Square(10)

console.log(newSquare.side)
console.log(typeof newSquare)

console.log(newSquare["side"])
