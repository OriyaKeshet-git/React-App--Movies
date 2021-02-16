import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import * as userService from '../services/userService';
import auth from '../services/authService';
class RegisterForm extends Form{
    state={
        data: {username:'', password:'', name:''},
        errors:{}
        
    };
    schema={
        username: Joi.string().required().email().label('UserName'),
        password: Joi.string().required().min(5).label('PassWord'),
        name: Joi.string().required().label('Name')
    };

    doSubmit=async()=>{
        //call the server
        try{
        //console.log("Submitted");
        const response=await userService.register(this.state.data);
        //console.log(response);
        auth.loginWithJwt(response.headers['x-auth-token']);
        //localStorage.setItem('token',response.headers['x-auth-token']);
        //this.props.history.push('/');
        window.location='/'; //need refresh in order to detect that we have valid jwt and the user is logged in ! and we do not show the user the login navbar and register navbar
        }
        catch(ex)
        {
            if(ex.response&&ex.response.status===400)
            {
                const errors={...this.state.errors};
                errors.username=ex.response.data;
                this.setState({errors});
            }
        }
    }
    
    render() { 
        return (  <div >
            <h1>Register</h1>
            <form  onSubmit={this.handleSubmit}>
                {this.renderInput("username","Username")}
                {this.renderInput("password","Password","password")}
                {this.renderInput("name","Name")}
                {this.renderButton("Register")}
            </form>
        </div> );
    }
}
 
export default RegisterForm;