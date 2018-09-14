function add(numOne, numTwo) {
var results = numOne + numTwo;

return results;  
  
}

function subtract (numOne, numTwo) {
var results = numOne - numTwo;

return results;  
  
}

function multiply (numOne, numTwo) {
var results = numOne * numTwo;

return results;  
  
}

function divide (numOne, numTwo) {
var results = numOne / numTwo;

return results;  
  
}

function inc (num) {
var results = num += 1; 

return results;  
  
}

function dec (num) {
var results = num -= 1; 

return results;  
  
}

function Int (x, base ) {
  var parsed = parseInt(x, base);
  if (isNaN(parsed)) { return "NaN" }
  return parsed 
}

  

