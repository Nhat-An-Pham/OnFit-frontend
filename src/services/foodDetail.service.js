import { http } from "./http";
// import axios from "axios";
// const URL =  process.env.REACT_APP_API;
const API_URL = "/api/foodDetail/";

class FoodDetailService {

  async getFoodDetailByName({name}) {
    const response = await http
      .get(API_URL + `${name}`);
    return response.data;
  }
}

export default new FoodDetailService();