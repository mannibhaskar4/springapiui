import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddEmployeeComponent from '../AddEmployeeComponent';
import HeaderComponent from '../HeaderComponent';
import userEvent from '@testing-library/user-event';





it('checks texts present here or not',async () => {
    render(

    <Router>
    <Switch>

            <Route component={AddEmployeeComponent}></Route>
 

          </Switch>
    </Router>


    );
    

    const HeaderElement = screen.getByText('Add Employee');
    const name = screen.getByText('Name:');
    const dob= screen.getByText('Date of Birth:');
    const doj = screen.getByText('Date of Joining:');
    const salary = screen.getByText('Salary:');
    const enterpriseid = screen.getByText('Enterprise ID:');
    const employeeid = screen.getByText('Employee Id:');
    expect(HeaderElement).toBeTruthy();
    expect(name).toBeTruthy();
    expect(dob).toBeTruthy();
    expect(salary).toBeTruthy();
    expect(enterpriseid).toBeTruthy();
    expect(employeeid).toBeTruthy();
    expect(doj).toBeTruthy();
    
  });


  it('checks input fields takes input properly',async () => {
    render(

    <Router>
    <Switch>

            <Route component={AddEmployeeComponent}></Route>
 

          </Switch>
    </Router>


    );
    

    // const HeaderElement = screen.getByText('Add Employee');
    // const name = screen.getByText('Name:');
    // const dob= screen.getByText('Date of Birth:');
    // const doj = screen.getByText('Date of Joining:');
    // const salary = screen.getByText('Salary:');
    // const enterpriseid = screen.getByText('Enterprise ID:');
    // const employeeid = screen.getByText('Employee Id:');
    // expect(HeaderElement).toBeTruthy();
    // expect(name).toBeTruthy();
    // expect(dob).toBeTruthy();
    // expect(salary).toBeTruthy();
    // expect(enterpriseid).toBeTruthy();
    // expect(employeeid).toBeTruthy();
    // expect(doj).toBeTruthy();


    const name = screen.getByTestId("name");
    userEvent.type(name, "NameOfEmployees");
    expect(screen.getByTestId("name")).toHaveValue("NameOfEmployees");


    const dob = screen.getByTestId("dob");
    userEvent.type(dob, "1999-10-12");
    expect(screen.getByTestId("dob")).toHaveValue("1999-10-12");

    const doj = screen.getByTestId("doj");
    userEvent.type(doj, "1999-10-12");
    expect(screen.getByTestId("doj")).toHaveValue("1999-10-12");



    const salary = screen.getByTestId("salary");
    userEvent.type(salary, "46000");
    expect(screen.getByTestId("salary")).toHaveValue(46000);

    const enterpriseid = screen.getByTestId("enterpriseid");
    userEvent.type(enterpriseid, "AMP123");
    expect(screen.getByTestId("enterpriseid")).toHaveValue("AMP123");
    


    const employeeid = screen.getByTestId("employeeid");
    userEvent.type(employeeid, "123456");
    expect(screen.getByTestId("employeeid")).toHaveValue(123456);


    
  });