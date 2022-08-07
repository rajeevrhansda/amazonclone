import React, { useEffect } from "react";
import './app.css'
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx'
import Header from './components/header/Header.jsx'
import Checkout from "./components/checkout/Checkout.jsx";
import Login from "./components/login/Login.jsx";

import { Routes, Route, } from "react-router";
import {useStateValue} from './StateProvider'
import {auth} from './firebase'


import { onAuthStateChanged } from "@firebase/auth";
import PageNotFound from "./components/pagenotfound/PageNotFound";
function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })

    return ()=>{
      unsubscribe();
    }

  },[]);


  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/index.html" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
