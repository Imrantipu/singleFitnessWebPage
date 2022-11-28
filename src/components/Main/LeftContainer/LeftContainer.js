import React from 'react';
import LeftSideDown from './LeftSideDown/LeftSideDown';
import LeftSideTop from './LeftSideTop/LeftSideTop';
const LeftContainer = ({options,handleAddTime}) => {
    return (
        <div>
            <LeftSideTop></LeftSideTop>
            <LeftSideDown options= {options} handleAddTime ={handleAddTime}></LeftSideDown>
        </div>
    );
};

export default LeftContainer;