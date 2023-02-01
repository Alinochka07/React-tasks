import React, {useContext, useEffect, useState} from 'react';
import "../styles/App.css";
import { Link } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import { AuthContext } from '../context';
import MyButton from './UI/button/MyButton';


const Navbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <nav className='navbar'>
            <div className="navbar__links">
                {isAuth 
                    ?
                    <>
                    <Link style={{'padding': '0 10px', 'textDecoration': 'none', 'color': 'white', 'fontFamily':'sans-serif'}} to="/about">About us</Link>
                    <Link style={{'padding': '0 10px', 'textDecoration': 'none', 'color': 'white', 'fontFamily':'sans-serif'}} to="/posts">Posts</Link>
                    <MyButton style={{'width': '80px', 'background': 'orange', 'fontSize': '16px'}} onClick={logout}>Log out</MyButton>
                    </>

                    :
                    <>
                    <Link style={{'padding': '0 10px', 'textDecoration': 'none', 'color': 'white', 'fontFamily':'sans-serif'}} to="/login">Log in</Link>
                    <Link style={{'padding': '0 10px', 'textDecoration': 'none', 'color': 'white', 'fontFamily':'sans-serif'}} to="/signup">Sign up</Link>
                    </>
                }
                
                
            </div>
        </nav>
    );
};

export default Navbar;