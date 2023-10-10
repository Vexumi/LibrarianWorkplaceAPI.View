
const FormProperty = (props:any) => {
    return (
    <div className="form-property">
        <label className="form-property-name">{props.label}:</label>
        <input type={props.inputType} placeholder={props.placeholder} onChange={props.onChange}/>
    </div>
    )
}

export default FormProperty