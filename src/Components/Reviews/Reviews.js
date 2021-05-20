import React, { useState } from 'react';
import './Reviews.css'


const reviews = [
    {   id: 1,
        name: 'jamir ali',
        job: 'web developer',
        image: 'https://i.ibb.co/Xsb12bj/Sunan-E-Abu-Daud.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea!'
    },
    {   id: 2,
        name: 'Akrmul kabir',
        job: 'web developer',
        image: 'https://i.ibb.co/XF5SD4r/Sharh-As-Sunnah.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea!'
    },
    {   id: 3,
        name: 'Sharafat ali',
        job: 'web developer',
        image: 'https://i.ibb.co/SydSNWj/Sahih-Ibn-Khuzaymah.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea!'
    },
    {   id: 4,
        name: 'Abu bakar',
        job: 'web designer',
        image: 'https://i.ibb.co/t20dVDJ/Sahih-Al-Muslim.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea!'
    },
    {   id: 5,
        name: 'Shah ali',
        job: 'web developer',
        image: 'https://i.ibb.co/jLFRWxN/Musnad-Al-Bazzar.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea!'
    },
    {   id: 6,
        name: 'Hazrat Omar',
        job: 'web developer',
        image: 'https://i.ibb.co/YPfcyLS/Sahih-Al-Bukhari.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea!'
    },
    {   id: 7,
        name: 'hazrat Osman',
        job: 'web developer',
        image: 'https://i.ibb.co/T2njz46/Quran.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea!'
    },
]


const Reviews = () => {
    const [index, setIndex] = useState(0)
    const {name, job, image, text} = reviews[index]

    const checkNumber = (number) => {
        if(number > reviews.length -1){
            return 0
        }
        if(number < 0){
            return reviews.length -1;
        }
        return number;
    }
    
    const randomPerson = () => {
        let randomNumber = Math.floor(( Math.random()) * reviews.length);
        if(randomNumber === index){
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber))
    }
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex)
        })
    }
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex)
        })
    }
    return (
        <main>
              <section className="container">
              <div className="title">
                    <h1> Our Review</h1>
                    <div className="underline"></div>  
                    <div className="img-container">
                        <img src={image} alt={name} />
                       <div className="mt-5 px-5 pt-3">
                       <h3> {name} </h3>
                        <p> {job} </p>
                        <p> {text} </p>
                       </div>
                    </div> 
                    <div className="btn-container">
                       
                        <button onClick={prevPerson}>prev</button>       
                        <button onClick={nextPerson}>next</button> 
                        <button onClick={randomPerson}>random Person</button> 
                    </div> 
                                     
              </div>         
            </section>         
          
           
        </main>
    );
};

export default Reviews;