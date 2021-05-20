import React from 'react';
import { Link } from 'react-router-dom';



const ServicesDetail = (props) => {
    
    const { _id,  title, desc, price, image, time} = props.service;
    const id = _id;
  
   
       
 
    return (
        <div className='mx-auto'>
           <div className="card" style={{width: '20em', margin:'30px'}} >               
                <img style={{height:'200px'}} className="card-img-top" src={`data:image/png;base64, ${image.img}`} alt="" />
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text"> Price of Course : {price}</p>
                <p className="card-text">{time}</p>              
                <p className="card-text">{desc}</p>
             
               <Link to={`/course/${id}`} className="btn btn-primary">
                    Start Right Now </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetail;