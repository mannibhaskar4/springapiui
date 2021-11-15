import axios from 'axios';

const EMPLOYEE_API_REST_URL = "http://localhost:8080/api/employee";
const EMPLOYEE_API_REST_URL_CRT="http://localhost:8080/api/employee/create";

class EmployeeService {
    
    getAllEmployee(){
        return axios.get(EMPLOYEE_API_REST_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_REST_URL,employee)
    }

    getEmployeeById(employeeid){
        return axios.get(EMPLOYEE_API_REST_URL + '/'+employeeid)
    }


}

export default new EmployeeService();