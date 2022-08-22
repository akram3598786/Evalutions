import React from "react";

function Slide({id,title,description}) {
 // console.log(id,title,description)
  return (
    <div className="slide-container" data-cy="slide">
     <div>
          <h3 data-cy="title">{title}</h3>
          <p data-cy="description">{description}</p>
        </div>
      </div>
  );
}

export default Slide;
