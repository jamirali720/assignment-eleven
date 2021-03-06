import React from 'react';
import HeaderImg from '../../images/photo0.jpg'

import ModalCard from './Modal/ModalCard';





const HeaderMain = () => {     
     const [modalIsOpen, setIsOpen] = React.useState(false);
     function openModal() {
       setIsOpen(true);
     }

     function closeModal() {
       setIsOpen(false);
     }
    return (
       <div style={{background: "#482599"}}>
            <div className="container-fluid row  py-5" style={{marginLeft: '60px'}}>
            <div className="col-md-6 col-sm-6 ">
               <h3 className="text-success"> Become A Full-Stack Web Developer </h3>
               <h1 className="text-white fw-bolder"> The Largest In The World's <br/> International Online Web Development Courses </h1>
               <h1 className="text-warning">Earn a Certificate</h1>
               <button onClick={openModal} className="btn btn-primary">Get Started</button>
               <ModalCard modalIsOpen={modalIsOpen} closeModal={closeModal}></ModalCard>
            </div>
            <div className="col-md-6 col-sm-6 m">
            <img style={{height:'300px'}} src={HeaderImg} alt=""/>
            </div>
         
        </div>
       </div>
    );
};

export default HeaderMain;