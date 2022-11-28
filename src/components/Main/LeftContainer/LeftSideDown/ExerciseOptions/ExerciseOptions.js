import React from "react";

const ExerciseOptions = ({ option ,handleAddTime}) => {
  const { img, title, time } = option;
  return (
    <div>
      <div className="card min-w-full h-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl "
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-medium text-orange-300">{title}</h2>
          <p>Time required: {time}s</p>
          <div className="card-actions">
            <button 
            onClick={() => handleAddTime(option)}
            className="btn btn-primary">Add to list</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseOptions;
