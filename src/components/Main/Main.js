import React, { useEffect, useState } from 'react';
import LeftContainer from './LeftContainer/LeftContainer';
import RightContainer from './RightContainer/RightContainer';
let times = 0;
const Main = () => {

    const [options, setOptions] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, []);

  const handleAddTime = (selectedProduct) => {
    if (selectedProduct.time > 0) {
      times += selectedProduct.time;
      setTime(times);
    }
  };
    return (
        <div className='  grid md:grid-cols-[5fr_2fr] xl:grid-cols-[6fr_2fr] gap-4 m-4 '>
            <div>
        <LeftContainer options= {options} handleAddTime ={handleAddTime}></LeftContainer>
            </div>
            <div>
            <div className='mt-5 sticky top-0'>
            <RightContainer time ={time}></RightContainer>
            </div>
            </div>
        </div>
    );
};

export default Main;