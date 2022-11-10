// import axios from "axios";
import {http} from "./http";
const URL =  process.env.REACT_APP_API;
const API_URL =  URL + "/api/bodystatus";

class CustomerService {
  async getBodyStatus({id}) {
    const response = await http
       .get(API_URL + `?id=${id}`);
     return response.data;
  }
}

export default new CustomerService();
