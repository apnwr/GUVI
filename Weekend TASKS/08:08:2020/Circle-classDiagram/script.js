class Circle{
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;

        if (this.radius === undefined && this.color === undefined) {
            console.log("I am empty");
        } else if (this.color === undefined) {
            console.log("Radius is present");
        } else {
            console.log("Radius and color both are present");
        }
    }
}

let cir = new Circle();
let cir1 = new Circle(10);
let cir2 = new Circle(10, 20);