import styles from "./App.module.css";
import ButtonContainer from "./components/buttonContainer";
import Display from "./components/Display";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");



  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  
  return (
    <div className={styles.calculator}>
      <h3>Calculator</h3>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      
    </div>
  );
}

export default App;
