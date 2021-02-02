
//object destructure
const person={name:'sharif', age:25,phone:01700772520,friends:['alam','jamal','kamal']}
const {phone,age,friends}=person; 
console.log(phone,age,friends);

// //Array destructure

const friends=['sakib','rubel','mash','tamim'];
const[a,b,...c]=friends;
console.log(...c);