import styles from "./styles.module.css";

function InputField({ nome, type }) {
  return (
    <div className={styles.InputField}>
      <label>{nome}</label>
      <input className={styles.InputField_input} type={type} required />
    </div>
  );
}
export default InputField;
