import { Container, Content, Grid } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button/button";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleClick = (value: string) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${value}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation("");
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("x");
    } else {
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiply));
      setOperation("");
    }
  };

  const handleDivideNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("/");
    } else if (currentNumber === "0") {
      setCurrentNumber("Não pode dividir por zero");
      setOperation("");
    } else {
      const divide = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divide));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "x":
          handleMultiplyNumbers();
          break;
        case "/":
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  };

  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Grid>
          <Button label="Limpar" clearButton functionButton onClick={handleClear} />
          <Button label="x" functionButton onClick={handleMultiplyNumbers} />
          <Button label="÷" functionButton onClick={handleDivideNumbers} />

          <Button label="7" onClick={() => handleClick("7")} />
          <Button label="8" onClick={() => handleClick("8")} />
          <Button label="9" onClick={() => handleClick("9")} />
          <Button label="-" functionButton onClick={handleMinusNumbers} />

          <Button label="4" onClick={() => handleClick("4")} />
          <Button label="5" onClick={() => handleClick("5")} />
          <Button label="6" onClick={() => handleClick("6")} />
          <Button label="+" functionButton onClick={handleSumNumbers} />

          <Button label="1" onClick={() => handleClick("1")} />
          <Button label="2" onClick={() => handleClick("2")} />
          <Button label="3" onClick={() => handleClick("3")} />
          <Button label="=" equalButton functionButton onClick={handleEquals} />

          <Button label="0" zeroButton onClick={() => handleClick("0")} />
          <Button label="." onClick={() => handleClick(".")} />
        </Grid>
      </Content>
    </Container>
  );
}

export default App;
