import { instance } from "./api.config.js";

const AuthService = {

    login (UserName:string, Password:string) {
        return instance.post("/auth", {UserName, Password})
    },
    
    // refreshToken() {
    //     return instance.get("/refresh")
    // },
    
    logout() {
        return instance.post("/logout")
    }
}

export default AuthService