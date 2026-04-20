let users = [
    { id: 1, name: "Alice", age: 30, password: "alice123" },
    { id: 2, name: "Bob", age: 25, password: "bob123" },
    { id: 3, name: "Charlie", age: 35, password: "charlie123" },
    { id: 4, name: "Coder-Ankit", age: 28, password: "coderankit123" }
];

let inputData = {
    name: "Coder-Ankit",
    password: "coderankit123"
};

let isUserPresent = users.some(user => user.name === inputData.name);

if (!isUserPresent) {
    console.log("User Not Found  Signup");
} else {
    let user = users.find(user => user.name === inputData.name);

    if (user.password === inputData.password) {
        console.log("Navigating to Home Page");
    } else {
        console.log("Invalid Credentials");
    }
}