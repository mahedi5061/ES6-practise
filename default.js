function addNum(num1,num2=10){ //num2=10 that is the default value it will count when the function call with one parameter value like addNum(20)
    return num1+num2;
}
const total=addNum(20,40);
console.log(total);