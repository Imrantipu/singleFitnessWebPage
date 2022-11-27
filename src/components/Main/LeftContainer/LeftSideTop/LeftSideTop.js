import React from "react";
import img from "../../../../Assets/Images/exercise.png"

const LeftSideTop = () => {
  return (
    <div>
          <div className="flex flex-row items-center">
          <img  className="rounded-full" src={img} alt="" />
          <p className="m-4 text-4xl font-medium text-orange-500">Fitness freak</p>
          </div>
        <h5 className="mt-10 text-2xl font-medium text-orange-200">Select today’s exercise</h5>

    </div>
  );
};

export default LeftSideTop;
