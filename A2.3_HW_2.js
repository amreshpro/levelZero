console.log("A2.3_HW_2");
console.log("---- ---- ----");
console.log("Exercise 1");
console.log("---- ---- ----");
console.log("1.1");
let runsMatch1 = 78
let runsMatch2 = 102
let runsMatch3 = 45

let totalRuns = runsMatch1 + runsMatch2 + runsMatch3

let battingAverage = totalRuns / 3
let excellentFielding = true

let isCricketerSelected = battingAverage > 60 && excellentFielding

console.log("Is the cricketer selected? ", isCricketerSelected);

console.log("---- ---- ----");

console.log("1.2");

let gymMembership = true
let purchaseAmount = 1500

let qualifiesForDiscountedPurchase = purchaseAmount > 1499 || gymMembership 

console.log("Does the user qualify to purchase the item at a discounted price? ", qualifiesForDiscountedPurchase);


console.log("---- ---- ----");

console.log("1.3");

let iciciBalance = 8000
let axisBalance =6000
let laptopCost =35000
let phoneCost = 25000
let headphonesCost = 3000

let totalCost = laptopCost + phoneCost + headphonesCost

let canWeAffordElectronics = iciciBalance - totalCost >=0 || axisBalance - totalCost >=0

console.log("Can you afford the purchase? ", canWeAffordElectronics);


console.log("---- ---- ----");
console.log("Exercise 2");
console.log("---- ---- ----");
console.log("2.1");

let carSpeed = 65

let isSpeedInRange = carSpeed>=40 && carSpeed<=80

console.log("Is the car's speed between 40 and 80? ", isSpeedInRange);


console.log("---- ---- ----");
console.log("Exercise 3");
console.log("---- ---- ----");
console.log("3.1");

let phoneMemory  = 64
let phonePrice = 25000
let phoneBrand = "OnePlus"

let meetsCriteria = phoneMemory >=128 && phonePrice<=35000 && (phoneBrand==="OnePlus"||phoneBrand === "Samsung")

console.log("Does the phone meet the criteria? ",meetsCriteria);


console.log("---- ---- ----");
console.log("3.2");

let remainingItems = 4
let shoeSize = "M"
let shoeBrand ="Nike"

let isDiscountApplicable = remainingItems<5 && shoeSize ==="M" && (shoeBrand==="Nike"||shoeBrand==="Adidas")

console.log("Is the disount applicable? ",isDiscountApplicable);