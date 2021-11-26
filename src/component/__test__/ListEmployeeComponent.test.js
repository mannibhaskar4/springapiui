import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {expect} from 'chai';
import ListEmployeeComponent from '../ListEmployeeComponent';


import { rest } from "msw";
import { setupServer } from "msw/node";
import EmployeeService, {EMPLOYEE_API_REST_URL} from '../../services/EmployeeService';



const employeeServiceResponse = rest.get("http://localhost:8080/api/employee", (req, res, ctx) =>{
    return res(ctx.json([{
        "id": "6191426ade27b2460c539222",
        "name": "Ram",
        "dob": "1992-12-12T18:30:00.000+00:00",
        "doj": "2021-08-19T18:30:00.000+00:00",
        "salary": 53000.0,
        "enterpriseid": "DNNP9L7",
        "employeeid": 137824
    }]))
})

const handlers= [employeeServiceResponse]

const server= new setupServer(...handlers);


// const server= new setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('checks texts present here or not',async () => {
    render(

    <Router>
    <Switch>

            <Route component={ListEmployeeComponent}></Route>
            {/* <EmployeeService /> */}

          </Switch>
    </Router>


    );




    const list=await screen.findByText("Ram");
    // except.
    except(await screen.findByText("Ram")).toHaveValue("Ram");
    // const HeaderElement = screen.toBeVisible("Ram");
    // except(list).toBeInTheDocument();

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
    
  });

