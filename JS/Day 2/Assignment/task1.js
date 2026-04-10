function EmailValidator(username,email,password) {
    username = username.trim().toLowerCase();
    email = email.trim().toLowerCase();
    if(email.includes('@') && email.includes('.')){
        console.log("Email is valid");

    }
    else {
        console.log("Email is not valid");
    }


    if(password.length>8){
        if(password.includes('@') || password.includes('*') || password.includes('&')){
            console.log("password is strong");
        } 
        else{
            console.log("Password is not strong ");
        }
    } else {
        console.log("Password must be at least 8 characters long");
    }

    return "username: " + username + "\nemail: " + email + "\npassword: " + password;
  


}

let res=EmailValidator("  John_doe  ", "john@example.com", "password123");  
console.log(res);