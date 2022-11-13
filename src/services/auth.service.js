import axios from "axios";
import Cookies from "js-cookie";
import { http } from "./http";
const URL = process.env.REACT_APP_API;
const API_URL = URL + "/api/auth/";

class AuthService {
  login({ email, password }) {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  loginTrainer({ phone, password }) {
    return axios
      .post(API_URL + "login", {
        phone,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  async logout() {
    try {
      await axios.get(API_URL + "logout")
      localStorage.removeItem('user')
      localStorage.removeItem('auth-token')
      Cookies.remove("auth-token")
    } catch (error) {
      console.log(error)
    }
  }



  async register({name, gender, password, confirmPassword, email, phone, role, address}) {
    const response = await http
      .post(API_URL + "register", {
        name,
        gender,
        password,
        confirmPassword,
        email,
        phone,
        role,
        address
      });
      return response;
    
  }

  // changeUsername({username, password, newUsername}) {
  //   return axios
  //     .post(API_URL + "changeusername", {
  //       username,
  //       password,
  //       newUsername
  //     })
  //     .then(response => {
  //       return response.data;
  //     });
  // }
  // changePassword({username, password, newPassword}) {
  //   return axios
  //     .post(API_URL + "changepassword", {
  //       username,
  //       password,
  //       newPassword
  //     })
  //     .then(response => {
  //       return response.data;
  //     });
  // }

  getCustomer({ id }) {
    return axios
      .get(API_URL + "login", {
        id
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(response);
        }

        return response.data;
      });
  }

}

export default new AuthService();
