import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import{ authContext} from '../../App';

const Navbar = () => {
    const [setLoggedInUser] = useContext(authContext)
    return (
        <div>
            <nav className="navbar navbar-expand-lg mr-auto sticky-top" style={{background: '#ECEDFB'}}>
                <div className="container-fluid  d-flex justify-content-end ">  
                    <Link class="navbar-brand " to="#">Course</Link>               
                    <ul className="navbar-nav mx-5 pt-3">
                        <li className="nav-item me-3">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
                        </li>                    
                       
                        <li className="nav-item me-3">
                            <Link className="nav-link" to="#">Contact Us</Link>
                        </li>
                     
                        <li className="nav-item me-3">
                        <Link className="nav-link" to="/login"> <button className="px-5">Login</button> </Link>
                        </li>
                        <li className="nav-item me-3">
                           <button className="px-2 mt-2" onClick={() => setLoggedInUser('')}> Log Out</button>
                        </li>
                      
                    </ul>                  
                </div>
                </nav>
        </div>
    );
};

export default Navbar;