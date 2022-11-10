import React from "react";
import NavUser from "../components/Navbar/NavUser";
import { useEffect, useState, useRef } from "react";

import dailyFoodService from "../services/dailyfood.service";
import bodyStatusService from "../services/bodyStatus.service";
import customerService from "../services/customer.service";
import EditModal from "../components/Utils/EditModal";

const User = () => {
  useEffect(() => {
    bodyStatusService
      .getBodyStatus({ id: "1" })
      .then((data) => {
        console.log("success body test", data);
      })
      .catch((e) => console.log("fail body test", e));

    customerService
      .getCustomer({id: "1"})
      .then((data) => {
        console.log("success customer test", data);
      })
      .catch((e) => console.log("fail customer test", e));

    //   dailyFoodService
    //     .getDailyFood()
    //     .then((data) => {
    //       console.log("success dailyfood test", data);
    //     })
    //     .catch((e) => console.log("fail dailyfood test", e));


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
      <section className="user__firstSect">
        <div className="user__firstSect__personalInfo">
          <h1>Thông tin cá nhân</h1>
          <div className="container">
            <div className="row">
              <div className="col-3">Tên</div>
              <div className="col-9">quanmap</div>
            </div>
            <div className="row">
              <div className="col-3">Email</div>
              <div className="col-9">quanmap</div>
            </div>
            <div className="row">
              <div className="col-3">SDT</div>
              <div className="col-9">quanmap</div>
            </div>
            <div className="row">
              <div className="col-3">Địa chỉ</div>
              <div className="col-9">quanmap</div>
            </div>
          </div>
        </div>
      </section>
      <section className="user__secondSect">
        <div className="user__secondSect__bodyStats">
          <div className="options">
            <EditModal title={"chỉnh sửa thông tin"}>
              <div>xin chao </div>
              <button onClick={() => console.log("binhtest onclick")}>
                click me
              </button>
            </EditModal>
          </div>
        </div>
      </section>

      <section className="user__thirdSect">
        <div className="user__secondSect__courses"></div>
      </section>
    </div>
  );
};

export default User;
