export default class LocalStorageService {
  
    constructor() {
      this.localStorage = window.localStorage;
    }
  
    get(key){
      return this.localStorage.getItem(key);
    }
  
    set(key, value){
      this.localStorage.setItem(key,value);
    }
  
    remove(key){
      this.localStorage.removeItem(key);
    }
  
    clean(){
      this.localStorage.clear();
    }
    getToken(){
      return localStorage.getItem("token")
    }
  }