import { http } from "./http";

// import axios from "axios";
// const URL =  process.env.REACT_APP_API;
const API_URL = "/api/dailyfood/";

class DailyFoodService {

  async getDailyFoodDetailByID({id}) {
    const response = await http
      .get(API_URL + `${id}`);
    return response.data;
  }
}

export default new DailyFoodService();