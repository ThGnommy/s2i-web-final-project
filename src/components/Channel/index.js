import React from "react";

export const Channel = ({ name, thumbnail, islive, title }) => {
  return (
    <>
      <div>
        <img src={thumbnail} alt='thumbnail' />
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>Is live: {islive}</p>
      </div>
    </>
  );
};
