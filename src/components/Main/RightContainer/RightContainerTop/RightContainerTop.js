import React, { useState } from 'react';
import img from "../../../../Assets/Images/imran.png";
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import RightContainerAddBreak from '../RightContainerAddBreak/RightContainerAddBreak';
import "./RightContaiberTop.css"
let breaks = 0;

const RightContainerTop = ({time}) => {
  const [breakTime, setBreakTime] = useState(0);
  

  const handleBreakTime = (time) => {
    breaks = time;
    setBreakTime(breaks);
  };
    return (
        <div
      style={{
        marginLeft: "10px",
        marginTop: "20px",
        marginRight: "10px",
        position: "sticky",
        top: "0",
      }}
    >
      <div className="img-style">
        <img src={img} alt="" />
        <h4 className='text-2xl font-bold text-orange-300'>Manir Hossain</h4>
      </div>
      <p style={{ textAlign: "justify", color: "white" }}>
        I help skinny people to build muscle without lifting weights. I help
        people like you to lose weight without breaking a sweat. We help
        athletes to up their game through proper nutrition.
      </p>
      <RightContainerAddBreak handleBreakTime={handleBreakTime}></RightContainerAddBreak>
       <ExerciseDetails time={time} breakTime={breakTime}></ExerciseDetails>
      </div>
    );
};

export default RightContainerTop;