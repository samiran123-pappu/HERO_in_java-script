function findMax(){ let m=-Infinity; for(let i=0;i<arguments.length;i++){ if(arguments[i]>m) m=arguments[i]; } return m; }
console.log(findMax(1,123,500,44));
