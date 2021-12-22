const memory8gb = 0, memory16gb = 180;
const storage256gb = 0, storage512gb = 100, storage1tb = 180;
const deliveryPrime = 0, deliveryNormal = 20;

// default value or value initaialize 
let extraMemoryCost = 0, extraStorageCost = 0, totaldDeliveryCost = 0;
let totalProductCost = 1299;

// Add event listener to Memory buttons
document.getElementById('8gb-memory').addEventListener('click', function (){
    extraMemory = document.getElementById('extra-memory');
    extraMemory.innerText = memory8gb;

    extraMemoryCost = memoryCost(memory8gb);
    totalCost();
});
document.getElementById('16gb-memory').addEventListener('click', function (){
    extraMemory = document.getElementById('extra-memory');
    extraMemory.innerText = memory16gb;

    extraMemoryCost = memoryCost(memory16gb);
    totalCost();
});


// Add event listener to storage buttons
document.getElementById('256gb-ssd').addEventListener('click', function (){
    extraStorage = document.getElementById('extra-storage');
    extraStorage.innerText = storage256gb;

    extraStorageCost = storageCost(storage256gb);
    totalCost();
});
document.getElementById('512gb-ssd').addEventListener('click', function (){
    extraStorage = document.getElementById('extra-storage');
    extraStorage.innerText = storage512gb;

    extraStorageCost = storageCost(storage512gb);
    totalCost();
});
document.getElementById('1tb-ssd').addEventListener('click', function (){
    extraStorage = document.getElementById('extra-storage');
    extraStorage.innerText = storage1tb;

    extraStorageCost = storageCost(storage1tb);
    totalCost();
});


// Add event listener to delivery buttons
document.getElementById('prime-delivery').addEventListener('click', function (){
    deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = deliveryPrime;

    totaldDeliveryCost = deliveryCost(deliveryPrime);
    totalCost();
});
document.getElementById('normal-delivery').addEventListener('click', function (){
    deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = deliveryNormal;

    totaldDeliveryCost = deliveryCost(deliveryNormal);
    totalCost();
});

// get costs
function memoryCost(extraMemoryCost){
    // console.log(extraMemoryCost);
    return extraMemoryCost;
}
function storageCost(extraStorageCost){
    // console.log(extraStorageCost);
    return extraStorageCost;
}
function deliveryCost(extraDeliveryCost){
    // console.log(extraDeliveryCost);
    return extraDeliveryCost;
}



// Total product cost 
function totalCost(){
    let bestPriceText = document.getElementById('best-price');
    let bestPrice = parseFloat(bestPriceText.innerText);


    totalProductCost  = bestPrice + extraMemoryCost + extraStorageCost + totaldDeliveryCost;
    // console.log(totalProductCost);

    let totalProductPrice = document.getElementById('total-p-price');
    totalProductPrice.innerText = totalProductCost;
}



// Appy promo code 
document.getElementById('apply-btn').addEventListener('click', function (){
    applyPromo();
});


// Total product cost after promo applied
function applyPromo(){
    let promoText = document.getElementById('promo-text').value;
    
    if(promoText == 'stevekaku'){
        // console.log('applied');
        totalProductCost = (totalProductCost * 90) / 100;
        // console.log(totalProductCost);

        let totalPrice = document.getElementById('total-price');
        totalPrice.innerText = parseFloat(totalProductCost).toFixed(2);
        // console.log(totalPrice);
    }
}


