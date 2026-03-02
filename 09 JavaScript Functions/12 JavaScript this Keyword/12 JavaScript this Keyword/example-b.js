const person={name:'John',get:function(){ const inner=()=>this.name; return inner(); }};
console.log(person.get());
