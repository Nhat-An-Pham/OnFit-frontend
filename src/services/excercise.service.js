import {http} from "./http";
// import axios from "axios";
// const URL =  process.env.REACT_APP_API;
const API_URL = "/api/Excercise";


class ExcerciseService {
    async getExcerciseList() {
      const response = await http
         .get(API_URL+ "/list");
       return response;
    }

}
export default new ExcerciseService();