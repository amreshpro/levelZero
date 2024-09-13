console.log("A3.3_HW_2");
console.log("--------------------------------");
console.log("Quarterly Savings Report");
console.log("--------------------------------");

let goalAmount = 12000

let currentSavingsMonth1 = 3000
let currentSavingsMonth2 = 5000
let currentSavingsMonth3 = 8000

let savingsContributionsMonth1 = 1000
let savingsContributionsMonth2 = 1500
let savingsContributionsMonth3 = 2000

let totalCurrentSavings = currentSavingsMonth1 + currentSavingsMonth2 + currentSavingsMonth3
let totalSavingsContributions = savingsContributionsMonth1 + savingsContributionsMonth2 + savingsContributionsMonth3
let quarterlyGoalAmount = goalAmount / 4

let percentageAchieved = (totalCurrentSavings / quarterlyGoalAmount) * 100

let projectTimeline


if (percentageAchieved >= 100) {
    projectTimeline = "Congratulations! You have already achieved your quarterly savings goal!"
}
else {
    projectTimeline = "Based on your current savings rate, it may take some additional time to reach your quarterly goal.Consider increasing your savings contributions."
}


let savingsTips
if (percentageAchieved >= 80) {
    savingsTips = "Great job! You are making excellent progress towards your quarterly goal. Keep up the good work!"
}
else if (percentageAchieved >= 50) {
    savingsTips = "You are halfway there! Try to find additional ways to save money and increase your savings rate."
}
else {
    console.log("To reach your quarterly savings goal sooner,consider cutting back on non-essential expenses and finding opportunities to save nore.");
}



console.log("Goal Amount: ", goalAmount);
console.log("Quarterly Goal Amount: ", quarterlyGoalAmount);
console.log("Total Current Savings: ", totalCurrentSavings);
console.log("Total Savings Contributions: ", totalSavingsContributions);
console.log("Percentage Achieved: ", percentageAchieved);

console.log("Projected Timeline: ", projectTimeline);
console.log("Savings Tips:", savingsTips)

