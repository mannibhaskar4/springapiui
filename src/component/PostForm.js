import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             dob:'',
             doj:'',
             salary:'',
             enterpriseId:'',
             employeeId:''

        }
    }
    
    
    
    
    render() {
        return (
            <div>
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

                                <div className="form-group mb-2">
                                    <label className="form-label">Enterprise ID: </label>
                                    <input 
                                        type="text"
                                        placeholder="Enter Enterprise Id"
                                        name="enterpriseId"
                                        className="form-control"
                                        value={enterpriseId}
                                        onChange= { (e) => setEnterpriseId(e.target.value) }
                                        ></input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Employee Id:</label>
                                    <input 
                                        type="number"
                                        placeholder="Enter Employee Id"
                                        name="employeeId"
                                        className="form-control"
                                        value={employeeId}
                                        onChange= { (e) => setEmployeeId(e.target.value) }
                                        ></input>
                                </div>



                                <button className="btn btn-success" onClick= {(e) => saveEmployee(e)} >Submit</button>

                            </form>
                        </div>
            </div>
        )
    }
}

export default PostForm
