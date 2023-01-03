import React from "react";

// För att enkelt ändra titlar i App.js
const TitleComponent = (props) => {
  return (
    <div className="col">
      <h1>{props.title}</h1>
    </div>
  );
};

export default TitleComponent;
