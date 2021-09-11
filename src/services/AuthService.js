import axios from "axios";
import LocalStorageService from "./LocalStorageService";

export default class AuthService {

    currentUserId =  "";
    apiUrl="https://localhost:44320/api/auth/";
    localStorageService = new LocalStorageService();
  
    login(login){
      return axios.post(this.apiUrl+"login",login)
    }
  
    register(register){
      return axios.post(this.apiUrl+"register", register) 
    }
  
    isAuthenticated(){
      if(localStorage.getItem("token")){
        return true;
      }
      else{
        return false;
      }
    }
  
    setCurrentUserId(){
      var decoded = this.getDecodedToken()
      var propUserId = Object.keys(decoded).filter(x => x.endsWith("/nameidentifier"))[0];
      this.currentUserId = Number(decoded[propUserId]);
    }
  
    getCurrentUserId() {
      return this.currentUserId
    }
    getDecodedToken(){
      try{
        return JSON.parse(this.localStorageService.getToken());
      }
      catch(Error){
          return null;
      }
    }
    // async setUserStats(){
    //   if(this.loggedIn()){
    //     this.setCurrentUserId()
        
      
    //   }
    // }
    // loggedIn() {
    //   let isExpired = this.jwtHelperService.isTokenExpired(this.localStorageService.getToken());
    //   return !isExpired;
    // }
  }