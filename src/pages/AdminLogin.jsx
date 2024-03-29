import React, { useState } from 'react'
import NavLogin from '../components/Navbar/NavLogin';
import { useNavigate } from 'react-router-dom';
import authService from '../services/auth.service';
import Cookies from 'universal-cookie';


const AdminLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();
  const [err, setErr] = useState([]);

  let onLogin = () => {
    let input = {
      email: email,
      password: password
    }
    authService.login(input).then(
      ({ data }) => {
        const cookies = new Cookies();
        cookies.set("auth-token", data)
        navigate('/user');
      }
      //     // data => {
      //     // if(data.res && data.res === '1'){
      //     //   navigate('/admin/home');
      //     // }else{  // error
      //     //   // setErr(data.mess) // that bai
      //     //   setErr(intl.formatMessage({id:'login.error'}))
      //     // }
      //     // }
    ).catch(e => setErr("Login Fail"))
  }
  return (
    <div className='page__login'>
      <NavLogin />

      <div class="wrapper">
        <header>HELLO ADMIN</header>
        <form action="post">
          <div class="field email">
            <div class="input-area">
              <input id="email" type="text" placeholder="Email" onChange={(e) => {
                setEmail(e.target.value);
              }} />
              <i class="icon fas fa-envelope"></i>
              <i class="error error-icon fas fa-exclamation-circle"></i>
            </div>
            <div class="error error-txt">Email can't be blank</div>
          </div>
          <div class="field password">
            <div class="input-area">
              <input id="password" type="password" placeholder="Password" onChange={(e) => {
                setPassword(e.target.value);
              }} />
              <i class="icon fas fa-lock"></i>
              <i class="error error-icon fas fa-exclamation-circle"></i>
            </div>

            <div class="error error-txt">Password can't be blank</div>
          </div>
          <p style={{ color: 'red' }}>
            {err}
          </p>
          <button className='btn btn-primary' type="button" onClick={onLogin}>LOGIN</button>
          {/* <input type="submit" value="Login" onClick={onLogin} /> */}
        </form>
        <h1>{loginStatus}</h1>
        <div class="sign-txt">Are you an user? <a href="/userlogin">Sign-in now</a></div><br />
        <div class="sign-txt">Are you a trainer? <a href="/trainerlogin">Sign-in here</a></div>
      </div>
    </div>

  )
}

export default AdminLogin;