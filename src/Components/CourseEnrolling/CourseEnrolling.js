import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import {useParams} from 'react-router-dom'
import Payment from '../Payment/Payment';



const CourseEnrolling = () => {
    
    const [courseInfo, setCourseInfo] = useState({})
    const {id} = useParams()  
   
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('phone', data.phone)
        formData.append('address', data.address)
        formData.append('title', courseInfo.title )
        formData.append('price', courseInfo.price )
        formData.append('date', courseInfo.date)
      

        fetch('http://localhost:4000/enrollingData', {
            method: 'POST',
            body: formData,
           
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
    };

    useEffect(()=> {
        fetch(`http://localhost:4000/getServiceById/${id}`)
        .then(res => res.json())
        .then(data =>setCourseInfo(data))
    } ,[id])
    console.log(courseInfo)
    
    return (
        <div>
            <div className="container my-5">
            <h1 className="text-success"> Fill Up following Information</h1>
                <div className="row mb-5">
                    <div className="col-md-6">
                    <div id="leftDiv" className="bg-secondary pt-2">
                        <form onSubmit={handleSubmit(onSubmit)}>                
                         <div className="m-3">
                            <input type="text" className="form-control" name="name" {...register("name", { required: true })}  placeholder="Your Name"/>
                            {errors.name && <span> Name is required</span>}
                        </div>
                  
                        <div className="m-3">
                            <input type="email" className="form-control" name="email" {...register("email", { required: true })}  placeholder="Your Email"/>
                            {errors.email && <span> Email is required</span>}
                        </div>
                        <div className="m-3">
                            <input type="phone" className="form-control" name="phone" {...register("phone", { required: true })}  placeholder="Your Phone Number"/>
                            {errors.phone && <span> Phone is required</span>}
                        </div>
                        <div className="m-3 pb-3">
                            <input type="address" className="form-control" name="address" {...register("address", { required: true })}  placeholder="Your Address"/>
                            {errors.address && <span> Phone is required</span>}
                        </div>
                            
                       <div className="">
                           <input type="submit" className="form-control bg-primary text-white" value="submit" />
                       </div>
                     </form>
                     </div>
                 </div>
                  <div className="col-md-6">
                      <Payment/>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default CourseEnrolling;
