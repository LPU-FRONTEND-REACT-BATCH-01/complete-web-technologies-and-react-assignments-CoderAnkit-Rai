// Login
function login() {
    let name = document.getElementById("username").value;

    if (name === "") {
        alert("Enter name!");
        return;
    }

    localStorage.setItem("user", name);
    window.location.href = "products.html";
}


const products = {
    1: { name: "Laptop", price: 50000 },
    2: { name: "Phone", price: 20000 },
    3: { name: "Headphones", price: 2000 }
};


let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
    let item = cart.find(i => i.id === id);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ id, ...products[id], quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

if (document.getElementById("cart")) {
    let output = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        output += `
            <p>
                ${item.name} x ${item.quantity}
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </p>
        `;
    });

    document.getElementById("cart").innerHTML = output;
    document.getElementById("total").innerText = "Total ₹" + total;
}


function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload(); 
}