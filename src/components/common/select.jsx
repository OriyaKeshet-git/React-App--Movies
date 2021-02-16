import React, { Component } from 'react';
const Select = ({name, label, options, error, value, ...rest}) => {
    return ( <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <select 
    value={value}
    name={name}
    {...rest} //include type onChange  value!!
    id={name} 
     
    //{...rset} is equal to value={value} onChange={onChange} type={type}  name={name}!!!!!
     className="form-control" >
              <option value="" />
              {options.map(option=>(
                <option key={option._id} value={option._id}>
                {option.name}
                </option>
                ))}

    </select>
    {value}
    { error &&<div className="alert alert-danger">{error}</div>}
</div> );
}
 
 
export default Select;