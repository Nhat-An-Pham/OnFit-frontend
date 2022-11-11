import React from "react";
import NavUser from "../components/Navbar/NavUser";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
// import authService from "../services/auth.service";
import Cookies from "js-cookie";

import dailyFoodService from "../services/dailyfood.service";
import BodyStatusService from "../services/bodyStatus.service";
import customerService from "../services/customer.service";
import EditModal from "../components/Utils/EditModal";


//bootstrap
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import authService from "../services/auth.service";

const User = () => {

  const [cusInfo, setCusInfo] = useState("")
  const [bodyStat, setbodyStat] = useState("")
  //auth
  const navigate = useNavigate();
  // let isLogIn = localStorage.getItem('user') ? true : false
  // if (!isLogIn) {
  //   console.log('binhtest islogin', isLogIn)
  //   navigate('/userlogin');
  // }
  // const onLogOut = () => {
  //   authService.logout();
  //   navigate('/userlogin')
  // }

  let isLogIn = Cookies.get('auth-token') ? true : false
  if (!isLogIn) {
    console.log('test islogin', isLogIn)
    navigate('/userlogin');
  }
  const OnLogOut = () => {
    authService.logout();
    navigate('/userlogin');
  }

  useEffect(() => {

    customerService
      .getCustomerInfo()
      .then((res) => {
        console.log("success customer info test", res);
        setCusInfo(res.data);
      })
      .catch((e) => console.log("fail customer info test", e));


    BodyStatusService
      .getBodyStatus()
      .then((res) => {
        console.log("success body test", res);
        setbodyStat(res);
      })
      .catch((e) => console.log("fail body test", e));


    // dailyFoodService
    //   .getDailyFood()
    //   .then((data) => {
    //     console.log("success dailyfood test", data);
    //   })
    //   .catch((e) => console.log("fail dailyfood test", e));


    // customerService
    //   .changePassword({password: "2", newPassword: "123", confirmPassword: "123"  })
    //   .then((data) => {
    //     console.log("success change password", data);
    //   })
    //   .catch((e) => console.log("fail customer test", e));
  }, []);
  return (
    <div className="page__user">
      <NavUser />
      {/* first Section */}
      <section className="user__section user__section--firstSect">
        <div className="user__section__container">
          <h1 className="user__section__title">PERSONAL INFORMATION</h1>
          <div className="user__section__info__container">
            <div className="user__section__info__item">
              <h5>Name: {cusInfo.name} </h5>
            </div>
            <div className="user__section__info__item">
              <h5>Password: {cusInfo.password} </h5>
            </div>
            <div className="user__section__info__item">
              <h5>Email: {cusInfo.email} </h5>

            </div>
            <div className="user__section__info__item">
              <h5>Phone Number: {cusInfo.phone} </h5>
            </div>
            <div className="user__section__info__item">
              <h5>Gender: {cusInfo.gender} </h5>

            </div>
            <div className="user__section__info__item">
              <h5>Address: {cusInfo.address} </h5>
            </div>
          </div>
        </div>
        <div className="options">
          <EditModal title={"chỉnh sửa thông tin"}>
            <div>xin chao </div>
            <button onClick={() => console.log("binhtest onclick")}>
              click me
            </button>
          </EditModal>
        </div>
        <button className="user__logoutBtn" onClick={OnLogOut}>LOGOUT </button>

      </section>
      {/* second Section */}
      <section className="user__section user__section--secondSect">
        <div className="user__section__container">
          <h1 className="user__section__title">Body Status</h1>
          <div className="user__section__info__container">
            <div className="user__section__info__item">
              <h5>Your Weight: {bodyStat?.weight} </h5>
            </div>
            <div className="user__section__info__item">
              <h5>height: {bodyStat?.height} </h5>
            </div>
            <div className="user__section__info__item">
              <h5>Date: {bodyStat?.date} </h5>
            </div>
          </div>
        </div>
      </section>
      {/* third Section */}
      <section className="user__section user__section--thirdSect">
        <div className="user__section__container"></div>
        <h1 className="user__section__title">Your Courses</h1>
        <div className="user__section__info__container">

        </div>
      </section>

    </div>
  );
};

export default User;
