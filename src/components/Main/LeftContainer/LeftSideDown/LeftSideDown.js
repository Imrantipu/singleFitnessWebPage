import React, { useEffect, useState } from 'react';
import Accordion from './Accordion/Accordion';
import ExerciseOptions from './ExerciseOptions/ExerciseOptions';

const LeftSideDown = ({options,handleAddTime}) => {
    // const [exerciseoptions, setExerciseOptions] = useState([]);
  

  // useEffect(() => {
  //   fetch("data.json")
  //     .then((res) => res.json())
  //     .then((data) => setExerciseOptions(data));
  // }, []);

    return (
        <div>
            <div className='grid md:grid-cols-2 gap-4 lg:grid-cols-3 gap-4'>
                {
                    options.map((option) => (
                        <ExerciseOptions
                          key={option.id}
                          option={option}
                          handleAddTime={handleAddTime}
                        
                        ></ExerciseOptions>
                      ))
                }
            
            </div>
            <div className='mt-6 rounded-lg'>
              <Accordion></Accordion>
            </div>
        </div>
    );
};

export default LeftSideDown;