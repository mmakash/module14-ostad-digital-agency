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
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-0">
          <div>
            <img src="/images/Group 2190.png" alt="" />
          </div>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
            {featureData &&
              featureData.map((data, index) => {
                return (
                  <div key={index}>
                    <img src={data.img} alt="" />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
