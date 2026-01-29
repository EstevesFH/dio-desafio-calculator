import Button from "./components/Button";
import Input from "./components/Input";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [hasPercentage, setHasPercentage] = useState(false);

  const handleOnClear = () => {
    setDisplayValue('0');
    setFirstNumber(null);
    setOperation(null);
    setWaitingForOperand(false);
    setHasPercentage(false);
  }

  const handleBackspace = () => {
    setDisplayValue(prev => {
      if (prev.length === 1) return '0';
      const newValue = prev.slice(0, -1);
      // Check if we removed the percentage sign
      if (prev.endsWith('%')) {
        setHasPercentage(false);
      }
      return newValue === '' ? '0' : newValue;
    });
  }

  const handleAddNumber = (number) => {
    if (waitingForOperand) {
      setDisplayValue(String(number));
      setWaitingForOperand(false);
      setHasPercentage(false);
    } else {
      // Prevent adding numbers after percentage
      if (hasPercentage) return;
      
      // Check for multiple decimal points
      const currentParts = displayValue.split(/[\+\-\*\/]/);
      const lastNumber = currentParts[currentParts.length - 1].trim();
      
      if (number === '.' && lastNumber.includes('.')) return;
      
      setDisplayValue(displayValue === '0' ? String(number) : displayValue + number);
    }
  }

  const handleOperation = (nextOperation) => {
    const inputValue = parseFloat(displayValue.split(/[\+\-\*\/]/).pop().replace('%', ''));
    
    if (firstNumber === null) {
      setFirstNumber(inputValue);
    }
    
    setOperation(nextOperation);
    setWaitingForOperand(false);
    setHasPercentage(false);
    
    // Add operation symbol to display
    setDisplayValue(displayValue + ' ' + nextOperation + ' ');
  }

  const handlePercentage = () => {
    if (!hasPercentage) {
      setDisplayValue(displayValue + '%');
      setHasPercentage(true);
    }
  }
  
  const handleEquals = () => {
    const parts = displayValue.split(/\s*([\+\-\*\/])\s*/);
    
    if (parts.length < 3) return;
    
    const first = parseFloat(parts[0]);
    const op = parts[1];
    const secondPart = parts[2];
    
    const isPercent = secondPart.includes('%');
    const second = parseFloat(secondPart.replace('%', ''));
    
    let result;
    
    if (isPercent) {
      const percentValue = (first * second) / 100;
      switch(op) {
        case '+':
          result = first + percentValue;
          break;
        case '-':
          result = first - percentValue;
          break;
        case '*':
          result = percentValue;
          break;
        case '/':
          result = first / (second / 100);
          break;
        default:
          return;
      }
    } else {
      switch(op) {
        case '+':
          result = first + second;
          break;
        case '-':
          result = first - second;
          break;
        case '*':
          result = first * second;
          break;
        case '/':
          result = first / second;
          break;
        default:
          return;
      }
    }
    
    setDisplayValue(String(result));
    setFirstNumber(null);
    setOperation(null);
    setWaitingForOperand(true);
    setHasPercentage(false);
  }

  return (
    <Container>
      <Content>
        <Input value={displayValue} /> 
        <Row>
          <Button label="<" onClick={handleBackspace} variant="clear" />
          <Button label="c" onClick={handleOnClear} variant="clear" />
          <Button label="%" onClick={handlePercentage} variant="operation" />
          <Button label="/" onClick={() => handleOperation('/')} variant="operation" />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="x" onClick={() => handleOperation('*')} variant="operation" />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={() => handleOperation('-')} variant="operation" />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={() => handleOperation('+')} variant="operation" />
        </Row>
        <Row>
          <Button label="." onClick={() => handleAddNumber('.')} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="," onClick={() => handleAddNumber('.')} />
          <Button label="=" onClick={handleEquals} variant="equals" />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
