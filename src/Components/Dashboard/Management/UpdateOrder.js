import React, { useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import Sidebar from '../../Sidebar/Sidebar';
import { authContext } from '../../../App';

const UpdateOrder = () => {
    const [loggedInUser] = useContext (authContext)
    let { id } = useParams();
    const [courseInfo, setCourseInfo] = useState({})
    const [updateInfo, setUpdateInfo] = useState();
  
  
      useEffect(()=> {
        fetch(`http://localhost:4000/getOrders/${id}`)
          .then((res) => res.json())
          .then((data) => setCourseInfo(data));
    } ,[id])

    const handleBlur = (e) => {
        const newInfo = {...updateInfo};
        newInfo[e.target.name] = e.target.value;
        setUpdateInfo(newInfo)

    }
    const handleSubmit = (e) => {
      e.preventDefault();
            const formData = new FormData();
             formData.append("name", updateInfo.name);
             formData.append("email", updateInfo.email);
             formData.append("phone", updateInfo.phone);
             formData.append("address", updateInfo.address);
             formData.append("title", updateInfo.title);
             formData.append("price", updateInfo.price);
             formData.append("date", updateInfo.date);

             fetch(`http://localhost:4000/update/${id}`, {
                 method: 'PATCH', 
              
                body: formData
             })
             .then(res => res.json())
             .then(data => console(data))

    };
   

    return (
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8">
          <div className="container my-5">
              <h2 className="text-primary text-center my-2">Update Order</h2>
            <div className="mb-5">
              <div className="bg-secondary pt-2">
                 <form action="" onSubmit={handleSubmit}>
                  <div className="m-3">
                    <input onBlur={handleBlur} type="text" className="form-control" name="name" defaultValue={courseInfo.name} />
                  </div>
                  <div className="m-3">
                    <input onBlur={handleBlur} type="email" className="form-control" name="email" defaultValue={loggedInUser.email} />
                  </div>
                  <div className="m-3">
                    <input onBlur={handleBlur} type="phone" className="form-control" name="phone" defaultValue={courseInfo.phone} />
                  </div>
                  <div className="m-3">
                    <input onBlur={handleBlur} type="text" className="form-control" name="price" defaultValue={courseInfo.price} />
                  </div>
                  <div className="m-3">
                    <input onBlur={handleBlur} type="text" className="form-control" name="title" defaultValue={courseInfo.title} />
                  </div>
                  <div className="m-3">
                    <input onBlur={handleBlur} type="address" className="form-control" name="address" defaultValue={courseInfo.address} />
                  </div>
                  <div className="m-3">
                    <input onBlur={handleBlur} type="text" className="form-control" name="date" defaultValue={courseInfo.date} />
                  </div>
                  <div className="m-3 mb-3">
                    <button  type="submit" className="form-control">
                      Submit
                    </button>
                  </div>
                </form> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateOrder;