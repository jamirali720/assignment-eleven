import React, { useEffect, useState } from 'react';
import ServicesDetail from '../ServicesDetail/ServicesDetail';

const Services = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('https://stormy-falls-19127.herokuapp.com/allServices')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    return (
        <div className="container-fluid mr-auto shadow-lg pb-4 mb-4 rounded-3">
            <h1 className="text-center my-5"> Our Online Current Courses</h1>
            <div className="d-flex justify-content-space-between flex-wrap">
            {
                services.map((service, index)=><ServicesDetail service={service} key={index}></ServicesDetail>)
            }        
            </div> 

        </div>
    );
};

export default Services;