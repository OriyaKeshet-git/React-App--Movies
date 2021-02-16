import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';
class Form extends Component {
    state={
        data: {},
        errors:{}
        
    };
    validateProperty=({name, value})=>{
        console.log("this in validateProperty",this)
        const obj={[name]:value};//obj[name]=value; the same as above!!
        const schema={[name]:this.schema[name]};
        const {error}=Joi.validate(obj,schema);
       //  if(error) return null;
       //  return error.details[0].message;// maybe we have a lot of errors, but we want to return the first error!!!
        return error ? error.details[0].message : null;






       //  if(name==="username")
       //  {
       //    if(value.trim()==='') return 'Username is requires.';
       //    //...
       //  }
       //  if(name==="password")
       //  {
       //    if(value.trim()==='') return 'Password is requires.';
       //    //...
       //  }

        

         
   }
    validate=()=>{
        console.log("this in validate",this)
        const {error}=Joi.validate(this.state.data,this.schema, {abortEarly:false});
        if(!error) return null;//there are no error 
        const errors={};
        for(let item of error.details)
        {
            errors[item.path[0]]=item.message;
        }
       return errors;


        // const errors={};
        // const {data}=this.state;
        // if(data.username.trim()==='')
        //   errors.username="Username is required";
        // if(data.password.trim()==='')
        //   errors.password="Password is required";
        // return Object.keys(errors).length===0 ? null: errors; 
        
         }


         handleSubmit=e=>{

            //the good place to call the server!
           //  const data=this.username.current.value;//1 way
           //  console.log('Submitted', data);
   
           e.preventDefault();
   
           const errors=this.validate();
           this.setState({errors: errors || {}});
           if(errors) return; //if we have error (not null) we do not call server!!
           console.log("this in handleSubmit",this); //because we are in an arrow functon. the this is inherited from the object/classs component that it comes from
           this.doSubmit();
          
       }



       
    handleChange=({currentTarget:input})=>{

        console.log("this in handleChange",this)
        const errors={...this.state.errors};
        const errorMessage=this.validateProperty(input);
        if(errorMessage) errors[input.name]=errorMessage;
        else delete errors[input.name];
        //this.setState({errors});// 1

        console.log("currenttarget",input.value);
        const data={...this.state.data};
        data[input.name]=input.value;//
        //  setTimeout(()=>this.setState({data}),50000);//1
        this.setState({data, errors});//2
    }
    renderInput(name,label, type="text"){
        console.log("this in renderInput", this);
        const {data, errors} =this.state;
        return( <Input  
            // x={this.username} 
            type={type}
            name={name}
            label={label} 
            value={data[name]} 
            onChange={this.handleChange}
            error={errors[name]} />);
       
    }

    renderSelect(name,label,options){
        console.log("rendered the SELECT");
        const {data, errors} =this.state;
        const val=(options.filter(x=>{ if(x._id===data[name]) return x;})[0])
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", val);
        return( <Select  
            // x={this.username} 
            options={options}
            name={name}
            label={label} 
            value={ data[name]} 
            onChange={this.handleChange}
            error={errors[name]} />);
       
    }












    renderButton(label){
      console.log("this in renderButton", this);
      return  <button disabled={this.validate()} className="btn btn-primary">{label}</button>
    }

   
}
 
export default Form;