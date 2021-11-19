import './App.css';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import AddEmployeeComponent from './component/AddEmployeeComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';
import ViewSingleEmployee from './component/ViewSingleEmployee';


function App() {
  return (
    

    <div>
       <Router> 
        <HeaderComponent />
        <div className= "container">
          <Switch>
            <Route exact path="/" component={ListEmployeeComponent}></Route>
            {/* <Route path="/" component={ListEmployeeComponent}></Route> */}
            <Route path="/create" component={AddEmployeeComponent}></Route>
            <Route path="/view-employee/:employeeid" component={ViewSingleEmployee}></Route>

            {/* <Route path="/edit-employee/:employeeid" component={AddEmployeeComponent}></Route> */}
            <Route path="/edit-employee/:employeeid" component={UpdateEmployeeComponent}></Route>
          </Switch>
          {/* <ListEmployeeComponent /> */}
        </div>
         {/* <FooterComponent /> */}
         {/* <footer /> */}
         </Router>
    </div>

  );
}

export default App;
