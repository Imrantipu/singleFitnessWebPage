import React from 'react';
import "./Main.css"
import LeftSideTop from './../../components/LeftSide/LeftSideTop/LeftSideTop';
import InfoDetails from '../../components/RightSide/InfoDetails/InfoDetails';

const Main = () => {
    return (
        <div>
          <div className="container-fluid main-container ">
          <div className="row">
             <div className="col-md-8 col-12">
               <LeftSideTop></LeftSideTop>
            </div>
            </div>
            <div className="col-md-4 col-12">
            <div className="mt-5 details-container bg-primary-focus">
              <InfoDetails></InfoDetails>
            </div>
          </div>
          </div>
        </div>
    );
};

export default Main;