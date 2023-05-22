import { useState } from "react";

const Recur = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setExpression(e.target.value);
  };

  const handleClick = () => {
    setResult(calculation(expression)); 
  };

  const calculation = (exp) => {
     if (exp.includes("/")) {
      const [left, right] = exp.split("/");
      console.log("---left",left)
      console.log("---right",right)
      return calculation(left) / calculation(right);
    } 
    else if (exp.includes("*")) {
      const [left, right] = exp.split("*");
      console.log("---left",left)
      console.log("---right",right)
      return calculation(left) * calculation(right);
    } 
    else if (exp.includes("+")) {
      const [left, right] = exp.split("+");
      console.log("---left",left)
      console.log("---right",right)
      return calculation(left) + calculation(right);
    } 
    else if (exp.includes("-")) {
      const [left, right] = exp.split("-");
      console.log("---left",left)
      console.log("---right",right)
      return calculation(left) - calculation(right);
    } 
    else if (exp.includes("%")) {
      const [left, right] = exp.split("%");
      console.log("---left",left)
      console.log("---right",right)
      return calculation(left) % calculation(right);
    } 
    else {
      return Number(exp);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        value={expression}
        onChange={handleChange}
        style={{ width: "200px" }}
      />
      <br />
      <input
        type="button"
        onClick={handleClick}
        value={"submit"}
        className="button"
        style={{ width: "100px" }}
      />{" "}
      <br />
      <p style={{ margin: 10 }}>{result}</p>
    </div>
  );
};

export default Recur;   