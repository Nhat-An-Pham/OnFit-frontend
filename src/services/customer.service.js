import {http} from "./http";
// import axios from "axios";
// const URL =  process.env.REACT_APP_API;
const API_URL = "/api/customer";

class CustomerService {
  async getCustomer({id}) {
    const response = await http
       .get(API_URL, {params: {id}});
     return response;
  }


  async changePassword({ password, newPassword, confirmPassword}) {
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
}

export default new CustomerService();
