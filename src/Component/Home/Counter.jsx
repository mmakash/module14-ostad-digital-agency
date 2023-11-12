import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch("/public/Database/count.json");
      const data = await response.json();
      setCount(data);
    })();
  }, []);
  return (
    <div className="flex flex-col sm:flex-row justify-evenly px-20">
      {count &&
        count.map((data, index) => {
          return (
            <div className="shadow-xl p-8" key={index}>
              <img className="mb-4" src={data.icon} alt="" />
              <h1 className="text-2xl font-bold mb-4">{data.number}</h1>
              <p className="text-base mb-4">{data.title}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Counter;
