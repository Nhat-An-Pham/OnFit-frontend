import React from "react";
import { BrowserRouter, Outlet, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'
import Cookies from 'js-cookie'


import Home from "../pages/Home";
import UserLogin from "../pages/UserLogin";
import User from "../pages/User";
import UserInformation from "../pages/UserInformation";
import UserBodyStatus from "../pages/UserBodyStatus";
import SignUp from "../pages/SignUp"
import Trainer from "../pages/Trainer";
import TrainerLogin from "../pages/TrainerLogin";
import Excercises from "../pages/Excercises";
import Admin from "../pages/Admin";
import AdminLogin from "../pages/AdminLogin";

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

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout4Route />}>
          {/* Pages */}
          <Route path='/home' exact element={<Home />} />
          <Route path="*" exact element={<Home />} />
          <Route path="/excercises" exact element={<Excercises />} />
        </Route>
        <Route element={<Outlet />}>
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/trainerlogin" exact element={<TrainerLogin />} />

          <Route path="/userlogin" exact element={<UserLogin />} />
          <Route path="/user" exact element={<User />} />
          <Route path="/user/information" exact element={<UserInformation />} />
          <Route path="/user/bodystatus" exact element={<UserBodyStatus />} />

          <Route path="/admin" exact element={<Admin />} />
          <Route path="/adminlogin" exact element={<AdminLogin />} />
          <Route path="/trainer" exact element={<Trainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout;
