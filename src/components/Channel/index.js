import React from "react";
import { ChannelImage } from "./../../styled-component";
export const Channel = ({ name, thumbnail, islive, title }) => {
  return (
    <>
      <div>
        <ChannelImage src={thumbnail} alt='thumbnail' />
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>Is live: {islive}</p>
      </div>
    </>
  );
};
