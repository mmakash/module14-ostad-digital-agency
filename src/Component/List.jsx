import React, { useEffect, useState } from "react";

const List = () => {
  const [list, setList] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch("/public/Database/testimonial.json");
      const data = await response.json();
      setList(data);
    })();
  }, []);
  return (
    <div className="px-20 my-20">
      <div className="my-20">
        <h3 className="text-base text-green-500 font-bold">Testimonial List</h3>
        <h2 className="text-xl font-bold">
          Better Agency/SEO Solution At Your Fingertips
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
        {list &&
          list.map((data, index) => {
            return (
              <div key={index} className="shadow-xl p-8 rounded text-center flex flex-col items-center">
                <img className="w-20" src={data.img} alt="" />
                <p>{data.desc}</p>
                <h3 className="text-xl font-bold">{data.name}</h3>
                <p>{data.profession}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default List;
