// //function declaration
function addNum(num1,num2){
    return num1+num2;
}
const total=addNum(5,5);

// //function Expression
var value=function addNum(num1,num2){
    return num1+num2;
}
const total=addNum(5,5);

//Arrow function

const doubleIt=num=>num*2;  //here (num) is a single parameter of a function and num*2  is return of a function.
const add=(x,y)=>x*y  //with multiple parameter
const total=doubleIt(5);
const total=add(5,6);

const give5=()=>5  //without parameter
const total=give5();
console.log(total); 

//multiple arrow function
const doMath=(x,y)=>{
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;
}
const total=doMath(7,5);
console.log(total);