import React from 'react'
import NavLogin from '../components/Navbar/NavLogin';

const TrainerLogin = () => {
  return (
    <div className='page__login'>
      <NavLogin />

      <div class="wrapper">
        <header>Hello Trainer</header>
        <form action="post">
          <div class="field email">
            <div class="input-area">
              <input id="email" type="text" placeholder="Phone"/>
              <i class="icon fas fa-envelope"></i>
              <i class="error error-icon fas fa-exclamation-circle"></i>
            </div>
            <div class="error error-txt">Phone can't be blank</div>
          </div>
          <div class="field password">
            <div class="input-area">
              <input id="password" type="password" placeholder="Password"/>
              <i class="icon fas fa-lock"></i>
              <i class="error error-icon fas fa-exclamation-circle"></i>
            </div>
            <div class="error error-txt">Password can't be blank</div>
          </div>
          <button className='btn btn-primary' type="button">LOGIN</button>
          <input type="submit" value="Login"/>
        </form>
        <div class="sign-txt">User? <a href="/userlogin">Go to here</a></div>
      </div>
    </div>
  )
}

export default TrainerLogin;