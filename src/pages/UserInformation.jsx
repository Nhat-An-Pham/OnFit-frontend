import React from "react";
import NavUser from "../components/Navbar/NavUser";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";



import BodyStatusService from "../services/bodyStatus.service";
import customerService from "../services/customer.service";
import EditModalCusInfo from "../components/Utils/EditModalCusInfo";
import DailyPlanService from "../services/dailyPlan.service";
import authService from "../services/auth.service";


//bootstrap

import EditModalBodyStatus from "../components/Utils/EditModalBodyStatus";
import SidebarUser from "../components/Sidebar/SidebarUser";

const UserInformation = () => {

    const [cusInfo, setCusInfo] = useState("")
    const [bodyStat, setbodyStat] = useState("")
    const [dailyPlan, setdailyPlan] = useState([])
    //auth
    const navigate = useNavigate();

    //Check LOGIN

    // let isLogIn = Cookies.get("auth-token") ? true : false
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
        if (value === "") {
            setEmail(cusInfo.email);
        } else {
            setEmail(value);
        }
    }
    const handleNameChange = (value) => {
        if (value === " ") {
            setName(cusInfo.name);
        } else {
            setName(value);
        }
    }
    const handlePhoneChange = (value) => {
        if (value === " ") {
            setPhone(cusInfo.phone);
        } else {
            setPhone(value);
        }
    }
    const handleAddressChange = (value) => {
        if (value === "") {
            setAddress(cusInfo.address);
        } else {
            setAddress(value);
        }
    }

    const handleSaveCusInfo = () => {
        customerService
            .postCusUpdateInfo({ userId: userId, name: name, email: email, phone: phone, address: address, status: status })
            .then((res) => {
                console.log("success Info Update test", res);
                setCusInfo(res.data);
                window.location.reload(false);
                alert("Succesfully Updated")
            })
            .catch((e) => alert("You Have to Input Everything to Update", e));
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
            .postBodyStatus({ weight: weight, height: height })
            .then((res) => {
                console.log("success update BodyStats test", res);
                setbodyStat(res.data);
                window.location.reload(false);
                alert("Succesfully Updated")
            })
            .catch((e) => alert("You have to input everything to update", e));
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


    }, []);
    return (
        <div className="user">
            <NavUser />
            <SidebarUser />
            <div className="userContainer">
                <div className="content">
                    <div className="information__wrapper">
                        <div className="information__wrapper__item">
                            <h5>Name: <span className="text">Hoang Kim Phu</span></h5>
                        </div>
                        <div className="information__wrapper__item">
                            <h5>Password: <span className="text">MadnessParadox</span></h5>
                        </div>
                        <div className="information__wrapper__item">
                            <h5>Email: <span className="text">hoangkim@gmail.com</span></h5>
                        </div>
                        <div className="information__wrapper__item">
                            <h5>Phone Number: <span className="text">0868781881</span></h5>
                        </div>
                        <div className="information__wrapper__item">
                            <h5>Gender: <span className="text">Blend</span> </h5>
                        </div>
                        <div className="information__wrapper__item">
                            <h5>Address: <span className="text">199/3 Quan Binh Thuan, TP.HCM</span></h5>
                        </div>
                    </div>
                    <div className="testImg">
                        <img src={require("../assets/data/331729784_3416608401884857_8252347125711144058_n.jpg")} alt="" />
                    </div>
                </div>
                <div className="editModal__container">
                    {/* Update Personal Info */}
                    {/* <EditModalCusInfo title={"Edit your Personal Info"}>
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
            </EditModalCusInfo> */}
                </div>
            </div>

            {/* <button className="user__logoutBtn" onClick={OnLogOut}>Log Out</button> */}
            {/* second Section */}
            {/* <section className="user__section user__section--secondSect">
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
          </div> */}
            {/* Update Body Status */}
            {/* <EditModalBodyStatus title={"Edit your Body Status"}>
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
      </section> */}
            {/* third Section */}
            {/* <section className="user__section user__section--thirdSect">
        <div className="user__section__container">
          <h1 className="user__section__title">Your Current Courses</h1>
          <div className="user__section__info__container user__section__info__container--excercise">
            <div className="user__section__info__desc">

            </div>
          </div>
        </div>
      </section> */}

        </div>
    );
};

export default UserInformation;
