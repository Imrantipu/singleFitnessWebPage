import React from "react";
import img from "../../../Assets/Images/exercise.png";
import "./LeftSideTop.css";
const LeftSideTop = () => {
  return (
    <div className="container-fluid pt-5 pb-3 ml-10 mr-10">
      <div className="header-title">
        <div>
          <img style={{height:"70px " ,borderRadius:"10px"}} src={img} alt="" />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <h4 className="text-3xl text-fuchsia-600">Fitness Freak</h4>
        </div>
      </div>
      <div style={{ marginTop: "30px", color:'white'}}>
        <h5 className="text-2xl text-rose-200">Select today’s exercise</h5>
      </div>
    </div>
  );
};

export default LeftSideTop;
