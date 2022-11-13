import React from 'react'
import NavUser from '../components/Navbar/NavUser';
import authService from '../services/auth.service';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import customerService from '../services/customer.service';
import { useEffect } from 'react';
import bodyStatusService from '../services/bodyStatus.service';

const Trainer = () => {
  const navigate = useNavigate();
  // let isLogIn = Cookies.get('auth-token') ? true : false
  // if (!isLogIn) {
  //   console.log('test islogin', isLogIn)
  //   navigate('/trainerlogin');
  // }
  const OnLogOut = () => {
    authService.logout();
    navigate('/trainerlogin');
  }

  const [cusList, setCusList] = useState([]);
  const [cusBody, setCusBody] = useState([]);


  useEffect(() => {
    customerService
      .getListCustomer()
      .then((res) => {
        console.log("success CustomerList test", res);
        setCusList(res.data);
      })
      .catch((e) => console.log("fail CustomerList test", e));

    bodyStatusService
      .getBodyStatusbyID({ id: cusList.userid })
      .then((res) => {
        console.log("success get body = userid test", res);
        // setCusBody(res.data);
      })
      .catch((e) => console.log("fail get body = userid test", e));

  }, []);


  return (
    <div className='page__trainer'>
      <NavUser />
      <div className='pageTrainer__container'>
        <section className='pageTrainer__section'>
          <div className='pageTrainer__section__item'>
            <div className="pageTrainer__usercard--wrapper">
              {cusList.map((cusList) => 
                <div key={cusList.userid} className="pageTrainer__usercard--container">
                  <div className='pageTrainer__usercard__item'><h1>{cusList.name}</h1></div>
                  <div className='pageTrainer__usercard__item'><h1>{cusList.email}</h1></div>
                  {/* <div className='pageTrainer__usercard__item'><p>{cusBody.weight}</p></div>
                  <div className='pageTrainer__usercard__item'><p>{cusBody.height}</p></div> */}
                </div>
              )}
            </div>
          </div>
          <div className='pageTrainer__section__item'>

          </div>
        </section>
        <section className='pageTrainer__section'>
          <div className='pageTrainer__section__item'>

          </div>
          <div className='pageTrainer__section__item'>

          </div>
        </section>
      </div>
    </div>
  )
}

export default Trainer;