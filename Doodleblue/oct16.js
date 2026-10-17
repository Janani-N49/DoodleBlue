//HOISTING
var a;
    console.log(a);
    a=10;
    // OUTPUT: undefined

console.log(a);
    var a=10;
    // OUTPUT: undefined

let a;
console.log(a);
a=10;
// OUTPUT: undefined

// TEMPORAL DEAD ZONE(TDZ)
const b;
console.log(b);
b=20;
// OUTPUT: error


// FUNCTION
greet()
function greet(){
    console.log("welcome")
}
//OUTPUT: welcome

console.log(res);
const res=greet() =>{
    console.log("print")
}
    //OUTPUT: error

// CLOSURE
function account(){
    let balance=1000;
    function deposit(amount){
        balance=balance+amount
        console.log("balance amount: "+ balance);
    }
    return deposit;
}
const myacc=account();
myacc(500);
myacc(700);
// OUTPUT: balance amount: 1500
// OUTPUT: balance amount: 2200

// DOUBLE CLICK SETTER
const target= document.querySelector("#target");
target.addEventListener("dblclick",()=>{
    target.textContent="You double-clicked the box!";
    target.style.background="#bbf7d0"
});
