// Accessing Array Elements
// You access an array element by referring to the index number:

const cars = ["Saab", "Volvo", "BMW", "Audi", "Mercedes", "Opel", "Mazda", "Tesla", "Toyota", "Honda", "Nissan", "Hyundai", "Kia", "Volkswagen", "Subaru", "Mazda", "Dodge", "Jeep", "Ram", "GMC", "Chevrolet", "Ford", "Lincoln", "Cadillac", "Buick", "Acura", "Infiniti", "Lexus", "Alfa Romeo", "Maserati", "Ferrari", "Lamborghini", "Porsche", "Bentley", "Rolls-Royce", "Aston Martin", "McLaren", "Bugatti", "Pagani", "Koenigsegg", "Rimac", "Lucid Motors", "Rivian", "Fisker", "Polestar", "NIO", "XPeng", "BYD", "Li Auto", "Geely", "Great Wall Motors", "SAIC Motor", "Changan Automobile", "FAW Group", "Dongfeng Motor Corporation", "BAIC Group", "GAC Group", "Chery Automobile", "Haval", "Tata Motors", "Mahindra & Mahindra", "Maruti Suzuki", "Isuzu", "Suzuki", "Daihatsu", "Mitsubishi", "Subaru", "Mazda", "Dodge", "Jeep", "Ram", "GMC", "Chevrolet", "Ford", "Lincoln", "Cadillac", "Buick", "Acura", "Infiniti", "Lexus", "Alfa Romeo", "Maserati", "Ferrari", "Lamborghini", "Porsche", "Bentley", "Rolls-Royce", "Aston Martin", "McLaren", "Bugatti", "Pagani", "Koenigsegg", "Rimac", "Lucid Motors", "Rivian", "Fisker", "Polestar", "NIO", "XPeng", "BYD", "Li Auto", "Geely", "Great Wall Motors", "SAIC Motor", "Changan Automobile", "FAW Group", "Dongfeng Motor Corporation", "BAIC Group", "GAC Group", "Chery Automobile", "Haval", "Tata Motors", "Mahindra & Mahindra", "Maruti Suzuki", "Isuzu", "Suzuki", "Daihatsu", "Mitsubishi", "Subaru", "Mazda", "Dodge", "Jeep", "Ram", "GMC", "Chevrolet", "Ford", "Lincoln", "Cadillac", "Buick", "Acura", "Infiniti", "Lexus", "Alfa Romeo", "Maserati", "Ferrari", "Lamborghini", "Porsche", "Bentley", "Rolls-Royce", "Aston Martin", "McLaren", "Bugatti", "Pagani", "Koenigsegg", "Rimac", "Lucid Motors", "Rivian", "Fisker", "Polestar", "NIO", "XPeng", "BYD", "Li Auto", "Geely", "Great Wall Motors", "SAIC Motor", "Changan Automobile", "FAW Group", "Dongfeng Motor Corporation", "BAIC Group", "GAC Group", "Chery Automobile", "Haval", "Tata Motors", "Mahindra & Mahindra", "Maruti Suzuki", "Isuzu", "Suzuki", "Daihatsu", "Mitsubishi", "Subaru", "Mazda", "Dodge", "Jeep", "Ram", "GMC", "Chevrolet", "Ford", "Lincoln", "Cadillac", "Buick", "Acura", "Infiniti", "Lexus", "Alfa Romeo", "Maserati", "Ferrari", "Lamborghini", "Porsche", "Bentley", "Rolls-Royce", "Aston Martin", "McLaren", "Bugatti", "Pagani", "Koenigsegg", "Rimac", "Lucid Motors", "Rivian", "Fisker", "Polestar", "NIO", "XPeng", "BYD", "Li Auto", "Geely", "Great Wall Motors", "SAIC Motor", "Changan Automobile", "FAW Group", "Dongfeng Motor Corporation", "BAIC Group", "GAC Group", "Chery Automobile", "Haval", "Tata Motors", "Mahindra & Mahindra", "Maruti Suzuki", "Isuzu", "Suzuki", "Daihatsu", "Mitsubishi", "Subaru", "Mazda", "Dodge", "Jeep", "Ram", "GMC", "Chevrolet", "Ford", "Lincoln", "Cadillac", "Buick", "Acura", "Infiniti", "Lexus", "Alfa Romeo", "Maserati", "Ferrari", "Lamborghini", "Porsche", "Bentley", "Rolls-Royce", "Aston Martin", "McLaren", "Bugatti", "Pagani", "Koenigsegg", "Rimac", "Lucid Motors", "Rivian", "Fisker", "Polestar", "NIO", "XPeng", "BYD", "Li Auto", "Geely", "Great Wall Motors", "SAIC Motor", "Changan Automobile", "FAW Group", "Dongfeng Motor Corporation", "BAIC Group", "GAC Group", "Chery Automobile", "Haval", "Tata Motors", "Mahindra & Mahindra", "Maruti Suzuki", "Isuzu", "Suzuki", "Daihatsu", "Mitsubishi", "Subaru", "Mazda", "Dodge", "Jeep", "Ram", "GMC", "Chevrolet", "Ford", "Lincoln", "Cadillac", "Buick", "Acura", "Infiniti", "Lexus", "Alfa Romeo", "Maserati", "Ferrari", "Lamborghini", "Porsche", "Bentley", "Rolls-Royce", "Aston Martin", "McLaren", "Bugatti", "Pagani", "Koenigsegg", "Rimac", "Lucid Motors", "Rivian", "Fisker", "Polestar", "NIO", "XPeng", "BYD", "Li Auto", "Geely", "Great Wall Motors", "SAIC Motor", "Changan Automobile", "FAW Group", "Dongfeng Motor Corporation", "BAIC Group", "GAC Group", "Chery Automobile", "Haval", "Tata Motors", "Mahindra & Mahindra", "Maruti Suzuki", "Isuzu", "Suzuki", "Daihatsu", "Mitsubishi", "Subaru", "Mazda", "Dodge", "Jeep", "Ram", "GMC", "Chevrolet", "Ford", "Lincoln", "Cadillac", "Buick", "Acura", "Infiniti", "Lexus", "Alfa Romeo", "Maserati", "Ferrari", "Lamborghini", "Porsche", "Bentley", "Rolls-Royce", "Aston Martin", "McLaren", "Bugatti", "Pagani", "Koenigsegg", "Rimac", "Lucid Motors", "Rivian", "Fisker", "Polestar", "NIO", "XPeng", "BYD", "Li Auto", "Geely", "Great Wall Motors", "SAIC Motor", "Changan Automobile", "FAW Group", "Dongfeng Motor Corporation", "BAIC Group", "GAC Group", "Chery Automobile", "Haval", "Tata Motors", "Mahindra & Mahindra", "Maruti Suzuki", "Isuzu", "Suzuki", "Daihatsu", "Mitsubishi", "Subaru", "Mazda", "Dodge", "Jeep", "Ram", "GMC", "Chevrolet", "Ford", "Lincoln", "Cadillac", "Buick", "Acura", "Infiniti", "Lexus", "Alfa Romeo", "Maserati", "Ferrari", "Lamborghini", "Porsche", "Bentley", "Rolls-Royce", "Aston Martin", "McLaren", "Bugatti", "Pagani", "Koenigsegg", "Rimac", "Lucid Motors"]
console.log(cars[0]); 
console.log(cars[10]); 
console.log(cars[20]); 
console.log(cars[30]); 
console.log(cars[40]); 
console.log(cars[50]); 
console.log(cars[60]); 
console.log(cars[70]); 
console.log(cars[80]); 
console.log(cars[90]); 
console.log(cars[100]); 
console.log(cars[110]); 
console.log(cars[120]); 
console.log(cars[130]); 
console.log(cars[140]); 
console.log(cars[150]); 
console.log(cars[160]); 
console.log(cars[170]); 
console.log(cars[180]); 
console.log(cars[190]); 
console.log(cars[200]); 
console.log(cars[210]); 
console.log(cars[220]); 
console.log(cars[230]); 
console.log(cars[240]); 
console.log(cars[250]); 
console.log(cars[260]); 
console.log(cars[270]); 
console.log(cars[280]); 
console.log(cars[290]); 
console.log(cars[300]); 
console.log(cars[310]); 
console.log(cars[320]); 
console.log(cars[330]); 
console.log(cars[340]); 
console.log(cars[350]); 
console.log(cars[360]); 
console.log(cars[370]); 
console.log(cars[380]); 
console.log(cars[390]); 
console.log(cars[400]); 
console.log(cars[405]); 
console.log(cars[410]); 
 
console.log(cars.length); 



// Note: Array indexes start with 0.

// [0] is the first element. [1] is the second element.