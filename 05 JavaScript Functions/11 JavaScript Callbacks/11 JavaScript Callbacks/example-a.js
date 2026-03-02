function greet(name,cb){ console.log('Hello '+name); cb(); }
function done(){ console.log('done'); }
greet('Samir',done);
