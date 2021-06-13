import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import {useParams} from 'react-router-dom'
import { authContext } from '../../App';
import Payment from '../Payment/Payment';



const CourseEnrolling = () => {
    const [loggedInUser] = useContext(authContext)
    const [paymentData, setPaymentData] = useState(null)
    const [courseInfo, setCourseInfo] = useState({})
    const {id} = useParams()  
   
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        setPaymentData(data)
    };

  
  
    useEffect(()=> {
        fetch(`https://stormy-falls-19127.herokuapp.com/getServiceById/${id}`)
        .then(res => res.json())
        .then(userInfo =>setCourseInfo(userInfo))
    } ,[id])
    console.log(paymentData);
    const handlePaymentProcess = (paymentId) => {
        const formData = new FormData();
        formData.append("name", paymentData.name);
        formData.append("email", paymentData.email);
        formData.append("phone", paymentData.phone);
        formData.append("address", paymentData.address);
        formData.append("title", courseInfo.title);
        formData.append("price", courseInfo.price);
        formData.append("date", new Date().toDateString());
        formData.append("paymentId", paymentId)

        fetch("http://localhost:4000/enrollingData", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) =>{
              if(data){
                  alert('Enroll successfully completed')
              }
          });
    }

    return (
      <div>
        <div className="container my-5">
          <h1 className="text-success"> Fill Up following Information</h1>
          <div className="row mb-5">
            <div className="col-md-6" style={{ display: paymentData ? "none" : "block" }}>
              <div id="leftDiv" className="bg-secondary pt-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="m-3">
                    <input type="text" className="form-control" name="name" {...register("name", { required: true })} placeholder="Your Name" />
                    {errors.name && <span> Name is required</span>}
                  </div>

                  <div className="m-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      {...register("email", { required: true })}
                      defaultValue={loggedInUser.email}
                    />
                    {errors.email && <span> Email is required</span>}
                  </div>
                  <div className="m-3">
                    <input
                      type="phone"
                      className="form-control"
                      name="phone"
                      {...register("phone", { required: true })}
                      placeholder="Your Phone Number"
                    />
                    {errors.phone && <span> Phone is required</span>}
                  </div>
                  <div className="m-3">
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      {...register("title", { required: true })}
                      defaultValue={courseInfo.title}
                    />
                    {errors.title && <span> Title is required</span>}
                  </div>
                  <div className="m-3">
                    <input
                      type="text"
                      className="form-control"
                      name="price"
                      {...register("price", { required: true })}
                      defaultValue={courseInfo.price}
                    />
                    {errors.price && <span> Price is required</span>}
                  </div>
                  <div className="m-3 pb-3">
                    <input
                      type="address"
                      className="form-control"
                      name="address"
                      {...register("address", { required: true })}
                      placeholder="Your Address"
                    />
                    {errors.address && <span> Phone is required</span>}
                  </div>

                  <div className="">
                    <input type="submit" className="form-control bg-primary text-white" defaultValue="submit" />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6" style={{ display: paymentData ? "block" : "none" }}>
              <Payment handlePaymentProcess={handlePaymentProcess}></Payment>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseEnrolling;
