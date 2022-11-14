import React from 'react'
import NavUser from '../components/Navbar/NavUser';
import authService from '../services/auth.service';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import customerService from '../services/customer.service';
import { useEffect } from 'react';
import bodyStatusService from '../services/bodyStatus.service';
import { Fragment } from 'react';
import ExerciseData from "../assets/data/ExerciseData"

const Trainer = () => {
  const [exercise, setExercise] = useState([]);


  const navigate = useNavigate();
  let isLogIn = Cookies.get("auth-token") ? true : false
  useEffect(() => {
    if (isLogIn === false) {
      console.log('Test islogin', isLogIn)
      navigate("/trainerlogin")
    }
  }, [])
  const OnLogOut = () => {
    authService.logout();
    navigate('/trainerlogin');
  }

  const [cusList, setCusList] = useState([]);



  useEffect(() => {
    customerService
      .getListCustomer()
      .then((res) => {
        console.log("success CustomerList test", res);
        setCusList(res.data);
      })
      .catch((e) => console.log("fail CustomerList test", e));

  }, []);

  //get a user
  const [user, setUser] = useState("");
  const [userChose, setUserChose] = useState("")
  const [cusBody, setCusBody] = useState([]);
  const handleUserClick = (value) => {
    setUser(value);
    console.log(user)
    customerService
      .getCustomer({ id: user })
      .then((res) => {
        console.log("get CustomerbyId test", res.data);
        setUserChose(res.data);
      })
      .catch((e) => alert("Fail to Load", e));
    bodyStatusService
      .getBodyStatusbyID({ id: user })
      .then((res) => {
        console.log("success get body = userid test", res.data);
        setCusBody(res);
      })
      .catch((e) => console.log("fail get body = userid test", e));
  }


  return (
    <Fragment>
      <div className='page__trainer'>
        <NavUser />
        <div className='pageTrainer__container'>
          <section className='pageTrainer__section'>
            <div className='pageTrainer__section__item'>
              <div className="pageTrainer__usercard--wrapper">
                {cusList.map((cusList) =>
                  <div key={cusList.userid} className="pageTrainer__usercard--container" onClick={() => handleUserClick(`${cusList.userId}`)}>
                    <div className='pageTrainer__usercard__item'><h4>Name: {cusList.name}</h4></div>
                    <div className='pageTrainer__usercard__item'><h4>Email: {cusList.email}</h4></div>
                    {/* <div className='pageTrainer__usercard__item'><p>{cusBody.weight}</p></div>
                  <div className='pageTrainer__usercard__item'><p>{cusBody.height}</p></div> */}
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className='pageTrainer__section'>
            <div className='pageTrainer__section__item pageTrainer__section__item--showUserInfo'>
              <div className='pageTrainer__section__item--item'>
                <h1> {userChose.name} </h1>
              </div>
              <div className='pageTrainer__section__item--item'>
                <h5>Email: {userChose.email}</h5>
              </div>
              <div className='pageTrainer__section__item--item'>
                <h5>Weight: {cusBody.weight}</h5>
              </div>
              <div className='pageTrainer__section__item--item'>
                <h5>Height: {cusBody.height}</h5>
              </div>
            </div>
            <div className='pageTrainer__section__item pageTrainer__section__item--showUserCourses'>

            </div>
          </section>
          <section className='pageTrainer__section'>
            <div className='pageTrainer__section__item pageTrainer__section__item--showUserCourses'>
            </div>
            <div className='pageTrainer__section__item'>
              <button className="user__logoutBtn" onClick={OnLogOut}>Log Out</button>
            </div>
          </section>
        </div>
      </div>

    </Fragment>
  )
}

export default Trainer;