import {http} from "./http";
// import axios from "axios";
// const URL =  process.env.REACT_APP_API;
const API_URL = "/api/instruction";


class InstructionService {
    async getExcerciseList() {
      const response = await http
         .get(API_URL+ "/list");
       return response;
    }

}
export default new InstructionService();