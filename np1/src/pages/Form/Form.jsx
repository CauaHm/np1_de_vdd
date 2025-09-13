import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import styles from './styles.module.css'

function Form() {
  return (
    <div className={styles.FormComponent}>
      <form className={styles.Form}>
        <h1 className={styles.Form_h1}>Cadastro</h1>
        <InputField nome="Nome" type="text" />
        <InputField nome="Email" type="email" />
        <InputField nome="Senha" type="password" />
        <InputField nome="Confirmação de Senha" type="password" />
        <SubmitButton />
      </form>
    </div>
  );
}
export default Form;
