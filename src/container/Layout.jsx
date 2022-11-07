import React from "react";
import { BrowserRouter, Outlet, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'


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

  const [isLogIn, setIsLogIn] = useState(localStorage.getItem('user') ? true : false);


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

    if (!localStorage.getItem('user')) {
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
          <Route path="/userlogin" exact element={<UserLogin />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/trainerlogin" exact element={<TrainerLogin />} />



          <Route path="/lessons" exact element={<Lessons />} />
          <Route path="/user" exact element={<User />} />
          <Route path="/trainer" exact element={<Trainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout;
