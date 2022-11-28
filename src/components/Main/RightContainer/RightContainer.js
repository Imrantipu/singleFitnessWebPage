import React from 'react';
import RightContainerTop from './RightContainerTop/RightContainerTop';


const RightContainer = ({time}) => {
    return (
        <div>
          <RightContainerTop time ={time}></RightContainerTop>
        </div>
    );
};

export default RightContainer;