import axios from 'axios';

const EMPLOYEE_API_REST_URL = "http://localhost:8080/api/employee";

class APIService {
    
    getEmployee(){
        return axios.get(EMPLOYEE_API_REST_URL);
    }


    createEmployee(employee){
        return axios.post(EMPLOYEE_API_REST_URL,employee)
    }

}

export default new APIService();