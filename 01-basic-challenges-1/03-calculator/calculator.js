function calculator(num1, num2, operator) {
  if (typeof num1 !== 'number') throw new Error("First number is not a number");
  if (typeof num2 !== 'number') throw new Error('Second number is not a number');
  
  let result;
  switch (operator) {
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		case '*':
			result = num1 * num2;
			break;
		case '/':
			result = num1 / num2;
			break;
    default: 
      throw new Error('Operator is not a valid string (+,-,*,/)');
  }
  return result
}

module.exports = calculator;
