import './App.css';
import {BrowserRouter  as Router, Route, Switch} from 'react-router-dom'
import { createContext, useState } from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Header from './Components/Header/Header';
import CourseEnrolling from './Components/CourseEnrolling/CourseEnrolling';
import ServicesDetail from './Components/ServicesDetail/ServicesDetail';
import Orders from './Components/Orders/Orders';
import AddService from './Components/AddService/AddService';
import Management from './Components/Dashboard/Management/Management';
import UpdateOrder from './Components/Dashboard/Management/UpdateOrder';
import Testimonial from './Components/Dashboard/Testimonial/Testimonial';
import Admin from './Components/Admin/Admin';
import DeleteService from './Components/Dashboard/DeleteService/DeleteService';




export const authContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({name: '', email: ''})


  return (
    <div className="App">
      <authContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <p> Email : {loggedInUser.email}</p>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/navbar">
              <Navbar></Navbar>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/DeleteService">
              <DeleteService></DeleteService>
            </Route>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route path="/servicesDetail">
              <ServicesDetail></ServicesDetail>
            </Route>
            <Route path="/updateOrder/:id">
              <UpdateOrder></UpdateOrder>
            </Route>
            <Route path="/management">
              <Management></Management>
            </Route>
            <Route path="/Orders">
              <Orders></Orders>
            </Route>
            <Route path="/testimonial">
              <Testimonial></Testimonial>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact={true} path="/addService" component={AddService} />
            <PrivateRoute exact={true} path="/course/:id" component={CourseEnrolling} />
            <PrivateRoute exact={true} path="/dashboard" component={Dashboard} />

            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </authContext.Provider>
    </div>
  );
}

export default App;
