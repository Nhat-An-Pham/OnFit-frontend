// import axios from "axios";
import {http} from "./http";
const URL =  process.env.REACT_APP_API;
const API_URL =  URL + "/api/bodystatus";

class BodyStatusService {
  async getBodyStatus() {
    const response = await http
       .get(API_URL + "/bodyinfo");
     return response.data;
  }
}

export default new BodyStatusService();
