import React from 'react';
import LeftContainer from './LeftContainer/LeftContainer';
import RightContainer from './RightContainer/RightContainer';

const Main = () => {
    return (
        <div className=' grid md:grid-cols-[5fr_2fr] xl:grid-cols-[6fr_2fr] gap-4 m-4 '>
            <LeftContainer></LeftContainer>
            <RightContainer></RightContainer>
        </div>
    );
};

export default Main;