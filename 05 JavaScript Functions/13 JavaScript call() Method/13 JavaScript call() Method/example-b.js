const p1={fullName:function(){ return this.name; }};
const p2={name:'Asha'};
console.log(p1.fullName.call(p2));
