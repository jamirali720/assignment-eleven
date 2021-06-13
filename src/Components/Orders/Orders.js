import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../App";
import Sidebar from "../Sidebar/Sidebar";

const Orders = () => {
  const [userInfo, setUserInfo] = useState([]);

  const [loggedInUser] = useContext(authContext);
  useEffect(() => {
    fetch(`https://stormy-falls-19127.herokuapp.com/getEnrollingData/?email=${loggedInUser.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => setUserInfo(result));
  }, [loggedInUser.email]);

 

  return (
    <div className="row ml-auto">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10">
        <table className="table  table-hover shadow text-center">
          <thead>
            <tr>
              <th>Name </th>
              <th>Email </th>
              <th>Course Title</th>
              <th> Course Price</th>
              <th>Phone </th>
              <th>Date </th>
              <th>Address </th>
              <th>Status </th>
            </tr>
          </thead>
          {userInfo.map((user) => (
            <tbody>
              <tr>
                <td>{user.name}</td>
                <td>{user.email} </td>
                <td style={{width: '200px'}}>{user.title} </td>
                <td style={{width: '80px'}}> {user.price} </td>
                <td>{user.phone} </td>
                <td>{user.date} </td>
                <td style={{width: '100px'}}>{user.address} </td>
                <td>
                  <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option value="pending">Pending</option>
                    <option value="on going">On going</option>
                    <option value="done">Done</option>
                   
                  </select>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Orders;
