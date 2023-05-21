import { useEffect, useState } from "react";
import ToyList from "./toyList";


const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  console.log(toys);

  return (
    <div>
      <h1 className="mb-4 text-3xl font-medium text-center text-red-500">
        All Toys
      </h1>

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
                      Available Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                } */}

                    {
                        toys.map(toy => <ToyList
                        key= {toy._id}
                        toy= {toy}
                        ></ToyList>)
                    }
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
