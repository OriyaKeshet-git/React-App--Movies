import React, { useState} from 'react';

import useDocumentTitle from './useDocumentTitle';
function Counter(props) {
    // const array=useState(0);
    // const count=array[0];     // the first value in the array is count
    // const setState=array[1]; // the second value in the array is a function that update the count
    const [count,setCount] = useState(0); // a short way to do the above...
    
    const [name,setName] = useState('');


    useDocumentTitle(`${name} has clicked ${count} times!`);


    // useEffect(()=>{
    // document.title=`${name} has clicked ${count} times!`;
    //   return()=>{ };
    
    // }, [count]);

   //this function get called every time our component had rendered, any time it get new props ...
   //we can change it by the second arguments that is an array of dependency ,
   //we list all the state variables that effect and a change in it will call the function ...





    return (
        <Fragment>
        <input type="text" onChange={e=>setName(e.target.value)}/>
        <div>
        {name} has clicked {count} times!
        </div>
        <button  onClick={()=> setState(count+1)}></button>
        </Fragment>
    );
}

export default Counter;