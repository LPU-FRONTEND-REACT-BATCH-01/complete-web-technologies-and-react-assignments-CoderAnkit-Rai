// interface Product {
//     id: number;
//     name: string;
//     price: number;
// }

// let items: Product[] = [
//     {
//         id: 1,
//         name: "Shoes",
//         price: 2000
//     },
//     {
//         id: 2,
//         name: "Shirt",
//         price: 1500
//     }
// ];

// items.forEach(items => {
//     console.log(`ID: ${items.id}, Name: ${items.name}, Price: ₹${items.price}`);
// });


// type User = "Admin" | "Employee" | "Manager";

// let Ankit: User = "Admin";

// function display(name: string, age: number): string {
//     return `Name is ${name} and age is ${age}`;
// }

// console.log(display("Ankit", 22));





// function payment(modeOfPayment: PaymentOption,amount: number){
//     if(modeOfPayment == "CARD"){
//         console.log("5% Discount");
//         amount = amount *0.95;
//         return `you paid using ${modeOfPayment} and after discount ${amount}`;
//     }
//     else if(modeOfPayment == "UPI"){
//         console.log("10% Discount");
//         amount = amount *0.90;
//         return `you paid using ${modeOfPayment} and after discount ${amount}`;
//     }
//     else if(modeOfPayment == "COD"){
//         console.log("added 50 to amount");
//         amount = amount + 50;
//         return `you paid using ${modeOfPayment} you total amount is ${amount}`;
//     }
//     else if(modeOfPayment == "NETBANKING"){
//         console.log("No Discount");
//         amount = amount;
//         return `you paid using ${modeOfPayment} total amount is ${amount}`;
//     }
// }




// type PaymentOption = "UPI" | "CARD" | "COD" | "NETBANKING"


// function payment(modeOfPayment: PaymentOption, amount: number): string {
//     switch (modeOfPayment) {
//         case "CARD":
//             console.log("5% Discount");
//             amount *= 0.95;
//             break;

//         case "UPI":
//             console.log("10% Discount");
//             amount *= 0.90;
//             break;

//         case "COD":
//             console.log("Added ₹50");
//             amount += 50;
//             break;

//         case "NETBANKING":
//             console.log("No Discount");
//             break;
//     }

//     return `You paid using ${modeOfPayment}, total amount is ₹${amount}`;
// }

// console.log(payment("UPI", 1000));
// console.log(payment("CARD", 2000));
// console.log(payment("COD", 500));


let arr: any[] = [];
let arr1: any[] =[];

let sortByNameAsc:any=[];
let sortByNameDsc:any =[];

async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    arr = data.products.filter((item: any) => item.price > 5);
    arr1 = data.products.filter((item: any) => item.price > 10);

    sortByNameAsc = [...arr].sort((a, b) => 
        a.title.localeCompare(b.title)
    );

    sortByNameDsc = [...arr].sort((a, b) => 
        b.title.localeCompare(a.title)
    );

    console.log(arr); 
    console.log(arr1); 

    console.log("Sort ASC:", sortByNameAsc);
    console.log("Sort DESC:", sortByNameDsc);
}

getProducts();
