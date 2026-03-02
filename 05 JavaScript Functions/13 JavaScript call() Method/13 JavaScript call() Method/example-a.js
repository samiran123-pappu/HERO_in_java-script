function fullName(city){ return this.firstName+' '+this.lastName+' '+city; }
const p={firstName:'John',lastName:'Doe'};
console.log(fullName.call(p,'Delhi'));
