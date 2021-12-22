// Default value for products
const memory8gb = 0, memory16gb = 180;
const storage256gb = 0, storage512gb = 100, storage1tb = 180;
const deliveryPrime = 0, deliveryNormal = 20;

// value initaialize 
let extraMemoryCost = 0, extraStorageCost = 0, totaldDeliveryCost = 0;
let totalProductCost = 1299;

// optimized Code 
document.getElementById('right-div').addEventListener('click', function (event){
    const extraMemory = document.getElementById('extra-memory');
    const extraStorage = document.getElementById('extra-storage');
    const deliveryCharge = document.getElementById('delivery-charge');


    const eventId = event.target.id;

    switch(eventId){
        case '8gb-memory':
            extraMemory.innerText = memory8gb;
            extraMemoryCost = memory8gb;
            break;
        case '16gb-memory':
            extraMemory.innerText = memory16gb;
            extraMemoryCost = memory16gb;
            break;
        case '256gb-ssd':
            extraStorage.innerText = storage256gb;
            extraStorageCost = storage256gb;
            break;
        case '512gb-ssd':
            extraStorage.innerText = storage512gb;
            extraStorageCost = storage512gb;
            break;
        case '1tb-ssd':
            extraStorage.innerText = storage1tb;
            extraStorageCost = storage1tb;
            break;
        case 'prime-delivery':
            deliveryCharge.innerText = deliveryPrime;
            totaldDeliveryCost = deliveryPrime;
            break;
        case 'normal-delivery':
            deliveryCharge.innerText = deliveryNormal;
            totaldDeliveryCost = deliveryNormal;
            break;
        case 'apply-btn':
            applyPromo();
            break;
    }

    totalCost();

});

// Total product cost 
function totalCost(){
    let bestPriceText = document.getElementById('best-price');
    let bestPrice = parseFloat(bestPriceText.innerText);


    totalProductCost  = bestPrice + extraMemoryCost + extraStorageCost + totaldDeliveryCost;
    // console.log(totalProductCost);

    document.getElementById('total-p-price').innerText = totalProductCost;
}


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