import React, {useState, useEffect} from 'react'
import EmployeeService from '../services/EmployeeService'
import {Link, useHistory,useParams } from 'react-router-dom';


const UpdateEmployeeComponent = () => {
    
    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const [doj, setDoj] = useState('')
    const [salary, setSalary] = useState('')
    const history =useHistory();
    const id=  useParams();
    const {id1}=useParams();
//  console.log(useParams());
    // console.log(id)
    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = {name, dob, doj, salary}
        const employeeUpdate = {name, dob, doj, salary} 
        console.log(employeeUpdate);

        if(id){
            // employeeid = id;
            EmployeeService.updateEmployeeByEmployeeId(id,employee).then((response)=>{
                history.push('/api/employee');

            }).catch(error => {
                console.log(error)
            })
        }else{

            EmployeeService.createEmployee(employee).then((response)  =>{
                console.log(response.data);
                history.push('/api/employee');  
            }).catch(error =>{
                console.log(error);
            })


        }
        


        // EmployeeService.createEmployee(employee).then((response)  =>{
        //     console.log(response.data);
        //     history.push('/api/employee');  
        // }).catch(error =>{
        //     console.log(error);
        // })

    }


    useEffect(() => {
        EmployeeService.employeeByEmployeeid(id).then((response) =>{
            // console.log(id);
            console.log(response.data)
            setName(response.data.name)
            setDob(response.data.dob)
            setDoj(response.data.doj)
            setSalary(response.data.salary)
        }).catch(error =>{
            console.log(error)
        })
    }, [])



    const title = () =>{
        if({id}){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

    
    
    
    return (
        <div>
            {/* <h1>Add Employee component called</h1> */}
            {/* <br /> <br /> */}
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Name:</label>
                                    <input 
                                        type="text"
                                        placeholder="Enter Name"
                                        name="name"
                                        className="form-control"
                                        value={name}
                                        onChange= { (e) => setName(e.target.value) }
                                    ></input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Date of Birth:</label>
                                    <input 
                                        type="date"
                                        placeholder="Enter DOB"
                                        name="dob"
                                        className="form-control"
                                        value={dob}
                                        onChange= { (e) => setDob(e.target.value) }
                                    ></input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Date of Joining: </label>
                                    <input 
                                        type="date"
                                        placeholder="Enter DOJ"
                                        name="doj"
                                        className="form-control"
                                        value={doj}
                                        onChange= { (e) => setDoj(e.target.value) }
                                        ></input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Salary:</label>
                                    <input 
                                        type="number"
                                        placeholder="Enter Salary"
                                        name="salary"
                                        className="form-control"
                                        value={salary}
                                        onChange= { (e) => setSalary(e.target.value) }
                                        ></input>
                                </div>

                                
                                



                                <button className="btn btn-success" onClick= {(e) => saveEmployee(e)} >Submit</button>
                                <Link to="/" className="btn btn-danger">Cancels</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default UpdateEmployeeComponent
