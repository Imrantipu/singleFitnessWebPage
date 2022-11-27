import React from 'react';
import LeftSideDown from './LeftSideDown/LeftSideDown';
import LeftSideTop from './LeftSideTop/LeftSideTop';
const LeftContainer = () => {
    return (
        <div>
            <LeftSideTop></LeftSideTop>
            <LeftSideDown></LeftSideDown>
        </div>
    );
};

export default LeftContainer;