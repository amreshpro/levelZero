console.log("A3.3_HW_1");
console.log("---- ---- ----");


// 1.1
let employee1Name = "Rahul"
let employee1Grade = 90
let employee1HoursWorked = 27
let employee1Salary = 45000
let employee1VacationLeaveTaken = 2
let employee1SickLeaveTaken = 1

// 1.2
let employee1Bonus

if (employee1HoursWorked > 30 && employee1Grade > 75) {
    employee1Bonus = 0.2
}
else if (employee1HoursWorked > 25 && employee1Grade > 95) {
    employee1Bonus = 0.15
}
else {
    employee1Bonus = 0.1
}


// 1.3

let employee1PFDeduction

if (employee1Salary > 35000) {
    employee1PFDeduction = (12.5 / 100) * employee1Salary
}else{
    employee1PFDeduction = 2500
}


// 1.4
let employee1TDSDeduction
if (employee1Salary > 40000) {
    employee1TDSDeduction = (0.1) * employee1Salary
}
else{
    employee1TDSDeduction = 199
}


// 1.5
