function addSpecies(callback){
    setTimeout(() => {
        console.log("Adding species...");
        callback();
    }, 1000);
}

function pourOil(callback){
    setTimeout(() => {
        console.log("Pouring oil...");
        callback();
    }, 3000);   
}


addSpecies(()=>{
    pourOil(()=>{
       fryOnion(()=>{
        boilWater(()=>{
            cookRice(()=>{
                console.log("All tasks completed!");
            });
        });
    });     }
)});


function fryOnion(callback){
    setTimeout(() => {
        console.log("Frying onion...");
        callback();
    }, 2000);     
}

function boilWater(callback){
    setTimeout(() => {
        console.log("Boiling water...");
        callback();
    }, 4000);     
}

function cookRice(callback){
    setTimeout(() => {
        console.log("Cooking rice...");
        callback();
    }, 5000);   
}

addSpecies()
fryOnion()
boilWater()
cookRice()