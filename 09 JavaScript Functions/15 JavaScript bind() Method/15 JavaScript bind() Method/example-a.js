const p={firstName:'John',lastName:'Doe',fullName:function(){ return this.firstName+' '+this.lastName; }};
const fn=p.fullName.bind(p);
console.log(fn());
