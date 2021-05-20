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
import Users from './Components/Users/Users';
import AddService from './Components/AddService/AddService';




export const authContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({name: '', email: ''})

  return (
    
      <authContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <p> Email : { loggedInUser.email}</p>
      <Router>
       <Header></Header>
        <Switch>
        <Route  path="/navbar">
          <Navbar></Navbar>
          </Route>
        
               <Route path="/home">
                <Home></Home>
              </Route>
               <Route path="/servicesDetail"> 
                <ServicesDetail></ServicesDetail>
              </Route>
                <Route path="/users">
                  <Users></Users>
                </Route>

               <Route  path="/login">
                 <Login></Login>
               </Route>
               <PrivateRoute exact={true} path="/addService" component={AddService} />  
                <PrivateRoute  exact={true} path="/course/:id"  component={CourseEnrolling} />
               < PrivateRoute exact={true}  path="/dashboard" component={Dashboard} />
                        
              <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      
      </authContext.Provider>
    
  );
}

export default App;
