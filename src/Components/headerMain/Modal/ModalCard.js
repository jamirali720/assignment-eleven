import React from 'react';
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
const ModalCard = ({modalIsOpen, closeModal}) => {

    return (
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
          <div className="bg-secondary p-5">
            <h1>Hello Dear !</h1>

            <div>
              <h3 style={{ color: "#37FA6D" }}> Welcome to my New Website !!</h3>
            </div>         
              <button onClick={closeModal} className="btn btn-success mx-auto">
                Close
              </button>           
          </div>
        </Modal>
      </div>
    );
};

export default ModalCard;