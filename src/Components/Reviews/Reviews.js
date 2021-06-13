import React, { useEffect, useState } from 'react';
import './Reviews.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






const Reviews = () => {
  const [reviews, setReviews] = useState([]);

    useEffect(() => {
      fetch("http://localhost:4000/getReviews")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    },[])

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed:2000,
      slidesToScroll: 3,
      initialSlide: 1,
      
    }

   
    return (
      <main className="container slide-slick">
        <h2> Client's Reviews</h2>

        <Slider {...settings}>
          {reviews.map((item) => (
            <div className="card shadow-lg slide" >
              <img style={{ height: "220px" }} className="card-img-top" src={`data:image/png;base64,${item.image.img}`} alt="" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"> {item.title}</p>                
                <p className="card-text"> {item.description}</p>                
              </div>
             
            </div>
          ))}
        </Slider>
      </main>
    );
};

export default Reviews;