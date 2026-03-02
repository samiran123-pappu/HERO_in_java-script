let cars = ["BMW", "VOLVO", "SAAB", "FORD"]
let text = ""
for(let i = 0; i < cars.length; i++){
    text += cars[i] + ", "
}
console.log(text) // Remove trailing comma and space
