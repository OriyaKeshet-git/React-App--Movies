import React, { Component } from 'react';
import './App.css';
import Mov from './components/component';
import {Route, Switch, Redirect} from "react-router-dom";
import Rentals from './components/rental';
import NotFound from './components/notFound';
import Customers from './components/customers';
import NavBar from './components/navbar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import { ToastContainer } from 'react-toastify';
import Logout from './components/logout.';
import auth from './services/authService';
import ProtectedRoute from './components/common/protectedRoute';
class App extends Component {
  state={};
  componentDidMount(){
    const user=auth.getCurrentUser();
    this.setState({user});

  }
  render() {
    const {user}=this.state;
    return (
      <React.Fragment>
      <ToastContainer/>
      <NavBar user={user}/>
      <main className="container">
            <Switch>
            <Route path="/register" component={RegisterForm}/> 
            <Route path="/login" component={LoginForm}/>
            <Route path="/logout" component={Logout}/>

            
            
            <ProtectedRoute
            path="/movies/:id" 
            component={MovieForm}
            
            />

            <Route path="/movies" 
            render={props=> <Mov {...props} user={this.state.user}/>}
            />
            <Route path="/customers" component={Customers}/>
            <Route path="/rentals" component={Rentals}/>
            <Redirect from="/" exact to="/movies"/>
            <Route path="/not-found" component={NotFound}/>
            <Redirect to="/not-found"/>
            </Switch>


      </main>
      </React.Fragment>
    );
  }
}

export default App;