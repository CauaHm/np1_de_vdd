function InputField({nome, type}) {
    return (
      <div> 
          <label>{nome}</label>
          <input type={type} id=""  required/>
      </div>
    )
  }
  export default InputField
  