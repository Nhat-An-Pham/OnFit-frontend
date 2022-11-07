import React from "react";
import { BrowserRouter, Outlet, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'
import Home from "../pages/Home";
import Login from "../pages/Login";
import User from "../pages/User";
// import Main from "../components/Main/Main";
// import GymProgram from "../components/GymProgram/GymProgram";
// import Member from "../components/Member/Member";
// import Classes from "../components/OurClasses/Classes";
// import Schedule from "../components/Schedule/Schedule";
// import Trainers from "../components/Trainers/Trainers";
// import Contact from '../components/Contact/Contact';

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
          <Route path='/Home' exact element={<Home />} />
          <Route path="*" exact element={<Home />} />
          <Route path="login" exact element={<Login />} />
          <Route path="/user" exact element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout;
