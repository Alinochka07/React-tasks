import React, {useContext, useState} from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context';
import { createElement } from 'react';

const Register = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [username, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState(false);
    const [errorPassConf, setErrPassConf] = useState(false);

    const register = e => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    const passLength = (e) => {
        if (e.target.value.length > 5) {
            setError(false)
        } else {
            setError(true)
        }
    }
    const passConfirm = (e) => {
        if (e.target.value === password) {
            setErrPassConf(false)
        } else {
            setErrPassConf(true)
        }
    }

    return (
        <div className='register-page'>
            <h1>Register page</h1>
            <form onSubmit={register}>
                <MyInput type="text" value={username} required={true} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your name"/>
                <MyInput type="email" value={userEmail} required={true} onChange={(e) => setUserEmail(e.target.value)} placeholder="Enter your email"/>
                
                {error ? <p style={{'color': 'red', 'fontSize': 'smaller'}}>Password must be more than 5 symbols</p> : null}
                <MyInput type="password" id="password" 
                value={password} 
                onBlur={passLength}
                onChange={(e) => setPassword(e.target.value)} 
                required={true} placeholder="Create a password"/>
                

                {errorPassConf ? <p style={{'color': 'red', 'fontSize': 'smaller'}}>Password does not match</p> : null}
                <MyInput type="password" id="passwordConfirm"
                value={passwordConfirm} 
                required={true} 
                onChange={(e) => setPasswordConfirm(e.target.value)} 
                onBlur={passConfirm} 
                placeholder="Confirm your password"/>
                

                <MyButton>Sign up</MyButton>
            </form>
            <p>Already have an account? Then click to log in <Link to="/login">here</Link></p>
        </div>
    );
};

export default Register;