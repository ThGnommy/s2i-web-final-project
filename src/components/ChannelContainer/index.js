import React, { useContext } from "react";
import { Channel } from "../Channel";
import { StoreContext } from "./../../StoreContext";

export const ChannelContainer = () => {
  const { channels } = useContext(StoreContext);

  return (
    <>
      {channels.forEach((channel) => (
        <Channel title={channel.display_name} />
      ))}
    </>
  );
};
