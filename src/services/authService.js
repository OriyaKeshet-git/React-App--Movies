import http from './httpService';
import jwtDecode from 'jwt-decode';
//import {apiUrl} from '../config.json';

//const apiEndpoint=apiUrl + "/auth";
const apiEndpoint="/auth";
const tokenKey="token";

http.setJwt(getJwt()); //we call the httpService instead of httpservice call uys beacuse that prevent b-conditional-dependencies


export function getJwt(){
    return localStorage.getItem(tokenKey);
}


export  async function login(email, password){
  const {data:jwt}=await  http.post(apiEndpoint,{ email, password});
  localStorage.setItem(tokenKey,jwt);


}




export function loginWithJwt(jwt){
    localStorage.setItem(tokenKey,jwt);

}



export function logout(){
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser(){
    try{
        const jwt=localStorage.getItem(tokenKey);
        const user=jwtDecode(jwt);
        return user;
        
        }
        catch(ex)
        {
          return null;
        }
}

export default {
login,
logout,
getJwt,
getCurrentUser,
loginWithJwt
};