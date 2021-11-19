import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ViewSingleEmployee = () => {
    
    
    const [employee, setEmployee] = useState([])
    const id=  useParams();
    

    useEffect(() => {
        // EmployeeService.getAllEmployee().then((response)=>{
        //     setEmployee(response.data)
        //     console.log(response.data);

        // }).catch(error => {
        //     console.log(error);
        // })
        getAllEmployees()

    }, [])


    const getAllEmployees = () => {
        EmployeeService.employeeByEmployeeid(id).then((response)=>{
            setEmployee(response.data)
            console.log(response.data);

        }).catch(error => {
            console.log(error);
        })
    
    }
    return (
        <div className= "container">
            <h2 className="text-center">List Employees</h2>

            <Link to="/" className="btn btn-primary mb-2">Go Back</Link>

            <table className="table table-bordered table-striped">

                <thead>
                            <th>Employee Name</th>
                            <th>DOB</th>
                            <th>DOJ</th>
                            <th>Salary</th>
                            <th>Enterprise id</th>
                            <th>Employee id</th>
                            
                </thead>
                <tbody>
                        {
                           
                                    <tr key={employee.employeeid}>
                                        <td>{employee.name}</td>
                                        <td>{employee.dob}</td>
                                        <td>{employee.dob}</td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.enterpriseid}</td>
                                        <td>{employee.employeeid}</td>
                                        {/* <td>{employee.doj}</td> */}
                                        <td>
                                        {/* <Link to="/" className="btn btn-danger">Cancels</Link> */}

                                        </td>

                                    </tr>
                            
                        }
                </tbody>

            </table>
        </div>
    )
}

export default ViewSingleEmployee
