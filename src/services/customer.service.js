import axios from "axios";
const URL =  process.env.REACT_APP_API;
const API_URL =  URL + "/api/customer";

class CustomerService {
  async getCustomer({id}) {
    const response = await axios
       .get(`http://159.223.60.221/api/customer?id=1`);
     return response;
  }
}

export default new CustomerService();
