import React from 'react';
import './Sidebar.css'
import { AiFillHome } from 'react-icons/ai';
import { RiAdminFill } from 'react-icons/ri';
import { MdDashboard } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import { FcContacts } from 'react-icons/fc';
import { FaUserCircle } from 'react-icons/fa';
import { FcManager } from 'react-icons/fc';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import img from '../../images/jamirali.png'




const Sidebar = () => {
    const sideData= [
        { name: 'My Profile', link: "/profile" , icon: <CgProfile />},
        { name:'Dashboard', link: "/dashboard" , icon: <MdDashboard />},
        {name: 'Add Service', link:"/addService", icon:  <RiAdminFill /> },
        {name: 'Home', link: "/home", icon: <AiFillHome />},
        {name: 'About', link: "/about", icon:<FcAbout />},
        {name: 'Contact', link: "/contact", icon:<FcContacts />},
        {name: 'UsersInfo', link: "/users", icon:<FaUserCircle />},
        {name: 'Management', link: "/management", icon:<FcManager />}
    ]
    return (
        <div id="main">   
            <div id="profile-image">  <img src={img} alt="profile"/>           
            </div> 
           
            {
                sideData.map(item => {
                    return (
                        <div className=" link  px-3 py-3">                            
                          <Link className="underline" to={item.link}> <span className="icon">{item.icon}</span> <span className="item-name"> {item.name}</span> </Link>
                       
                        </div>
                    )
                })
            }
        
        </div>
    );
};

export default Sidebar;