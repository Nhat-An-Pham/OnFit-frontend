import React, { useState } from 'react'
import NavLogin from '../components/Navbar/NavLogin';
import { useNavigate } from 'react-router-dom';
import authService from '../services/auth.service';
import Cookies from 'universal-cookie';


const UserLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();
  const [err, setErr] = useState("");
  let onLogin = () => {
    let input = {
      email: email,
      password: password
    }

    authService.login(input).then(
<<<<<<< Updated upstream
      ({data}) => {
        const cookies = new Cookies();
     
        cookies.set("auth-token",data)
        navigate('/user');
=======
      data => {
        if (data.res && data.res === '1') {
          navigate('/user');
        } else { 
          setErr("login error");
        }
>>>>>>> Stashed changes
      }
    ).catch(e => setErr(e.response.data.details.errorMessage) )

    

    
  }
  return (
    <div className='page__login'>
      <NavLogin />

      <div class="wrapper">
        <header>Welcome to OnFit</header>
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
            <p style={{ 'color': 'red' }}>
              {err}
            </p>
            <div class="error error-txt">Password can't be blank</div>
          </div>
          <button className='btn btn-primary' type="button" onClick={onLogin}>LOGIN</button>
          {/* <input type="submit" value="Login" onClick={onLogin} /> */}
        </form>
        <h1>{loginStatus}</h1>
        <div class="sign-txt">Not yet member? <a href="/signup">Sign-up now</a></div><br/>
        <div class="sign-txt">Are you a trainer? <a href="/trainerlogin">Sign-in here</a></div>
      </div>
    </div>

  )
}

export default UserLogin;