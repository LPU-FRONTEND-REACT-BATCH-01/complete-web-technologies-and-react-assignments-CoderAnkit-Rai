let users = [
    {id:1, name:"Alice", age:30,password:"alice123"},
    {id:2, name:"Bob", age:25,password:"bob123"},
    {id:3, name:"Charlie", age:35,password:"charlie123"},
    {id:4, name:"Coder-Ankit", age:28,password:"coderankit123"}
];

let inputData = {
    name:"Coder-Ankit",
    password:"coderankit12"
};

let user = users.find(ele => ele.name === inputData.name);

if (!user) {
    console.log("User Not Found Signup ");
} 
else if (user.password !== inputData.password) {
    console.log("Invalid Credentials ");
} 
else {
    console.log("Navigating to Home Page ...");
}