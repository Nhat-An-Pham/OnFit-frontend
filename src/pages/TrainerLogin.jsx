import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavLogin from '../components/Navbar/NavLogin';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import authService from '../services/auth.service';

const TrainerLogin = () => {

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();
  const [err, setErr] = useState("");
  let onLogin = () => {
    let input = {
      phone: phone,
      password: password
    }
    authService.loginTrainer(input).then(
      ({ data }) => {
        const cookies = new Cookies();
        cookies.set("auth-token", data)
        navigate('/trainer');
      }
    ).catch(e => setErr("Login Fail"))
  }
  return (
    <div className='page__login'>
      <NavLogin />

      <div class="wrapper">
        <header>Hello Trainer</header>
        <form action="post">
          <div class="field phone">
            <div class="input-area">
              <input id="phone" type="text" placeholder="Phone" onChange={(e) => {
                setPhone(e.target.value);
              }} />
              <i class="icon fas fa-envelope"></i>
              <i class="error error-icon fas fa-exclamation-circle"></i>
            </div>
            <div class="error error-txt">Phone can't be blank</div>
          </div>
          <div class="field password">
            <div class="input-area">
              <input id="password" type="password" placeholder="Password" onChange={(e) => {
                setPassword(e.target.value);
              }} />
              <i class="icon fas fa-lock"></i>
              <i class="error error-icon fas fa-exclamation-circle"></i>
            </div>
            <p style={{ 'color': 'red' }}>
              {err}
            </p>
            <div class="error error-txt">Password can't be blank</div>
          </div>
          <button className='btn btn-primary' type="button" onClick={onLogin}>LOGIN</button>
          {/* <input type="submit" value="Login"/> */}
        </form>
        <div class="sign-txt">User? <a href="/userlogin">Go to here</a></div>
      </div>
    </div>
  )
}

export default TrainerLogin;