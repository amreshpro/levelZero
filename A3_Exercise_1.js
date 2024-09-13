console.log("A3_Exercise_1");
console.log("---------------------------");
console.log("Sales Performance Report");
console.log("---------------------------");

// rahul
let rahulSalesTarget = 100
let rahulActualSales = 85
let rahulSalesPercentage = (rahulActualSales / rahulSalesTarget) * 100
let rahulPerformance
let rahulBonusAmount

if (rahulSalesPercentage >= 90) {
    rahulPerformance = "High Performer"
    rahulBonusAmount = (0.2 * rahulActualSales)
}
else if (rahulSalesPercentage >= 70) {
    rahulPerformance = "Average Performer"
    rahulBonusAmount = (0.1 * rahulActualSales)
}
else {
    rahulPerformance = "Low Performer"
    rahulBonusAmount = 0
}


let rahulSalesReport = "Rahul" + "\nSales Target: " + rahulSalesTarget + " units" + "\nUnits Sold: " + rahulActualSales + " units" + "\nSales Percentage: " + rahulSalesPercentage + "%\nPerformance: " + rahulPerformance + "\nBonus Amount: " + rahulBonusAmount + " units"

console.log(rahulSalesReport);
console.log("---------------------------");


// priya
let priyaSalesTarget = 200
let priyaActualSales = 180
let priyaSalesPercentage = (priyaActualSales / priyaSalesTarget) * 100
let priyaPerformance
let priyaBonusAmount

if (priyaSalesPercentage >= 90) {
    priyaPerformance = "High Performer"
    priyaBonusAmount = (0.2 * priyaActualSales)
}
else if (priyaSalesPercentage >= 70) {
    priyaPerformance = "Average Performer"
    priyaBonusAmount = (0.1 * priyaActualSales)
}
else {
    priyaPerformance = "Low Performer"
    priyaBonusAmount = 0
}


let priyaSalesReport = "Priya" + "\nSales Target: " + priyaSalesTarget + " units" + "\nUnits Sold: " + priyaActualSales + " units" + "\nSales Percentage: " + priyaSalesPercentage + "%\nPerformance: " + priyaPerformance + "\nBonus Amount: " + priyaBonusAmount + " units"

console.log(priyaSalesReport);
console.log("---------------------------");


// amit
let amitSalesTarget = 150
let amitActualSales = 120
let amitSalesPercentage = (amitActualSales / amitSalesTarget) * 100
let amitPerformance
let amitBonusAmount

if (amitSalesPercentage >= 90) {
    amitPerformance = "High Performer"
    amitBonusAmount = (0.2 * amitActualSales)
}
else if (amitSalesPercentage >= 70) {
    amitPerformance = "Average Performer"
    amitBonusAmount = (0.1 * amitActualSales)
}
else {
    amitPerformance = "Low Performer"
    amitBonusAmount = 0
}


let amitSalesReport = "Amit" + "\nSales Target: " + amitSalesTarget + " units" + "\nUnits Sold: " + amitActualSales + " units" + "\nSales Percentage: " + amitSalesPercentage + "%\nPerformance: " + amitPerformance + "\nBonus Amount: " + amitBonusAmount + " units"

console.log(amitSalesReport);
console.log("---------------------------");








