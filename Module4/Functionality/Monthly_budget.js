// Implement a function calculateMonthlyBudget(income, savings) 
// Calculate the budget by subtracting the savings from the income 
// Return the savings.
// Your code here
let income=0;
let savings=0;
let monthyBudget=0;
function calculateMonthlyBudget(income,savings) {
  monthyBudget=income-savings;
  return monthyBudget;
}




// Don't change this line
if(typeof module != 'undefined') {
  module.exports = { calculateMonthlyBudget };
}
