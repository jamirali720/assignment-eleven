import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const Users = () => {
    const [userInfo, setUserInfo] = useState([])
    const [deleteItem, setDeleteItem] = useState({})

    const [loggedInUser, setLoggedInUser] = useContext(authContext)
    useEffect (() =>  {
        fetch(`http://localhost:4000/getEnrollingData/?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: { 
                'authorization': `Bearer ${sessionStorage.getItem("token")}`,
                'Content-Type' : 'application/json'
               
            }
        } )
        .then(res =>  res.json())
        .then(result => setUserInfo(result))
    },[loggedInUser.email])

    const handleDelete=(id) => {
       fetch(`http://localhost:4000/delete/${id}`, {
           method: 'DELETE',
       })
       .then(res => res.json())
       .then(result => setDeleteItem(result))
    }
  
    console.log(deleteItem)
    return (
        <div className="row ml-auto">
        <div className="col-md-2">
            <Sidebar/>
        </div>
        <div className="col-md-10">
            <table  class="table table-bordered border-primary text-center">
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Email </th>
                        <th>Course Title</th>
                        <th> Course Price</th>
                        <th>Phone </th>
                        <th>Date </th>
                        <th>Address </th>
                        <th>Action </th>
                    </tr>
                </thead>
                {
                    userInfo.map(user => (
                        <tbody>
                        <tr>
                             <td>{user.name}</td>
                             <td>{user.email} </td>
                             <td>{user.title} </td>
                             <td> {user.price} </td>
                             <td>{user.phone} </td>
                             <td>{user.date} </td>
                             <td>{user.address} </td>                          
                             <td> <button onClick={()=> handleDelete(user._id)}>Delete</button></td>
                        </tr>
                    </tbody>
                    ))
                }
                
            </table>
        </div>

 </div>
    );
};

export default Users;
