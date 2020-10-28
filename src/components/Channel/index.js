import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  ChannelImage,
  SingleChannel,
  LiveContainer,
} from "./../../styled-component";
export const Channel = ({
  name,
  thumbnail,
  islive,
  isLiveText,
  title,
  heartColor,
}) => {
  return (
    <>
      <SingleChannel>
        <FontAwesomeIcon icon={faHeart} color={heartColor} />
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
