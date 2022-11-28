import React from 'react';
import toast, { Toaster } from "react-hot-toast";
import './ExerciseDetails.css'

const ExerciseDetails = ({time,breakTime}) => {

  const showAlert = () => {
    toast.success("You have completed todays task");
  };

    return (

            <div style={{ marginTop: "30px" }}>
      <h4 style={{ color: "white" }}>Exercise Details</h4>
      <div className="details-time">
        <p style={{ marginLeft: "10px", marginTop: "7px", fontWeight: "bold" }}>
          Exercise Time
        </p>
        <p style={{ marginRight: "10px", marginTop: "7px" }}>{time}s</p>
      </div>
      <br />
      <div className="details-time">
        <p style={{ marginLeft: "10px", marginTop: "7px", fontWeight: "bold" }}>
          Break Time
        </p>
        <p style={{ marginRight: "10px", marginTop: "7px" }}>{breakTime}s</p>
      </div>
      <br />
      <div className="d-grid gap-2">
      <button 
      onClick={showAlert}
      className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Activity Completed</button>
        <Toaster />
      </div>
    </div>

    );
};

export default ExerciseDetails;