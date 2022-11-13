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

  async getBodyStatusbyID({id}) {
    const response = await http
       .get(API_URL + `id=${id}`);
     return response.data;
  }

  async postBodyStatus({weight, height}){
    const response = await http
    .post(API_URL, {
      weight,
      height
    });
    return response.data;
  }

}

export default new BodyStatusService();
