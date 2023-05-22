import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
// import { useHistory } from "react-router-dom";


import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();
//   const history = useHistory();

  const {
    _id,
    toyName,
    description,
    quantity,
    price,
  } = toy;


  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/updateToy/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {

        if (result.modifiedCount>0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          })
        //   .then((result) => {
        //     if (result.isConfirmed) {
        //         history.push("../mytoys"); // Navigate to "/mytoys" page
        //     }
        //   });
          
        }
      });
    console.log(data);


  };

  return (
    <div className="text-center rounded bg-slate-50 my-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="mb-4 text-3xl font-medium text-center text-red-600">
          Update {toyName}
        </p>
        {/* register your input into the hook by invoking the "register" function */}
        
        
        <div>
          <input
            className="input-style"
            type="number"
            defaultValue={price}
            placeholder="Price"
            {...register("price", { required: true })}
          />{" "}
          <br />
          {errors.price && (
            <span className="ml-4 text-red-500">This field is required</span>
          )}
        </div>
        
        <div>
          <input
            className="input-style"
            type="number"
            defaultValue={quantity}
            placeholder="Available Quantity"
            {...register("quantity", { required: true })}
          />{" "}
          <br />
          {errors.quantity && (
            <span className="ml-4 text-red-500">This field is required</span>
          )}
        </div>

        
        <br />

        <textarea
          cols={80}
          rows={5}
          defaultValue={description}
          placeholder="Description"
          className="w-1/2 p-4"
          type="text"
          {...register("description", { required: true })}
        />
        <br />

        <input className="mt-5 btn-primary" value="Update" type="submit" />
      </form>
    </div>
  );
};

export default UpdateToy;
