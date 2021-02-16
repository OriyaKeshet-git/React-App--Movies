import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Link} from "react-router-dom";
class NavBar extends Component {
    state = {  }
    render() { 
        return (  








<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Vidly</Link>
  <button 
  className="navbar-toggler" 
  type="button"
   data-toggle="collapse" 
   data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      
        <NavLink className="nav-item nav-link" to="/movies">Movies</NavLink>
      
        <NavLink className="nav-item nav-link" to="/customers">Customers</NavLink>
      
        <NavLink className="nav-item nav-link" to="/rentals">Rentals</NavLink>
        
        {this.props.user && 
        <React.Fragment>
          
          <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>
          <NavLink className="nav-item nav-link" to="/profile">{this.props.user.name}</NavLink>
         
        </React.Fragment>}
      





        {!this.props.user && 
        <React.Fragment>
          <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
          <NavLink className="nav-item nav-link" to="/register">Register</NavLink>
        </React.Fragment>}
      
      
      
      
    </div>
    
  </div>
</nav>





















        );
    }
}
 
export default NavBar;






//