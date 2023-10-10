import { makeAutoObservable } from "mobx";
import AuthService from "../services/api.auth.js";

class AuthStore {   
  isAuth = false;
  isAuthInProgress = false;
  
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async login(email: string, password: string) {
    this.isAuthInProgress = true;
    try {
      const resp = await AuthService.login(email, password);
      localStorage.setItem("token", resp.data);
      this.isAuth = true;
      return true;
     } catch (err) {
      console.log("login error");
      return false;
     } finally {
      this.isAuthInProgress = false;
    } 
  }

//   async checkAuth() {
//     this.isAuthInProgress = true;
//     try {
//       const resp = await AuthService.refreshToken();
//       localStorage.setItem("token", resp.data.accessToken);
//       this.isAuth = true;

//      } catch (err) {
//       console.log("login error");
//      } finally {
//       this.isAuthInProgress = false;
//     } 
//   }

  async checkAuth(){
    if (localStorage.getItem("token") !== null) this.isAuth = true;
    else this.isAuth = false;
  }

  async logout() {
    this.isAuthInProgress = true;
    try {
      await AuthService.logout();
      this.isAuth = false;
      localStorage.removeItem("token");
    } catch (err) {
      console.log("logout error");
    } finally {
      this.isAuthInProgress = false;
    } 
  }
  
}

export default new AuthStore();