import axios from 'axios';

import React, { useEffect } from 'react';

function Users(props) {
  const [users,setUsers]=useState([]);


  useEffect(()=>
  {
      
    async function getUsers()
    { 
        const result=await axios('https://jsonplaceholder.typicode.com/users');
        setUsers(result.data);//update the hook with the users values!
    }

    getUsers();

  }

);



    return (
        <div>
           <ul>
               {users.map(x=><li key={x.id}>{x.name}</li>)}
          </ul> 
        </div>
    );
}

export default Users;