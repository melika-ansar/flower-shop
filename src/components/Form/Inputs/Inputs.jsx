import './Inputs.css'

function Inputs({types, placeholder}){
    return(
        <input 
        type={types}
        placeholder={placeholder}
        className='input'></input>
    )
}

export default Inputs;