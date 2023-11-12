import React from "react";

const HeroList = () => {
  return (
    <>
   <div className="bg-teal-200">
   <div className="flex flex-col sm:flex-row justify-between p-6 sm:p-20 h-[80vh]">
      {/* Left Side */}
      <div className="mb-8 sm:mb-0">
        <h1 className="text-3xl sm:text-7xl font-bold mb-4">
          Increase Your
          <br /> Customers Loyalty
          <br /> and Satisfaction
        </h1>
        <p className="text-base sm:text-lg mb-4">
          We help businesses like yours earn more customers,
          <br /> standout from competitors, make more money
        </p>
        <button className="btn btn-success w-32 sm:w-40">Your Button</button>
      </div>

      {/* Right Side */}
      <div>
        <div className="flex flex-col sm:flex-row gap-4 pb-4">
          <img src="/src/assets/images/Rectangle 1241.png" alt="Image 1"/>
          <img src="/src/assets/images/Rectangle 1242.png" alt="Image 2"/>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <img src="/src/assets/images/Rectangle 1243.png" alt="Image 3"/>
          <img src="/src/assets/images/Rectangle 1244.png" alt="Image 4"/>
        </div>
      </div>
    </div>
    <div className="h-[20vh]">
      <div className="flex justify-center items-center bg-slate-50 py-8">
        <img src="/src/assets/images/Group 1.png" alt="" />
      </div>
    </div>
   </div>
    
    </>
  );
};

export default HeroList;
