import React, { useState, useEffect } from "react";

const TeamMember = () => {
  const [MemberData, setMemberData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch("/public/Database/member.json");
      const data = await response.json();
      setMemberData(data);
    })();
  }, []);
  return (
    <div className="px-20 my-20">
      <div>
        <h3 className="text-base text-green-500 font-bold">Our Team Member</h3>
        <h2 className="text-xl font-bold">
          Check our awesome team
          <br /> members
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 my-10">
        {MemberData &&
          MemberData.map((data, index) => {
            return (
              <div key={index} className="shadow-xl p-8 rounded">
                <img src={data.img} alt="" />
                <h3 className="text-xl font-bold">{data.name}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TeamMember;
