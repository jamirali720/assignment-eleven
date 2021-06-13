import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css'
import { AiFillHome } from 'react-icons/ai';
import { RiAdminFill } from 'react-icons/ri';
import { MdDashboard } from 'react-icons/md';
import { MdRateReview } from "react-icons/md";
import { FcAbout } from 'react-icons/fc';
import { FcContacts } from 'react-icons/fc';
import { FcManager } from 'react-icons/fc';
import { FiLogOut } from "react-icons/fi";
import { GrOrderedList } from "react-icons/gr";

import { Link } from 'react-router-dom';
import img from '../../images/jamirali.png'
import { authContext} from '../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser]= useContext(authContext);
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch("http://localhost:4000/isAdmin", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email: loggedInUser.email }),
        })
          .then((res) => res.json())
          .then((data) => setIsAdmin(data));

    }, [loggedInUser.email])
   
    return (
        <div id="main">   
            <div id="profile-image">  <img src={img} alt="profile"/>           
            </div> 
            <div>
                <nav>
                    <ul style={{listStyleType: 'none'}}>
                        <li className="list"> <span className="icon"><MdDashboard /></span><Link className="link" to="/dashboard">Dashboard</Link></li>                      
                       { isAdmin &&
                           <div>                          
                            <li className="list"> <span className="icon"><RiAdminFill /></span><Link className="link" to="/admin"> Add Admin</Link></li>        
                            <li className="list"> <span className="icon"><FcContacts /></span><Link className="link"to="/addService">AddService</Link></li>
                            <li className="list"> <span className="icon"><FcManager /></span><Link className="link" to="/deleteService">Delete Service</Link></li>                         
                            <li className="list"> <span className="icon"><FcManager /></span><Link className="link" to="/management">Management</Link></li>                         
                           </div>                
                       }
                         <li className="list"> <span className="icon"><AiFillHome /></span><Link className="link" to="/home">Home</Link></li>
                         <li className="list"> <span className="icon"><FcAbout /></span><Link className="link" to="/about">About</Link></li>
                         <li className="list"> <span className="icon"><GrOrderedList /></span><Link className="link" to="/orders">Orders</Link></li>
                        <li className="list"> <span className="icon"><MdRateReview /></span><Link className="link" to="/testimonial">Add Review</Link></li>                       

                    </ul>
                    <div className="logUotBtn">
                       <Link className="log"> <span onClick={() => setLoggedInUser(' ')} className="icon"><FiLogOut /> Log Out</span></Link>
                     </div>
                </nav>
            </div>
    

        </div>
    );
};

export default Sidebar;