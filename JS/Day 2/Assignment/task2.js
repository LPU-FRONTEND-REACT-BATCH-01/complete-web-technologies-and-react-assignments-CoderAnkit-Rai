function user(username, email, password) {
      return {
      username,email,password     
};
}

let res = user("Ravi","ravi@example.com","password123");

console.log( res);
console.log("Username:", res.username);
console.log("Email:", res.email);
console.log("Password:", res.password);