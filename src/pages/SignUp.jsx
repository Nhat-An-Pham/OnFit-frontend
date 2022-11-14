import React, { Fragment } from 'react'
import NavLogin from '../components/Navbar/NavLogin';
import { useEffect } from 'react';
import authService from '../services/auth.service';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigator = useNavigate();
  const [err, setErr] = useState("");

  //const
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  // const [gender, setGender] = useState('');
  const gender = "male";
  const role = "user";
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //handle
  const handleEmailChange = (value) => {
    setEmail(value);
  }
  const handleNameChange = (value) => {
    setName(value);
  }
  const handlePhoneChange = (value) => {
    setPhone(value);
  }
  const handleAddressChange = (value) => {
    setAddress(value);
  }
  const handlePasswordChange = (value) => {
    setPassword(value);
  }
  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  }

  // gender 
  const genderOption = [
    { value: "male", text: "Male" },
    { value: "female", text: "Female" }
  ]
  // const handleGenderChange = (value) => {
  //   setGender(value);
  //   console.log("test Gender",value);
  // };

  //sign-in
  const handleSave = () => {
    authService.register({ name: name, gender: gender, password: password, confirmPassword: confirmPassword, email: email, phone: phone, role: role, address: address })
      .then((res) => {
        console.log("success register");
        if (res && res === '1') {
          navigator('/home');
        }
      })
      .catch((e) => setErr("Signing up Fail"));
    // const data  = {
    //   email: email,
    //   name: name,
    //   phone: phone,
    //   password: password,
    //   confirmPassword: confirmPassword,
    //   address: address,
    // }
  }

  return (
    <Fragment>
      <div className='page__login'>
        <NavLogin />

        <div class="wrapper">
          <header>Sign-up</header>
          <form action="post">
            <div class="field email">
              <div class="input-area">
                <input id="txtEmail" type="text" placeholder="Email" onChange={(e) => handleEmailChange(e.target.value)} />
                <i class="icon fas fa-envelope"></i>
                <i class="error error-icon fas fa-exclamation-circle"></i>
              </div>
              <div class="error error-txt">Email can't be blank</div>
            </div>
            <div class="field name">
              <div class="input-area">
                <input id="txtName" type="text" placeholder="Name" onChange={(e) => handleNameChange(e.target.value)} />
                <i class="icon fas fa-envelope"></i>
                <i class="error error-icon fas fa-exclamation-circle"></i>
              </div>
              <div class="error error-txt">Name can't be blank</div>
            </div>
            <div class="field gender">
              <div class="input-area">
                <select>
                  {genderOption.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div class="field phone">
              <div class="input-area">
                <input id="txtPhone" type="text" placeholder="Phone Number" onChange={(e) => handlePhoneChange(e.target.value)} />
                <i class="icon fas fa-envelope"></i>
                <i class="error error-icon fas fa-exclamation-circle"></i>
              </div>
              <div class="error error-txt">Your phone number can't be blank</div>
            </div>
            <div class="field address">
              <div class="input-area">
                <input id="txtAddress" type="text" placeholder="Address" onChange={(e) => handleAddressChange(e.target.value)} />
                <i class="icon fas fa-envelope"></i>
                <i class="error error-icon fas fa-exclamation-circle"></i>
              </div>
              <div class="error error-txt">Your address can't be blank</div>
            </div>
            <div class="field password">
              <div class="input-area">
                <input id="txtPassword" type="password" placeholder="Password" onChange={(e) => handlePasswordChange(e.target.value)} />
                <i class="icon fas fa-lock"></i>
                <i class="error error-icon fas fa-exclamation-circle"></i>
              </div>
              <div class="error error-txt">Password can't be blank</div>
            </div>
            <div class="field confirmPassword">
              <div class="input-area">
                <input id="txtConfirmPassword" type="password" placeholder="Confirm your Password" onChange={(e) => handleConfirmPasswordChange(e.target.value)} />
                <i class="icon fas fa-lock"></i>
                <i class="error error-icon fas fa-exclamation-circle"></i>
              </div>
              <div class="error error-txt">Password can't be blank</div>
              <p style={{ 'color': 'red' }}>
                {err}
              </p>
            </div>
            <button className='btn btn-primary' type="button" onClick={() => handleSave()} >Sign-Up Now</button>
            {/* <input type="submit" value="Login" onClick={onLogin} /> */}
          </form>
          <div class="sign-txt">Already a member? <a href="/userlogin">Sign-in here</a></div>
        </div>
      </div>
    </Fragment>
  )
}

export default SignUp