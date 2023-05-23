import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
    
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://toy-fusion-server-mizanphero.vercel.app/addtoys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
            if(result.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                reset(); 
            }
        })   
  };

  return (
    <div className="text-center rounded bg-slate-50 my-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="mb-4 text-3xl font-medium text-center text-red-500">
          Add a Toy
        </p>
        {/* register your input into the hook by invoking the "register" function */}
        <div>
          <input
            className="input-style"
            placeholder="Toy Name"
            {...register("toyName", { required: true })}
          />{" "}
          <br />
          {errors.toyName && (
            <span className="ml-4 text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <input
            className="input-style"
            placeholder="Seller Name"
            {...register("sellerName", { required: true })}
          />{" "}
          <br />
          {errors.sellerName && (
            <span className="ml-4 text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <input
            className="input-style"
            type="email"
            value={user?.email || ''}
            placeholder="Seller Email"
            {...register("sellerEmail", { required: true })}
          />{" "}
          <br />
          {errors.sellerEmail && (
            <span className="ml-4 text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <input
            className="input-style"
            placeholder="Toy Picture"
            {...register("toyPicture", { required: true })}
          />{" "}
          <br />
          {errors.toyPicture && (
            <span className="ml-4 text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <input
            className="input-style"
            type="number"
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
            placeholder="Rating"
            {...register("rating", { required: true })}
          />{" "}
          <br />
          {errors.rating && (
            <span className="ml-4 text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <input
            className="input-style"
            type="number"
            placeholder="Available Quantity"
            {...register("quantity", { required: true })}
          />{" "}
          <br />
          {errors.quantity && (
            <span className="ml-4 text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <select className="input-style" {...register("subCategory")}>
            <option value="marvel">Marvel</option>
            <option value="starWar">Star War</option>
            <option value="transformers">Transformers</option>
          </select>
          {errors.subCategory && (
            <span className="ml-4 text-red-500">This field is required</span>
          )}
        </div>
        <br />

        <textarea
          cols={80}
          rows={5}
          placeholder="Description"
          className="w-1/2 p-4"
          type="text"
          {...register("description", { required: true })}
        />
        <br />

        <input value="Add Toy" className="mt-5 btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default AddToy;
