import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTourHandler }) => {
  const [readeMore, setReadeMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readeMore ? info : `${info.substring(1, 100)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadeMore(!readeMore)}
          >
            {!readeMore ? "Reade More" : "Show less"}
          </button>
        </p>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTourHandler(id)}
        >
          Remove Tour
        </button>
      </div>
      {/* tour card */}
      {/* btn: onClick -> changeTours(id) */}
    </article>
  );
};

export default Tour;
