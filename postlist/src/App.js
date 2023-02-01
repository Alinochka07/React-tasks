import React, {useState, useEffect} from "react";
import "./styles/App.css";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";


function App() {

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
        setIsAuth(true);
    }
}, [])

  return (
    <AuthContext.Provider value={{
        isAuth: isAuth,
        setIsAuth: setIsAuth
    }}>
        <BrowserRouter>
          <Navbar/>
          <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
