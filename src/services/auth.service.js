import axios from "axios";
const URL =  process.env.REACT_APP_API;
const API_URL =  URL + "/api/auth/";

class AuthService {
  login({email, password}) {
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

  logout() {
    localStorage.removeItem("user");
    window.location.reload();
  }

  async isLogIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    let token = user.accessToken
    return await axios
      .post(API_URL + 'islogin', {
        token
      }).then(res =>  {
        if(res.data.res === '1'){
          return true
        }
        return false
      })
  
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

  getCustomer({id}) {
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
