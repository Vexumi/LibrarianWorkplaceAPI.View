import { useState } from "react";
import AuthStore from "../stores/AuthStore";
import { useNavigate } from "react-router-dom";
import '../css/login_page.css'
import '../css/util.css'

const Login = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-t-50 p-b-90">
                        <form className="login100-form validate-form flex-sb flex-w">
                            <span className="login100-form-title p-b-51">
                                Войдите в аккаунт
                            </span>
                            <div className="wrap-input100 validate-input m-b-16" data-validate="Username is required">
                                <input className="input100" type="text" placeholder="Логин" onChange={(e) => setEmail(e.target.value)}/>
                                <span className="focus-input100"></span>
                            </div>
                            <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                                <input className="input100" type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}/>
                                <span className="focus-input100"></span>
                            </div>
                            <div className="container-login100-form-btn m-t-17">
                                <button className="login100-form-btn" type="button" onClick={async () =>{ if (await AuthStore.login(email, password)) navigate("/main")} }>
                                    Вход
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
}

export default Login;