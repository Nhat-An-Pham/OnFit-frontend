import React from "react";
import NavUser from "../components/Navbar/NavUser";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
// import authService from "../services/auth.service";
import Cookies from "js-cookie";

import DailyFoodService from "../services/dailyfood.service";
import BodyStatusService from "../services/bodyStatus.service";
import customerService from "../services/customer.service";
import EditModalCusInfo from "../components/Utils/EditModalCusInfo";
import DailyPlanService from "../services/dailyPlan.service";
import FoodDetailService from "../services/foodDetail.service";


//bootstrap
import authService from "../services/auth.service";
import EditModalBodyStatus from "../components/Utils/EditModalBodyStatus";

const User = () => {

  const [cusInfo, setCusInfo] = useState("")
  const [bodyStat, setbodyStat] = useState("")
  const [dailyPlan, setdailyPlan] = useState([])
  const [dailyFood, setDailyFood] = useState([])
  const [foodDetail, setfoodDetail] = useState([])
  //auth
  const navigate = useNavigate();
  // let isLogIn = localStorage.getItem('user') ? true : false
  // useEffect(() => {
  //   if (isLogIn === false) {
  //     console.log('Test islogin', isLogIn)
  //     navigate("/userlogin")
  //   }
  // }, [])
  const OnLogOut = () => {
    authService.logout();
    navigate('/userlogin');
  }

  //change User Info
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const userId = cusInfo.userId;
  const status = "1";
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

  const handleSaveCusInfo = () => {
    customerService
      .postCusUpdateInfo({ userId: userId, name: name, email: email, phone: phone, address: address, status: status })
      .then((res) => {
        console.log("success Info Update test", res);
        setCusInfo(res.data);
      })
      .catch((e) => console.log("fail Info Update test", e));
  }

  //update bodyStatus
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const handleWeightChange = (value) => {
    setWeight(value);
  }
  const handleHeightChange = (value) => {
    setHeight(value);
  }
  const handleSaveBodyStatus = () => {
    customerService
      .postCusUpdateInfo({weight: weight, height: height })
      .then((res) => {
        console.log("success update Body Stats test", res);
        setCusInfo(res.data);
      })
      .catch((e) => console.log("fail update Body Stats test", e));
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
          <div className="editModal__container">
            {/* Update Personal Info */}
            <EditModalCusInfo title={"Edit your Personal Info"}>
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
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => handleSaveCusInfo()}>
                  Update
                </button>
              </form>
            </EditModalCusInfo>
          </div>
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
          {/* Update Body Status */}
          <EditModalBodyStatus title={"Edit your Body Status"}>
            <form action="post">
              <div class="field weight">
                <div class="input-area">
                  <input id="txtWeight" type="text" placeholder="Weight" onChange={(e) => handleWeightChange(e.target.value)} />
                  <i class="icon fas fa-envelope"></i>
                  <i class="error error-icon fas fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Weight can't be blank</div>
              </div>
              <div class="field height">
                <div class="input-area">
                  <input id="txtHeight" type="text" placeholder="Height" onChange={(e) => handleHeightChange(e.target.value)} />
                  <i class="icon fas fa-envelope"></i>
                  <i class="error error-icon fas fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Height can't be blank</div>
              </div>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => handleSaveBodyStatus()}>
                Update
              </button>
            </form>
          </EditModalBodyStatus>
        </div>
      </section>
      {/* third Section */}
      <section className="user__section user__section--thirdSect">
        <div className="user__section__container">
          <h1 className="user__section__title">Your Courses</h1>
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
