
//normal function syntax
greett();
function greett(){
    console.log("hina awais");
}
greett();

// //function expression


const gree=function(){
    console.log("zakria khan");
}
gree();


function add(a,b){
    return a+b;
}
console.log(add(5, 3));

const add1=function(a,b){
    return a**2+b**2+2*a*b;
}
console.log(add1(5, 5));

//examle of the arrow function

const charges=(a)=> a*200;

console.log(charges(6));

const greet=(name="GUESTS")=> "hello "+ name;
console.log(greet("hina "));
console.log(greet());


const sruaree=(nmbr1,nmbr2)=>{
    return nmbr1+nmbr2;
}

console.log(sruaree(2,2));

