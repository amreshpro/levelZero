console.log("A3_Exercise_2");
console.log("-----------------------------");
console.log("Daily Reports: ");

let day1Burnt = 400
let day1Intake = 1500

let day2Burnt = 400
let day2Intake = 1500

let day3Burnt = 400
let day3Intake = 1500

let day4Burnt = 400
let day4Intake = 1500

let day5Burnt = 400
let day5Intake = 1500

let baseCalorie = 1500

let day1Surplus = day1Burnt - (day1Intake + baseCalorie)
let day2Surplus = day2Burnt - (day2Intake + baseCalorie)
let day3Surplus = day3Burnt - (day3Intake + baseCalorie)
let day4Surplus = day4Burnt - (day4Intake + baseCalorie)
let day5Surplus = day5Burnt - (day5Intake + baseCalorie)


let totalBurnt = day1Burnt + day2Burnt + day3Burnt + day4Burnt + day5Burnt
let totalIntake = day1Intake + day2Intake + day3Intake + day4Intake + day5Intake
let totalSurplus = totalBurnt - (totalIntake - (5*baseCalorie))

let day1Report = day1Surplus > 0 ? "Surplus" : "Deficit"
let day2Report = day2Surplus > 0 ? "Surplus" : "Deficit"
let day3Report = day3Surplus > 0 ? "Surplus" : "Deficit"
let day4Report = day4Surplus > 0 ? "Surplus" : "Deficit"
let day5Report = day5Surplus > 0 ? "Surplus" : "Deficit"

let dailyReports = "Daily Reports:\n" + "Day 1: " + day1Report+": " + day1Surplus +"(" + day1Report + ")"


console.log(dailyReports);
// let weeklySummary = "\n Weekly Summary: \n"
// let standingGoalAwards = ""