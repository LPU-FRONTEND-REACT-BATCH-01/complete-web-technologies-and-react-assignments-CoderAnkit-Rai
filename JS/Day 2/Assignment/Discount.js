function price(amount) {
    var total;
    var message;

    if (amount >= 6000) {
        total = amount * 0.75;
        message = "DISCOUNT OF 25% APPLIED";
    } 
    else if (amount >= 2000) {
        total = amount * 0.85;
        message = "DISCOUNT OF 15% APPLIED";
    } 
    else {
        total = amount;
        message = "NO DISCOUNT";
    }

    console.log(message + " | Original Price: " + amount + " | Total Price: " + total);
}

price(2100);