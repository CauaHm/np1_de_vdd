import InputField from "../InputField/InputField"
import SubmitButton from "../SubmitButton/SubmitButton"

function FormComponent() {
  return (
    <form className="FormComponent"> 
        <h1 className="FormComponent_h1">Cadastro</h1>
        <InputField nome="Nome" type="text"/>
        <InputField nome="Email" type="email"/>
        <InputField nome="Senha" type="password"/>
        <InputField nome="Confirmação de Senha" type="password"/>
        <SubmitButton/>
    </form>
  )
}
export default FormComponent
