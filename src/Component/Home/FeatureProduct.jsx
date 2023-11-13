import React, { useState, useEffect } from "react";

const FeatureProduct = () => {
  const [featureData, setFeatureData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch("/public/Database/feature.json");
      const data = await response.json();
      setFeatureData(data);
      console.log(data);
    })();
  }, []);
  return (
    <div className="px-6 sm:px-20 lg:mt-1 my-20">
      <div className="py-8">
        <h1 className="text-2xl mb-4 text-green-500">Work List</h1>
        <p className="text-3xl mb-4">
          We provide the Perfect Solution
          <br /> to your business growth
        </p>
      </div>
      {/* here is my mapping start */}
      <div>
        <div className="flex flex-wrap gap-5">
          {featureData &&
            featureData.map((data, index) => {
              return (
                <div key={index} className="shadow-xl p-8">
                  <img className="mb-4" src={data.img} alt="" />
                  <p className="text-base mb-4">{data.date}</p>
                  <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
