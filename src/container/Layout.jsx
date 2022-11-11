import React from "react";
import { BrowserRouter, Outlet, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'
import Cookies from 'js-cookie'


import Home from "../pages/Home";
import UserLogin from "../pages/UserLogin";
import User from "../pages/User";
import SignUp from "../pages/SignUp"
import Trainer from "../pages/Trainer";
import TrainerLogin from "../pages/TrainerLogin";
import Lessons from "../pages/Lessons";

import authService from '../services/auth.service';
import { useEffect, useState, useRef } from 'react';

function Layout4Route() {
  return (
    <div className='layout__container'>
      <div className='layout__body'>
        <Outlet />
      </div>
    </div>
  )
}

function Layout() {

  const [isLogIn, setIsLogIn] = useState(Cookies.get('auth-token') ? true : false);


  useEffect(() => {

    authService.isLogIn().then(
      res => {
        setIsLogIn(true)
      },
      error => {
        console.log('call api error: ', error)
        setIsLogIn(false)
      }
    )
      .catch(error => {
        console.log(error);
        setIsLogIn(false)
      });

    if (!Cookies.get('auth-token')) {
      setIsLogIn(false);
    }

  }, [])



  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout4Route />}>
          {/* Pages */}
          <Route path='/home' exact element={<Home />} />
          <Route path="*" exact element={<Home />} />
          <Route path="/lessons" exact element={<Lessons />} />
        </Route>
        <Route element={<Outlet />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/trainerlogin" element={<TrainerLogin />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/user" exact element={<User />} />
          <Route path="/trainer" exact element={<Trainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout;
