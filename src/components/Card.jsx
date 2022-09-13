import React from 'react';

const Card = ({ img }) => {
  return (
    <div className="p-5">
      <img src={img} alt={img} />
    </div>
  );
};

export default Card;
