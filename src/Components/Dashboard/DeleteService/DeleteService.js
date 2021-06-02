import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const DeleteService = () => {
    const [services, setServices] = useState([]);
        
    useEffect(() => {
          fetch("http://localhost:4000/allServices")
            .then((res) => res.json())
            .then((data) => setServices(data));
        }, []);

    
       const handleDelete = (id) => {
         fetch(`http://localhost:4000/serviceDelete/${id}`, {
           method: "DELETE",
         })
           .then((res) => res.json())
           .then((result) => console.log(result));
       };
        
    return (
      <div>
        <div className="row">
          <div className="col-md-2">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-10">

            <div className="table mt-3">
                <h2 className="text-center"> Delete Service</h2>
              <table className="table table-hover table-bordered shadow text-center">
                <thead>
                  <tr className="text-white bg-dark">
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {services.map((service, index) => {
                  return (
                    <tbody>
                      <tr key={index}>
                        <td>{service.title} </td>
                        <td>{service.desc}</td>
                        <td>{service.price}</td>
                        <td>{service.date}</td>
                        <td>
                          <button onClick={()=> handleDelete(service._id)}>Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DeleteService;