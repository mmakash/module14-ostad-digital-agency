import React from "react";

const Mail = () => {
  return (
    <div>
      <div className="text-center">
        <h4 className="text-2xl mb-4 text-green-500">SUBSCRIBE</h4>
        <h3 className="text-3xl mb-4 font-bold">Subscribe to get the latest<br/> news about us</h3>
        <p className="text-base">Please drop your email below to get daily update about what we do</p>
      </div>
      <div className="flex items-center justify-center my-5">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button className="btn btn-accent">Subscribe</button>
      </div>
    </div>
  );
};

export default Mail;
