import React from "react"
import APIService from "../APIService"

export default class EmployeeComponent extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            employee : []
        }
    }
    componentDidMount(){
        APIService.getEmployee().then((data) => {
            this.setState({ employee: data })
            console.log(this.state.data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });;
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Employee Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>DOB</th>
                            <th>DOJ</th>
                            <th>Salary</th>
                            <th>Enterprise id</th>
                            <th>Employee id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employee.map(employee =>
                                    <tr key={employee.employeeid}>
                                        <td>{employee.name}</td>
                                        <td>{employee.dob}</td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.enterpriseid}</td>
                                        <td>{employee.employeeid}</td>
                                        {/* <td>{employee.doj}</td> */}
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }


}