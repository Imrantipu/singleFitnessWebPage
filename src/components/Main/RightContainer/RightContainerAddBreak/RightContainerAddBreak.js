import React from 'react';
import "./RightContainerAddBreak.css"

const RightContainerAddBreak = () => {
    return (
        <div>
           <div className='mt-6'>
      <h4 className='text-2xl font-bold text-orange-200'>Add a Break</h4>
      <div className="break-time mt-2">
        <button className="time-style">
          <span>10s</span>
        </button>
        <button className="time-style" >
          <span>20s</span>
        </button>
        <button className="time-style" >
          <span>30s</span>
        </button>
        <button className="time-style" >
          <span>40s</span>
        </button>
      </div>
    </div> 
        </div>
    );
};

export default RightContainerAddBreak;