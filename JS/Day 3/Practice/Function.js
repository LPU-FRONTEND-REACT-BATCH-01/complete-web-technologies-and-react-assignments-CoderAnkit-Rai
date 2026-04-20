function addSpecies() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Adding species...");
            resolve();
        }, 1000);
    });
}

function pourOil() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Pouring oil...");
            resolve();
        }, 3000);
    });
}

function fryOnion() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Frying onion...");
            resolve();
        }, 2000);
    });
}

function boilWater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Boiling water...");
            resolve();
        }, 4000);
    });
}

function cookRice() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Cooking rice...");
            resolve();
        }, 5000);
    });
}


addSpecies()
    .then(() => pourOil())
    .then(() => fryOnion())
    .then(() => boilWater())
    .then(() => cookRice())
    .then(() => {
        console.log("All tasks completed!");
    })
    .catch((error) => {
        console.log("Error:", error);
    });