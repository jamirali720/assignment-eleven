import React from "react";
import './Admin.css'
import {useForm} from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const Admin = () => {
const { register, handleSubmit ,  formState: { errors }} = useForm();
  const onSubmit = data => {
    const formData = new FormData();
           formData.append('email', data.email)
            fetch("https://stormy-falls-19127.herokuapp.com/addAdmin", {
              method: "POST",

              body: formData
            })
              .then((res) => res.json())
              .then((data = console.log(data)));
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8 admin-box">
          <h2 className="text-success">Make A Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="email" className="form-control input" name="email"{...register("email", { required: true })}  placeholder="Admin Email "/>
              {errors.email && <span> Email is required</span>}
              <div className="btnDiv">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
