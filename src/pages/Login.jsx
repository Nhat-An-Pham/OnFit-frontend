import React from 'react'
import Navbar from '../components/Navbar/Navbar';

const Login = () => {
  return (
    <div className='page__login'>
      <Navbar />

      <div class="wrapper">
        <header>Welcome to OnFit</header>
        <form action="post">
          <div class="field email">
            <div class="input-area">
              <input id="email" type="text" placeholder="Email Address" />
              <i class="icon fas fa-envelope"></i>
              <i class="error error-icon fas fa-exclamation-circle"></i>
            </div>
            <div class="error error-txt">Email can't be blank</div>
          </div>
          <div class="field password">
            <div class="input-area">
              <input id="password" type="password" placeholder="Password" />
              <i class="icon fas fa-lock"></i>
              <i class="error error-icon fas fa-exclamation-circle"></i>
            </div>
            <div class="error error-txt">Password can't be blank</div>
          </div>
          <input type="submit" value="Login" onclick="auth(event)" />
        </form>
        <div class="sign-txt">Not yet member? <a href="/Page/Login/RegisterPage/register.html">Signup now</a></div>
      </div>
    </div>

  )
}

export default Login;