import React, { useEffect, useState } from "react";

const AllService = () => {
  const [ServiceData, setServiceData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch("/public/Database/service.json");
      const data = await response.json();
      setServiceData(data);
    })();
  }, []);
  return (
    <div className="px-20 my-20">
      <div>
        <h3 className="text-base text-green-500 font-bold">Our All Services</h3>
        <h2 className="text-xl font-bold">
          We Provide BestWeb design services
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 my-10">
        {ServiceData &&
          ServiceData.map((data, index) => {
            return (
              <div key={index} className="shadow-xl p-8 rounded">
                <img src={data.img} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AllService;
