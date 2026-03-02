function fullName(city,country){ return this.firstName+' '+this.lastName+' '+city+' '+country; }
const p={firstName:'John',lastName:'Doe'};
console.log(fullName.apply(p,['Delhi','India']));
