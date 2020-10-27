import React from "react";
import {
  ChannelImage,
  SingleChannel,
  LiveContainer,
} from "./../../styled-component";
export const Channel = ({ name, thumbnail, islive, isLiveText, title }) => {
  return (
    <>
      <SingleChannel>
        <ChannelImage src={thumbnail} alt='thumbnail' />
        <h3>{name}</h3>
        <h4>{title}</h4>
        <LiveContainer>
          <p>{isLiveText}</p>
          <div>{islive}</div>
        </LiveContainer>
      </SingleChannel>
    </>
  );
};
