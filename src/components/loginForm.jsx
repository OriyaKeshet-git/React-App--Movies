import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import authService, {login} from '../services/authService';
import { Redirect } from 'react-router-dom';
class LoginForm extends Form {
//     username=React.createRef();//1 way
//    componentDidMount(){
//        this.username.current.focus(); //1 way
//    }

   
    // the old way!!!
    // handleChange=({e})=>{
    //     const data={...this.state.data};
    //     data[e.currentTarget.name]=e.currentTarget.value;//
    //     this.setState({data});
    // }
    
    schema={
        username: Joi.string().required().label('UserName'),
        password: Joi.string().required().label('PassWord')
    };
    
   
    doSubmit=async()=>{
        //call the server
        console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSubmitted");
        try{
           const {data}=this.state;
           //const {data:jwt}=await login(data.username,data.password);
           //localStorage.setItem('token',jwt);
           await login(data.username,data.password);
           //this.props.history.push('/');
           console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaA",data.username);
           const {state} =this.props.location;// protectedroute.js deliver the state to here
           window.location = state ? state.from.pathname : '/';
           
        }
        catch(ex){
          if(ex.response&&ex.response.status===400){
              const errors={...this.state.errors};
              errors.username=ex.response.data;// update the state with the errors from the server!!
              this.setState({errors});
          }
        }
        
    }

    state={
        data: {username:'', password:''},
        errors:{}
        
    };
    render() {
     if(authService.getCurrentUser()) return <Redirect to="/"/>;
        return ( 

/// we write in inpute ref={this.username} that is the 1 way to soleve the connection with the form!
      <div >
          <h1 className="TitleofLogin">Login</h1>
          <form  onSubmit={this.handleSubmit}>
              {this.renderInput("username","Username")}
              {this.renderInput("password","Password","password")}
              {this.renderButton("LogIn")}
          </form>
      </div>



         );
    }
}
 
export default LoginForm;