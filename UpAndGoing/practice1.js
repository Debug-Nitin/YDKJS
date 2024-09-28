const TAX_RATE = 0.18;
const PHONE_PRICE = 1000;
const ACCESSORY_PRICE = 100;
const SPENDING_THRESHOLD = 1500;
const BANK_ACCOUNT_BALANCE = 15000;

const CalculateTax = (totalPrice) => {
    return totalPrice + totalPrice*TAX_RATE;
}
const FormatAmount = (totalPrice) => {
    return "$" + totalPrice.toFixed(2);
}

const calculateTotalPrice = (BANK_ACCOUNT_BALANCE,SPENDING_THRESHOLD)=>{
    var totalPrice =0;
    while(BANK_ACCOUNT_BALANCE>totalPrice){
        totalPrice += PHONE_PRICE;
        if(totalPrice<SPENDING_THRESHOLD){
            totalPrice +=ACCESSORY_PRICE;
        }
    }
    var Tax = TAX_RATE * totalPrice;
    var purchaseAmount = CalculateTax(totalPrice) ;
    var formattedPurchaseAmt = FormatAmount(purchaseAmount);
    console.log(`Your Purchase: ${formattedPurchaseAmt}`);
    if(BANK_ACCOUNT_BALANCE>purchaseAmount){
        console.log("can afford it");
    }else{
        console.log("cannot afford it");
    }
}
calculateTotalPrice(BANK_ACCOUNT_BALANCE,SPENDING_THRESHOLD);