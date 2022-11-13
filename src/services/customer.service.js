import axios from "axios";
import { http } from "./http";
// import axios from "axios";
// const URL =  process.env.REACT_APP_API;
const API_URL = "/api/customer";

class CustomerService {
  async getCustomer({ id }) {
    const response = await http
      .get(API_URL, { params: { id } });
    return response;
  }
  //get Customer Info
  async getCustomerInfo() {
    const response = await http
      .get(API_URL + "/info");
    return response;
  }
  async getListCustomer() {
    const response = await http
      .get(API_URL +"/list");
      return response;
  }

  async changePassword({ password, newPassword, confirmPassword }) {
    return http
      .post(API_URL + "/password", {
        password,
        newPassword,
        confirmPassword
      })
      .then(response => {
        return response.data;
      });
  }

  async postCusUpdateInfo({userId, name, email, phone, address, status}){
    return http
    .post(API_URL + "/updateinfo",{
      userId,
      name,
      email,
      phone,
      address,
      status
    })
  }
}

export default new CustomerService();
