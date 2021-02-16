import { createContext } from "react";

import React, { Component } from 'react';

import MoviePage from './MoviePage';
import UserContext from "./userContext";
import Login from "./Login";
import CartContext from './cartContext';

class supposetobeApp extends Component {

   state={CurrentUser:{name:null}};
 
   handleLoggedIn=(username)=>{
       console.log("Getting the user:"+username);
       const user={name: "Mosh"};
       this.setState({CurrentUser:user});
   }



    render() {
        return (
            <CartContext.Provider value={{ cart: []}} > 
            <UserContext.Provider value={{
                CurrentUser:this.state.CurrentUser, onLoggedIn: this.handleLoggedIn}}>
            <div>
              <MoviePage.jsx/> 
              <Login/> 
            </div>
            </UserContext.Provider>
            </CartContext.Provider>
        );
    }
}

export default supposetobeApp;