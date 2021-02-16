import axios from 'axios';
import {toast} from 'react-toastify';
import logger from './logService';
//import auth from './authService';

//axios.defaults.headers.common['x-auth-token']=auth.getJwt();

axios.defaults.baseURL=process.env.REACT_APP_API_URL; // that value be replace with different value dependes on the way we build the app




//console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",process.env.REACT_APP_API_URL);


function setJwt(jwt){
 
    axios.defaults.headers.common["x-auth-token"]=jwt;

}





axios.interceptors.response.use(null,error=>{

   const expectedError=error.response&&error.response.status>=400&&error.response.status<500;

    if(!expectedError)
        { logger.log(error);//unexpected error!
         toast("unexpeced error occured");}  
  
    return Promise.reject(error);
});


export default{
get:axios.get, 
post:axios.post,
put:axios.put,
delete:axios.delete,
setJwt
};