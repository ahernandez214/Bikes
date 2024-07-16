import React from "react";

const Entry = ({ name, city, country }) => {
  return (
    <div className="entry">
      <h2>{name}</h2>
      <p>
        {city}, {country}
      </p>
    </div>
  );
};

export default Entry;
