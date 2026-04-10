
// let arr=[12,"hello",true,undefined,null,{name:"Ravi"},[1,2,3]];
// console.log(arr);
// arr.push("world");
// console.log(arr);
// arr.pop();
// console.log(arr);

// arr.shift(1);
// console.log(arr);
// arr.unshift("start");
// console.log(arr);
// console.log(arr.length);
// console.log(arr.at(2));
// console.log(arr.join("-"));



// let arr1=[1,2,3];
// let arr2=['a','b','c'];

// console.log(arr1.concat(arr2));






// let msg=["Hello","Hi","bye"];
// msg.map((values,index)=>{
//     console.log(values+" Mr.");

// });


        //    MAP

// let numbers=[1,2,3,4,5];
// numbers.map((value,index)=>{
//     console.log(value*2);
// });


        //   REDUCE



// let numbers=[1,2,3,4,5];
// numbers.reduce((accumulator, value) => {
//     console.log(accumulator + value);
//     return accumulator + value;
// }, 0);


// let numbers=[1,2,3,4,5];
// let total=numbers.reduce((prev,curr) => {
//     return prev * curr;
// }, 1);
// console.log(total);






// let cartData={
//     items:[
//         {name:"Shirt", price:500},
//         {name:"Pants", price:1000},
//         {name:"Shoes", price:2000}
//     ]
// }

// let totalPrice=cartData.items.reduce((total,item)=>{
//     return total + item.price;
// },0);

// console.log("Total Price:", totalPrice);