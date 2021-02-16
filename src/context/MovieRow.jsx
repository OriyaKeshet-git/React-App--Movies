import React, {useContext} from 'react';
import UserContext from './userContext';
import CartContext from './cartContext';


function MovieRow(props) {
    const  userContext=useContext(UserContext);
    const  cartContext=useContext(CartContext);
    console.log("the user context", userContext);
    console.log("the cart context", cartContext);
    return (
        <div>
           Movie Row {userContext.CurrentUser ? userContext.CurrentUser.name : ""} 
        </div>
    );
}

export default MovieRow;