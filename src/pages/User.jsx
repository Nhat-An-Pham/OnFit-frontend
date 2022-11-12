import React from "react";
import NavUser from "../components/Navbar/NavUser";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
// import authService from "../services/auth.service";
import Cookies from "js-cookie";

import DailyFoodService from "../services/dailyfood.service";
import BodyStatusService from "../services/bodyStatus.service";
import customerService from "../services/customer.service";
import EditModal from "../components/Utils/EditModal";
import DailyPlanService from "../services/dailyPlan.service";
import FoodDetailService from "../services/foodDetail.service";


//bootstrap
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import authService from "../services/auth.service";

const User = () => {

  const [cusInfo, setCusInfo] = useState("")
  const [bodyStat, setbodyStat] = useState("")
  const [dailyPlan, setdailyPlan] = useState([])
  const [dailyFood, setDailyFood] = useState([])
  const [foodDetail, setfoodDetail] = useState([])
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
        // console.log("success customer info test", res);
        setCusInfo(res.data);
      })
      .catch((e) => console.log("fail customer info test", e));


    BodyStatusService
      .getBodyStatus()
      .then((res) => {
        // console.log("success body test", res);
        setbodyStat(res);
      })
      .catch((e) => console.log("fail body test", e));
    // {
    DailyPlanService
      .getDailyPlanById()
      .then((res) => {
        console.log("success Daily Plan test", res);
        setdailyPlan(res)
      })
      .catch((e) => console.log("fail Daily Plan test", e));
    DailyFoodService
      .getDailyFoodDetailByID({ id: `${dailyPlan.dailyFoodDetailId}` })
      // .getDailyFoodDetailByID({ id: dailyPlan.dailyFoodDetailId })
      .then((res) => {
        console.log("success Get dailyFoodDetail", res);
        setDailyFood(res)
      })
      .catch((e) => console.log("fail Get dailyFoodDetail", e));
    FoodDetailService
      // .getFoodDetailByName({ name: dailyFood.foodName })
      .getFoodDetailByName({ name: `${dailyFood.foodName}` })
      .then((res) => {
        console.log("success Get FoodDetail", res);
        setfoodDetail(res);
      })
      .catch((e) => console.log("fail Get FoodDetail", e));
    // }

  }, []);
  return (
    <div className="page__user">
      <NavUser />
      {/* first Section */}
      <section className="user__section user__section--firstSect">
        <div className="user__section__container">
          <h1 className="user__section__title">INFORMATION</h1>
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
        <button className="user__logoutBtn" onClick={OnLogOut}>Log Out</button>

      </section>
      {/* second Section */}
      <section className="user__section user__section--secondSect">
        <div className="user__section__container">
          <h1 className="user__section__title">Body Status</h1>
          <div className="user__section__info__container">
            <div className="user__section__info__item">
              <h5>Your Weight: {bodyStat.weight} </h5>
            </div>
            <div className="user__section__info__item">
              <h5>height: {bodyStat.height} </h5>
            </div>
            <div className="user__section__info__item">
              <h5>Date: {bodyStat.date} </h5>
            </div>
          </div>
        </div>
      </section>
      {/* third Section */}
      <section className="user__section user__section--thirdSect">
        <div className="user__section__container">
          <h1 className="user__section__title">Your Courses</h1>
          <div className="user__section__info__container user__section__info__container--dailyPlan">
            <div className="user__section__info__title">
              <h5>NUTRITION</h5>
            </div>
            <div className="user__section__info__desc">
              {foodDetail.map((foodDetail) =>
                <div className="user__section__card__container">
                  <div className="user__section__card__item user__section__card__item--foodName">
                    <h5>{foodDetail.foodName}</h5>
                  </div>
                  <div className="user__section__card__item user__section__card__item--calories">
                    <h5>{foodDetail.calories}</h5>
                  </div>
                  <div className="user__section__card__item user__section__card__item--img">
                    <img src={require("../components/Image/dumbbell.png")} alt="" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="user__section__info__container user__section__info__container--excercise">
            <div className="user__section__info__title">
              <h5>EXCERCISES</h5>
            </div>
            <div className="user__section__info__desc">

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default User;
