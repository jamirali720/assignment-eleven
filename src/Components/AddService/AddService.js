import React from 'react';
import { useForm } from 'react-hook-form'
import Sidebar from '../Sidebar/Sidebar';






const AddService = () => { 
    const { register, handleSubmit , formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = new FormData();      
        formData.append('title', data.title)
        formData.append('price', data.price)
        formData.append('description', data.desc)
        formData.append('date', new Date().toDateString()) 
        formData.append('file', data.file[0])  
      

        fetch('http://localhost:4000/addService', {
            method: 'POST',
            body:formData
          
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
        

   
    return (
        <main>
            <section>
                <div className=" row">                        
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10">
                        <h1 className="text-primary my-4">Add A New Service </h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="bg-warning rounded-3">

                                <div className="row">
                                <div className=" col-md-8 m-auto">
                                        <div className="m-3 mx-5">
                                            <input type="text" className="form-control" name="title" {...register('title', { required: true })} placeholder=" Course Title" />           
                                            {errors.title && <span style={{color: 'red'}}> Title is required</span>}
                                        </div>

                                        <div className="mx-5">
                                            <input type="text" className="form-control" name="price" {...register("price", { required: true })} placeholder="Course Price" />                     
                                            {errors.price && <span style={{color: 'red'}}> Price is required</span>}
                                        </div>
                                </div>
                                </div>
                                <div className="col-md-8 m-auto">                                                         
                                    <div className="m-3 mx-5">
                                        <input type="file" className="form-control" {...register("file", { required: true })} name="file" placeholder="Your Password" />                     
                                        {errors.file && <span style={{color: 'red'}}> file is required</span>}
                                    </div>
                                    <div className="mx-5 pb-3">
                                        <textArea type="desc" rows="5" cols="100" className="form-control" name="desc" {...register("desc", { required: true })} placeholder="Description" />                
                                        {errors.desc && <span style={{color: 'red'}}> Description is required</span>}
                                    </div>  
                                      <div className="col-md-8 m-auto">
                                         <button  type="submit" className="btn btn-primary form-control mb-5  "> Add Service</button>
                                    </div>                             
                                </div>
                                 
                            </div>
                         
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AddService;