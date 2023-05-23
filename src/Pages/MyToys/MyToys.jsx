import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyList from "./MyToyList";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch(`https://toy-fusion-server-mizanphero.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

  const handleSort = () => {
    const sortedToys = [...toys].sort((a, b) => {
      if (sortOrder === "asc") {
        return b.price - a.price;
      } else {
        return a.price - b.price;
      }
    });
    setToys(sortedToys);
    setSortOrder(event.target.value);
  };

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-fusion-server-mizanphero.vercel.app/delToy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to delete the toy");
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== _id);
              setToys(remaining);
            }
          })
          .catch((error) => {
            console.error("Failed to delete toy:", error);
            Swal.fire("Error", "Failed to delete the toy.", "error");
          });
      }
    });
  };

  return (
    <div>
      <h1 className="mx-auto mb-4 text-3xl font-medium text-center text-red-600">
        My Toys
      </h1>

      <div className="text-center">
        <select
          value={sortOrder}
          onChange={handleSort}
          className="p-2 border rounded"
        >
          <option value="asc">Ascending by Price</option>
          <option value="desc">Descending by Price</option>
        </select>
      </div>

      <div className="flex flex-col my-container">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-left text-gray-900 "
                    >
                      Seller
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                    >
                      Toy Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                    >
                      Sub Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                    >
                      Edit
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {toys.map((toy) => (
                    <MyToyList
                      key={toy._id}
                      toy={toy}
                      handleDelete={handleDelete}
                    ></MyToyList>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
