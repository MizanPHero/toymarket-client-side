import React, { useEffect, useState } from "react";
import Card from "./Card";

const Category = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("marvel");

  useEffect(() => {
    fetch(`https://toy-fusion-server-mizanphero.vercel.app/getToysByCategory/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [activeTab]);

  console.log(toys);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-10 md:mt-0 my-container">
      <h1 className="mx-auto mb-4 text-3xl font-medium text-center text-red-600">
        Shop Category
      </h1>

      <div className="flex justify-center mt-8 space-x-4">
        <div className="flex border border-red-600 rounded">
          <button
            className={`py-2 px-4 text-lg ${
              activeTab === "marvel" ? "bg-red-600 text-white" : "bg-white"
            }`}
            onClick={() => handleTabClick("marvel")}
          >
            Marvel
          </button>
          <div className="border-l border-red-600"></div>
          <button
            className={`py-2 px-4 text-lg ${
              activeTab === "transformers"
                ? "bg-red-600 text-white"
                : "bg-white"
            }`}
            onClick={() => handleTabClick("transformers")}
          >
            Transformers
          </button>
          <div className="border-l border-red-600"></div>
          <button
            className={`py-2 px-4 text-lg ${
              activeTab === "starWar" ? "bg-red-600 text-white" : "bg-white"
            }`}
            onClick={() => handleTabClick("starWar")}
          >
            Star War
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-8 md:grid-cols-4">

        {toys.map((toy) => (
          <Card key={toy._id} toy={toy} />
        ))}
      </div>
      
    </div>
  );
};

export default Category;
