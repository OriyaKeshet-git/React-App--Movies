import React from 'react';
// value onChange,type, x 
//...rest - contain type onchange and value
const Input = ({name, label,error,...rest}) => {
    return ( <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input 
    name={name}
    {...rest} //include type onChange  value!!
    id={name}  
    //{...rset} is equal to value={value} onChange={onChange} type={type}  name={name}!!!!!
   
    //autoFocus 
    //ref={x} //way1 in loginForm.jsx
    className="form-control" >
    </input>
    
    { error &&<div className="alert alert-danger">{error}</div>}
</div> );
}
 
export default Input;