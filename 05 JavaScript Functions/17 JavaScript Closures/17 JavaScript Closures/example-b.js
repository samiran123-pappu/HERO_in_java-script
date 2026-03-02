function createUser(name){ return { getName:function(){ return name; } }; }
console.log(createUser('Asha').getName());
