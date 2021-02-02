// spread operator ... that is use to concat the element and rules is ... three dots

const ages=[20,12,45,33];
const ages2=[40,52,44,12];
const ages3=[74,15,45,43];
// const allAges=ages.concat(ages2).concat(5).concat(ages3);
const allAges2=[...ages,...ages2,...ages3];  //spread out means break the array and take the all values in another array's.
console.log(allAges2);

// normal method to find the max value.
const x=500;
const y=744;
const z=900;
// const maximum=Math.max(x,y,z);
 
console.log(maximum);

// spread out method to find the max value

const num=[20,44,111,444];
const maximum=Math.max(...num);
console.log(maximum);

