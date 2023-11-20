import React, { useEffect, useState } from "react";

const WorkList = () => {
  const [workData, setWorkData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch("/public/Database/work.json");
      const data = await response.json();
      setWorkData(data);
    })();
  }, []);
  return (
    <div className="h-[60vh] px-6 sm:px-20 lg:mt-10 mb-40">
      <div>
        <h1 className="text-2xl mb-4 text-green-500">Work List</h1>
        <p className="text-3xl mb-4">We provide the Perfect Solution<br/> to your business growth</p>
      </div>
       <div className="flex flex-col sm:flex-row justify-between px-20 sm:p-20">
           {
            workData && workData.map((data,index) => {
                return (
                    <div key={index}>
                        <img src={data.icon} alt="" />
                        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                        <p className="text-base mb-4">{data.description}</p>
                        <button>Learn More</button>
                    </div>
                )
            })
           }
       </div>
    </div>
  );
};

export default WorkList;