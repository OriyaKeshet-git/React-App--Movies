import React, {useContext} from 'react';
import UserContext from './userContext';

function Login(props) {
   const result=useContext(UserContext)
    return (
        <div>
          <button onClick={()=>result.onLoggedIn("username")}>Login</button>  
        </div>
    );
}

export default Login;