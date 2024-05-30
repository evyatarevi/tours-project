import React, { useState } from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  const [toursList, setToursList] = useState(tours);
  const removeTourHandler = (id) => {
    setToursList(toursList.filter((tour) => tour.id !== id));
  };

  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {toursList.map((tour) => (
          <Tour key={tour.id} {...tour} removeTourHandler={removeTourHandler} />
        ))}
      </div>
      {toursList.length < 1 && (
        <button
          type="button"
          className="btn"
          onClick={() => setToursList(tours)}
        >
          Refresh
        </button>
      )}
    </section>
  );
};

export default Tours;
