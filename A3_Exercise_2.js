console.log("A3_Exercise_2");
console.log("-----------------------------");

let day1Burnt = 400
let day1Intake = 1500

let day2Burnt = 450
let day2Intake = 1800

let day3Burnt = 300
let day3Intake = 1600

let day4Burnt = 500
let day4Intake = 2000

let day5Burnt = 350
let day5Intake = 1700

let baseCalorie = 1500

let day1Surplus = day1Burnt - (day1Intake + baseCalorie)
let day2Surplus = day2Burnt - (day2Intake + baseCalorie)
let day3Surplus = day3Burnt - (day3Intake + baseCalorie)
let day4Surplus = day4Burnt - (day4Intake + baseCalorie)
let day5Surplus = day5Burnt - (day5Intake + baseCalorie)


let totalBurnt = day1Burnt + day2Burnt + day3Burnt + day4Burnt + day5Burnt
let totalIntake = day1Intake + day2Intake + day3Intake + day4Intake + day5Intake
let totalSurplus = totalBurnt - (totalIntake - (5*baseCalorie))

let isSurplusOrDeficit1 = day1Surplus > 0 ? "Surplus" : "Deficit"
let isSurplusOrDeficit2 = day2Surplus > 0 ? "Surplus" : "Deficit"
let isSurplusOrDeficit3 = day3Surplus > 0 ? "Surplus" : "Deficit"
let isSurplusOrDeficit4 = day4Surplus > 0 ? "Surplus" : "Deficit"
let isSurplusOrDeficit5 = day5Surplus > 0 ? "Surplus" : "Deficit"

let dailyDay1Reports =  "Day 1: " +isSurplusOrDeficit1+": " + day1Surplus +" (" + isSurplusOrDeficit1 + ")\n"
let dailyDay2Reports =  "Day 2: " +isSurplusOrDeficit2+": " + day2Surplus +" (" + isSurplusOrDeficit2 + ")\n"
let dailyDay3Reports =  "Day 3: " +isSurplusOrDeficit3+": " + day3Surplus +" (" + isSurplusOrDeficit3 + ")\n"
let dailyDay4Reports =  "Day 4: " +isSurplusOrDeficit4+": " + day4Surplus +" (" + isSurplusOrDeficit4 + ")\n"
let dailyDay5Reports =  "Day 5: " +isSurplusOrDeficit5+": " + day5Surplus +" (" + isSurplusOrDeficit5 + ")\n"


let dailyReports = dailyDay1Reports +dailyDay2Reports+dailyDay3Reports+dailyDay4Reports+dailyDay5Reports


console.log("Daily Reports:\n" );
console.log(dailyReports);


console.log("-----------------------------");

console.log()
let weeklySummary = "\nWeekly Summary:\n"
let standingGoalAwards 

