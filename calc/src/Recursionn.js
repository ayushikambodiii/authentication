import { useState } from "react";

const Recursion = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const evaluateExpression = (expr) => {
    // Remove any whitespace from the expression
    expr = expr.replace(/\s/g, "");

    // Base case: if the expression is just a number, return it as the result
    if (!isNaN(expr)) {
      return parseInt(expr);
    }

    // Find the operator with the highest precedence
    let highestPrecedenceOperatorIndex = null;
    let parenthesesCount = 0;
    for (let i = 0; i < expr.length; i++) {
      if (expr[i] === "(") {
        parenthesesCount++;
      } else if (expr[i] === ")") {
        parenthesesCount--;
      } else if (parenthesesCount === 0) {
        if (expr[i] === "+" || expr[i] === "-") {
          highestPrecedenceOperatorIndex = i;
          break;
        } else if (expr[i] === "*" || expr[i] === "/") {
          highestPrecedenceOperatorIndex = i;
        }
      }
    }

    // Split the expression into left and right sub-expressions based on the operator with the highest precedence
    let operator = null;
    let leftExpression = null;
    let rightExpression = null;
    if (highestPrecedenceOperatorIndex !== null) {
      operator = expr[highestPrecedenceOperatorIndex];
      leftExpression = expr.slice(0, highestPrecedenceOperatorIndex);
      rightExpression = expr.slice(highestPrecedenceOperatorIndex + 1);
    } else {
      // If there is no operator, the expression must be enclosed in parentheses
      if (expr[0] === "(" && expr[expr.length - 1] === ")") {
        return evaluateExpression(expr.slice(1, -1));
      } else {
        throw new Error("Invalid expression: " + expr);
      }
    }

    // Evaluate the left and right sub-expressions recursively
    let leftResult = evaluateExpression(leftExpression);
    let rightResult = evaluateExpression(rightExpression);

    // Combine the results using the operator with the highest precedence
    switch (operator) {
      case "+":
        return leftResult + rightResult;
      case "-":
        return leftResult - rightResult;
      case "*":
        return leftResult * rightResult;
      case "/":
        return leftResult / rightResult;
      default:
        throw new Error("Invalid operator: " + operator);
    }
  };

  const handleClick = () => {
    try {
      let result = evaluateExpression(expression);
      setResult(result.toString());
    } catch (error) {
      setResult(error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={expression}
        onChange={(event) => setExpression(event.target.value)}
      />
      <button onClick={handleClick}>Calculate</button>
      <p>{result}</p>
    </div>
  );
};

export default Recursion;
