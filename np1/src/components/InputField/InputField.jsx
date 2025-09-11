function InputField({nome, type}) {
    return (
      <div className="InputField"> 
          <label>{nome}</label>
          <input className="InputField_input" type={type} required/>
      </div>
    )
  }
  export default InputField
  