const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

// Loop through employees array
for (let employee of employees){
console.log('looping', employee);
let result = bonusCalculation(employee);
console.log('result is', result);
}

function bonusCalculation(employee){
  // calculate bonus
  let bonusPercentage;
  if (employee.reviewRating <= 2){
    bonusPercentage = 0;
  }
  else if (employee.reviewRating === 3){
    bonusPercentage = 4;
  }

  else if (employee.reviewRating === 4){
    bonusPercentage = 5;
  }

  else if (employee.reviewRating === 5){
    bonusPercentage = 10;
  }

  else {
    console.log ('WARNING: unexpected review');
  }

  console.log('bonus based on rating', employee.name, employee.reviewRating, bonusPercentage);

  //Extra bonus is 4 digits long
  if (employee.employeeNumber.length === 4){
    bonusPercentage +5;
    console.log(employee.name, 'has seniority, +5%', bonusPercentage);
  }

  //  If income > 65k....adjust down 1%

  if (employee.annualSalary > 65000){
    bonusPercentage -= -1;
    console.log ('Employee makes too much', bonusPercentage);
  }

  // Min/Max Bonus (13%/0%)

  if (bonusPercentage > 13){
    bonusPercentage = 13;
  }

  if (bonusPercentage < 0){
    bonusPercentage = 0;
    console.log("reset to 0");
  }

  // calculate bonus dollar ammount

  let totalBonus = employee.annualSalary * (bonusPercentage / 100);
  console.log('total bonus', totalBonus);

  // calculate total Compensation

  let totalCompensation = totalBonus+ Number(employee.annualSalary);
  console.log ('total compensation', totalCompensation);

  return {
    name: employee.name, // TO DO
    bonusPercentage: bonusPercentage,// TO DO
    totalCompensation: totalCompensation,// TO DO
    totalBonus: totalBonus,// TO DO
  }
}
