import React, {useContext} from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';
import "../styles/App.css"

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = e => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }
    return (
        <div className='login-page'>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Enter your login"/>
                <MyInput type="password" placeholder="Enter your password"/>
                <MyButton>Log in</MyButton>
            </form>
        </div>
    );
};

export default Login;