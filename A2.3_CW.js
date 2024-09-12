console.log("A2.3_CW");
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")
console.log("1.1");
let totalAverage = 87
let hasSportsEndorsement = true

let isEligibleforScholarship = totalAverage > 85 || hasSportsEndorsement
console.log("Is the student eligible for scholarship?", isEligibleforScholarship);
console.log("---- ---- ----")

console.log("1.2");
let shoppingAmount = 1250
let hasPrimeMembership = true
let qualifiesForShipping = shoppingAmount > 999 || hasPrimeMembership

console.log("Does the user qualify for free shipping?", qualifiesForShipping);

console.log("---- ---- ----")

console.log("1.3");

let sbiBalance = 5000
let hdfBalance = 3000
let sareeCost = 2500
let kurtiCost = 1500
let jeweleryCost = 1000

let totalcost = sareeCost + kurtiCost + jeweleryCost

let isAffordable = totalcost <= sbiBalance || totalcost <= hdfBalance

console.log("Can you afford the purchase?", isAffordable);

console.log("---- ---- ----")
console.log("Exercise 2")

console.log("---- ---- ----")

console.log("2.1");
let selectedNumber = 85
let isInRange = selectedNumber >= 75 && selectedNumber <= 100
console.log("Is the selected number between 75 and 100?", isInRange);
console.log("---- ---- ----")
console.log("Exercise 3")

console.log("---- ---- ----")

console.log("3.1");
let shirtColor = "red"
let shirtSize = "L"
let shirtBrand = "Jockey"
let matchesFilter = shirtColor === "red" && shirtSize === "L" && (shirtBrand === "Jockey" || shirtBrand === "USPA")

console.log("Does the shirt match the filters?", matchesFilter);


console.log("---- ---- ----")

console.log("3.2");

let remainingItems = 4
let itemSize = "M"
let itemBrand = "Nike"

let isDiscountableApplicable = remainingItems < 5 && itemSize === "M" && (itemBrand === "Nike" || itemBrand === "Adidas")

console.log("Is the discount applicable?", isDiscountableApplicable);








