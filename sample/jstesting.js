
//! destuctureing

//*array destructuring
// let number = [1,2,3,4] 
// const darr = [a,b,c] = number;
// console.log(a);
// console.log(b);
// console.log(c);

//* object destructuring
// let obj = {
//     name:'mohammed',
//     age :22
// };
// let {name,age} = obj;
// console.log(name);
// console.log(age);


//! spread operator
// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10]

//* array concating
// console.log(arr1.concat(arr2));
// console.log(arr1+arr2);            //* normal way
// console.log(...arr1,...arr2);       //* ES6 way
//* copying array
// let copyarr1 = [...arr1] 
// let copyarr2 = [...arr2] 
// console.log(copyarr1);
// console.log(copyarr2);

//* object concating
// let obj1 = {fname : 'arif',fage :22}
// let obj2 = {lname : 'mohammed',lage :22}
// console.log({...obj1,...obj2});

//! rest parameter
// function sample(a,...b){
//     let sum =a;
//     for(let i of b ){
//         sum +=i
//     }
//     console.log(b);
//     console.log(sum);
// }
// sample(1,2,3,4,5,6);

//! arrow functions

// let add = (a,b)=>{
//     return a+b
// }
// console.log(add(2,3));

//! template literals

// let name = "mohammed arif";
// console.log(`name is ${name}`);

//! heigher order function

// let arr = [1,2,3,4,5]

//* map()
// let mapedarr = arr.map((num)=>num*2);
// console.log(mapedarr);
//* reduce()
// let redusearr = arr.reduce((acc,val)=>{
//    return acc+val },0);
// console.log(redusearr);
//* filter()
// let filterarr = arr.filter((num)=>num%2==0);
// console.log(filterarr);

//* foreach()
//* array.forEach(callback(currentValue, index, array), thisArg);

// arr.forEach((cval,index,arr)=>{
//     // console.log(`${cval} ${index} ${arr} `);
//     console.log(`${cval} ${index}`);
// })


//!  callback function

// function func1(callback){
//     console.log("outer function ");
//     callback()
// }
// func1(()=>{
//     console.log("callback function");
// })

//! promise 

// let promise = new Promise((res,rej)=>{
//     // res();
//     rej();
// })

// promise.then(()=>{
//     console.log("promise success");
// }).catch(()=>{
//     console.log("prommise reject");
// });



const promise=new Promise((resolve,reject)=> {
    let name = null
    setTimeout(()=> {
       if(name) {
        resolve(name)
       }else {
        reject("Not found")
       }
    },4000)
})

promise.then((data)=>{
    console.log(data);
})
.catch((error)=> {
    console.log(error)
})