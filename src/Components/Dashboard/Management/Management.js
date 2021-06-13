import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Sidebar from '../../Sidebar/Sidebar';

const Management = () => {
  const [orders, setOrders] = useState([])
  const history = useHistory();

    useEffect(() => {
        fetch('https://stormy-falls-19127.herokuapp.com/getAllOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
  
     const handleDelete=(id) => {
     fetch(`https://stormy-falls-19127.herokuapp.com/delete/${id}`, {
         method: 'DELETE',
     })
     .then(res => res.json())
     .then(result =>  console.log(result))
  }


  const handleUpdate = (id) => {
    history.push(`/updateOrder/${id}`)
  }

 
    return (
      <div>
     
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
          <div className="col-md-10">
          
        <table class="table  table-hover shadow text-center">
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
          {orders.map((order, index) => (
            <tbody>
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.email} </td>
                <td style={{width: '200px'}}>{order.title} </td>
                <td style={{width: '80px'}}> {order.price} </td>
                <td>{order.phone} </td>
                <td>{order.date} </td>
                <td style={{width: '100px'}}>{order.address} </td>
                     <td>
                         
                <button onClick={() => handleUpdate(order._id)}> Update</button>
                <button className="px-2 mt-2" onClick={() => handleDelete(order._id)}> Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
                </div>
            </div>
            
        </div>
    );
};

export default Management;