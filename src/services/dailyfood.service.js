import axios from "axios";
const URL =  process.env.REACT_APP_API;
const API_URL =  URL + "/api/dailyfood";

class CustomerService {
  async getDailyFood() {
    const response = await axios
    //    .get(API_URL + `/list`);
      .get(`https://bodybuilding.monoinfinity.net/api/Exercise/1`);
     return response.data;
  }
}

export default new CustomerService();