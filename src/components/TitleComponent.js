import React from "react";

// För att enkelt ändra titlar globalt i appen
const TitleComponent = (props) => {
  return (
    <div className="col">
      <h1>{props.title}</h1>
    </div>
  );
};

export default TitleComponent;
