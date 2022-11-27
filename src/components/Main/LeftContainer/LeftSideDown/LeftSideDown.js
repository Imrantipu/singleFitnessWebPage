import React, { useEffect, useState } from 'react';
import ExerciseOptions from './ExerciseOptions/ExerciseOptions';

const LeftSideDown = () => {
    const [exerciseoptions, setExerciseOptions] = useState([]);
  

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExerciseOptions(data));
  }, []);

    return (
        <div>
            <div className='grid md:grid-cols-2 gap-4 lg:grid-cols-3 gap-4'>
                {
                    exerciseoptions.map((option) => (
                        <ExerciseOptions
                          key={option.id}
                          option={option}
                        
                        ></ExerciseOptions>
                      ))
                }
            </div>
        </div>
    );
};

export default LeftSideDown;