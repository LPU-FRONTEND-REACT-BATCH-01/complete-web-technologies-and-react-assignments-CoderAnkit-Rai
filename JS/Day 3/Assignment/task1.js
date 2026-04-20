var cartData = {
    items: [
        { name: "Shirt", price: 500 },
        { name: "Pants", price: 1000 },
        { name: "Shoes", price: 2000 }
    ]
};


var sortByName = cartData.items.slice().sort((a, b) => {
    return a.name.localeCompare(b.name);
});
console.log("Sort by Name:", sortByName);

var filteredItems = cartData.items.filter(item => item.price >= 2000);
console.log("Filtered Items:", filteredItems);

var finalResult = cartData.items
    .filter(item => item.price >= 2000)
    .sort((a, b) => a.name.localeCompare(b.name));

console.log("Final Result (Filtered + Sorted by Name):", finalResult);