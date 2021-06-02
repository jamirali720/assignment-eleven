import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import { useForm } from "react-hook-form";

const Testimonial = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
        formData.append('name', data.name )
        formData.append('title', data.title )
        formData.append('file', data.file[0] )
        formData.append('description', data.description )
        
        fetch("http://localhost:4000/addReview", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
   
  };

  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8 mx-auto mt-5 shadow-lg p-5 rounded-3">
        <h3 className="text-warning text-center mb-3 mb-2"> Add Your Review</h3>
        <div className="bg-secondary  p-5 rounded-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="m-3">
              <input type="text" {...register("name", { required: true })} className="form-control" placeholder="Your Name" />
              {errors.name && <span> Name is required</span>}
            </div>
            <div className="m-3">
              <input type="text" {...register("title", { required: true })} className="form-control" placeholder="Title" />
              {errors.title && <span> Title is required</span>}
            </div>
            <div className="m-3">
              <input type="file" {...register("file", { required: true })} className="form-control" />
              {errors.file && <span> File is required</span>}
            </div>
            <div className="m-3">
              <textArea
                rows="4"
                cols="50"               
                {...register("description", { required: true })}
                className="form-control"
                placeholder="Write Description Here"
              ></textArea>
              {errors.description && <span> Description is required</span>}
            </div>
            <div className="m-3 ">
              <button type="submit" className="form-control btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
