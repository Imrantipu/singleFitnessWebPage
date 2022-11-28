import React from 'react';

const Accordion = () => {
    return (

        <div>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingOne">
      <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
        aria-controls="collapseOne">
        <strong>How does react works?</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
      React uses a declarative paradigm that makes it easier our
                  application and aims to be both efficient and flexible. It
                  designs simple views for each state in our application, and
                  React will efficiently update and render just the right
                  component when your data changes. The declarative view makes
                  code more predictable and easier to debug.A React application
                  is made of multiple components, each responsible for rendering
                  a small, reusable piece of HTML. Components can be nested
                  within other components to allow complex applications to be
                  built out of simple building blocks. A component may also
                  maintain an internal state.
      </div>
    </div>
  </div>
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingTwo">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
        aria-controls="collapseTwo">
        <strong> Difference between props and state?</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
      State is referred to the local state of the component which
                  cannot be accessed and modified outside of the component and
                  only can be used & modified inside the component. Props, on
                  the other hand,make components reusable by giving components
                  the ability to receive data from the parent component in the
                  form of props.
      </div>
    </div>
  </div>
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingThree">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
        aria-controls="collapseThree">
        <strong> What types of work useEffect do except data loading?</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
      1.Running on state change: validating input field. 2.Running
                  on state change: live filtering 3.Running on state change:
                  trigger animation on new array value. 4.Running on props
                  change: update paragraph list on fetched API data update.
                  5.Running on props change: updating fetched API data to get
                  BTC updated price
      </div>
    </div>
  </div>
</div>
        </div>
        
      
    );
};

export default Accordion;