import React from 'react';
import LeftContainer from './LeftContainer/LeftContainer';
import RightContainer from './RightContainer/RightContainer';

const Main = () => {
    return (
        <div className='  grid md:grid-cols-[5fr_2fr] xl:grid-cols-[6fr_2fr] gap-4 m-4 '>
            <div>
            <LeftContainer></LeftContainer>
            </div>
            <div>
            <div className='mt-5 sticky top-0'>
            <RightContainer></RightContainer>
            </div>
            </div>
        </div>
    );
};

export default Main;