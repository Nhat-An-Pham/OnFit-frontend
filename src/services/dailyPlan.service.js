import { http } from "./http";
// import axios from "axios";
// const URL =  process.env.REACT_APP_API;
const API_URL = "/api/dailyPlan";

class DailyPlanService {

  async getDailyPlanById() {
    const response = await http
      .get(API_URL + "/userid");
    return response.data;
  }


}

export default new DailyPlanService();
