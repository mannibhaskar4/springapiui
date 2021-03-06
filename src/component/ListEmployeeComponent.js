import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

export const ListEmployeeComponent = () => {
    
    const [employee, setEmployee] = useState([])

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
        EmployeeService.getAllEmployee().then((response)=>{
            setEmployee(response.data)
            console.log(response.data);

        }).catch(error => {
            console.log(error);
        })
    }


    const deleteEmployee =  (id) => {
        console.log(id)
        EmployeeService.deleteEmployeeByEmployeeid(id).then((response) =>{
            getAllEmployees();
    
           }).catch(error =>{
               console.log(error);
           })
    }

    
    return (
        <div className= "container">
            <h2 className="text-center">List Employees</h2>

            <Link to="/create" className="btn btn-primary mb-2">Add Employee</Link>

            <table className="table table-bordered table-striped">

                <thead>
                            <th>Employee Name</th>
                            {/* <th>DOB</th>
                            <th>DOJ</th>
                            <th>Salary</th>
                            <th>Enterprise id</th> */}
                            <th>Employee id</th>
                            <th>Actions</th>
                </thead>
                <tbody>
                        {
                            employee.map(employee =>
                                    <tr key={employee.employeeid}>
                                        <td>{employee.name}</td>
                                        {/* <td>{employee.dob}</td>
                                        <td>{employee.dob}</td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.enterpriseid}</td> */}
                                        <td>
                                            <Link className="btn btn-link" to={`/view-employee/${employee.employeeid}`} >{employee.employeeid}</Link>
                                            
                                        </td>
                                        {/* <td>{employee.doj}</td> */}
                                        <td>
                                            <Link className="btn btn-info" to={`/edit-employee/${employee.employeeid}`}>Update</Link>
                                            <br />
                                            <button className = "btn btn-danger" onClick ={() => deleteEmployee(employee.employeeid)}
                                            style= {{marginTop:"10px"}}>Delete</button>
                                        </td>

                                    </tr>
                            )
                        }
                </tbody>

            </table>
        </div>
    )
}

export default ListEmployeeComponent