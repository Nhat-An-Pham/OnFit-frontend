import axios from "axios";
const URL =  process.env.REACT_APP_API;
const API_URL =  URL + "/api/bodystatus";

class CustomerService {
  async getBodyStatus({id}) {
    const response = await axios
       .get(API_URL + `?id=${id}`);
     return response.data;
  }
}

export default new CustomerService();
