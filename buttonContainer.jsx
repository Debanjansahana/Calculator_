import styles from "./buttonContainer.module.css";
const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
  ".",
"00",
];
  return (
    <div className={styles.ButtonContainer}>
      {buttonNames.map((buttonNames => <button className={styles.button} onClick={() =>onButtonClick(buttonNames)}>{buttonNames}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
