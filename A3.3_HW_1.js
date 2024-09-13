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
} else {
    employee1PFDeduction = 2500
}


// 1.4
let employee1TDSDeduction
if (employee1Salary > 40000) {
    employee1TDSDeduction = (0.1) * employee1Salary
}
else {
    employee1TDSDeduction = 199
}


// 1.5

let employee1VacationDeduction = employee1VacationLeaveTaken * (employee1Salary / 30);
let employee1SickDeduction = employee1SickLeaveTaken * (employee1Salary / 30)

// 1.6

let employee1NetSalary = employee1Salary + (employee1Bonus * employee1Salary) - (employee1SickDeduction + employee1PFDeduction + employee1TDSDeduction + employee1VacationDeduction)

// 1.7

let employee1PaySlip = " Employee Name: " + employee1Name + "\n Grade: " + employee1Grade + "\n Hours Worked: " + employee1HoursWorked + "\n Salary: " + employee1Salary + "\n Bonus: " + employee1Bonus + "\n PF Deduction: " + employee1PFDeduction + "\n TDS Deduction: " + employee1TDSDeduction + "\n Vacation Deduction: " + employee1VacationDeduction + "\n Sick Deduction: " + employee1SickDeduction + "\n Net Salary: " + employee1NetSalary

console.log(" Payslip for Employee 1: ");
console.log(employee1PaySlip);
console.log("---- ---- ----");





// employee 2
// 1.1
let employee2Name = "Amresh"
let employee2Grade = 98
let employee2HoursWorked = 36
let employee2Salary = 75000
let employee2VacationLeaveTaken = 2
let employee2SickLeaveTaken = 1

// 1.2
let employee2Bonus

if (employee2HoursWorked > 30 && employee2Grade > 75) {
    employee2Bonus = 0.2
}
else if (employee2HoursWorked > 25 && employee2Grade > 95) {
    employee2Bonus = 0.15
}
else {
    employee2Bonus = 0.1
}


// 1.3

let employee2PFDeduction

if (employee2Salary > 35000) {
    employee2PFDeduction = (12.5 / 100) * employee2Salary
} else {
    employee2PFDeduction = 2500
}


// 1.4
let employee2TDSDeduction
if (employee2Salary > 40000) {
    employee2TDSDeduction = (0.1) * employee2Salary
}
else {
    employee2TDSDeduction = 199
}


// 1.5

let employee2VacationDeduction = employee2VacationLeaveTaken * (employee2Salary / 30);
let employee2SickDeduction = employee2SickLeaveTaken * (employee2Salary / 30)

// 1.6

let employee2NetSalary = employee2Salary + (employee2Bonus * employee2Salary) - (employee2SickDeduction + employee2PFDeduction + employee2TDSDeduction + employee2VacationDeduction)

// 1.7

let employee2PaySlip = " Employee Name: " + employee2Name + "\n Grade: " + employee2Grade + "\n Hours Worked: " + employee2HoursWorked + "\n Salary: " + employee2Salary + "\n Bonus: " + employee2Bonus + "\n PF Deduction: " + employee2PFDeduction + "\n TDS Deduction: " + employee2TDSDeduction + "\n Vacation Deduction: " + employee2VacationDeduction + "\n Sick Deduction: " + employee2SickDeduction + "\n Net Salary: " + employee2NetSalary

console.log(" Payslip for Employee 2: ");

console.log(employee2PaySlip);
console.log("---- ---- ----");






// employee 3
// 1.1
let employee3Name = "Ritika"
let employee3Grade = 96
let employee3HoursWorked = 40
let employee3Salary = 65000
let employee3VacationLeaveTaken = 3
let employee3SickLeaveTaken = 1

// 1.2
let employee3Bonus

if (employee3HoursWorked > 30 && employee3Grade > 75) {
    employee3Bonus = 0.2
}
else if (employee3HoursWorked > 25 && employee3Grade > 95) {
    employee3Bonus = 0.15
}
else {
    employee3Bonus = 0.1
}


// 1.3

let employee3PFDeduction

if (employee3Salary > 35000) {
    employee3PFDeduction = (12.5 / 100) * employee3Salary
} else {
    employee3PFDeduction = 2500
}


// 1.4
let employee3TDSDeduction
if (employee3Salary > 40000) {
    employee3TDSDeduction = (0.1) * employee3Salary
}
else {
    employee3TDSDeduction = 199
}


// 1.5

let employee3VacationDeduction = employee3VacationLeaveTaken * (employee3Salary / 30);
let employee3SickDeduction = employee3SickLeaveTaken * (employee3Salary / 30)

// 1.6

let employee3NetSalary = employee3Salary + (employee3Bonus * employee3Salary) - (employee3SickDeduction + employee3PFDeduction + employee3TDSDeduction + employee3VacationDeduction)

// 1.7
let employee3PaySlip = " Employee Name: " + employee3Name + "\n Grade: " + employee3Grade + "\n Hours Worked: " + employee3HoursWorked + "\n Salary: " + employee3Salary + "\n Bonus: " + employee3Bonus + "\n PF Deduction: " + employee3PFDeduction + "\n TDS Deduction: " + employee3TDSDeduction + "\n Vacation Deduction: " + employee3VacationDeduction + "\n Sick Deduction: " + employee3SickDeduction + "\n Net Salary: " + employee3NetSalary

console.log(" Payslip for Employee 3: ");
console.log(employee3PaySlip);
console.log("---- ---- ----");





