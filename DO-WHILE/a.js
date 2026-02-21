let cars = ["BMW", "VOLVO", "SAAB", "FORD"]
let text = ""

let i = 0;
do{
    text += cars[i] + ", "
    i++
}while(i < cars.length)
console.log(text)