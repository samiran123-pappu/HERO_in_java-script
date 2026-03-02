const person={name:'Samir'};
function greet(){ console.log('Hello '+this.name); }
setTimeout(greet.bind(person),100);
