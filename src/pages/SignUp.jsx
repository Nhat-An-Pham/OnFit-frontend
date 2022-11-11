import React from 'react'
import NavLogin from '../components/Navbar/NavLogin';
import { useEffect } from 'react';
import authService from '../services/auth.service';

const SignUp = () => {

    useEffect(() => {
      authService
        .register({ id: "1" })
        .then((data) => {
          console.log("success body test", data);
        })
        .catch((e) => console.log("fail body test", e));
    }, []);

    return (
      <div className='page__login'>
        <NavLogin />

        <div class="wrapper">
          <header>Sign-up</header>
          <form action="post">
            <div class="field email">
              <div class="input-area">
                <input id="email" type="text" placeholder="Email" />
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
            <button className='btn btn-primary' type="button" >Sign-Up Now</button>
            {/* <input type="submit" value="Login" onClick={onLogin} /> */}
          </form>
          <div class="sign-txt">Already a member? <a href="/userlogin">Sign-in here</a></div>
        </div>
      </div>
    )
  }

  export default SignUp