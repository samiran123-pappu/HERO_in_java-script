function show(city){ return this.name+' - '+city; }
const obj={name:'John'};
console.log(show.call(obj,'Delhi'));
