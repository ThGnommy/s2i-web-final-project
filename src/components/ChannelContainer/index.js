import React, { useContext, useEffect, useState } from "react";
import { Channel } from "../Channel";
import { ChannelList, IsLive, IsNotLive } from "./../../styled-component";
import { StoreContext } from "./../../StoreContext";

export const ChannelContainer = () => {
  const { channels } = useContext(StoreContext);

  const [live, setLive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLive((prevState) => !prevState);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {channels.length > 0 ? (
        <ChannelList>
          {channels.map((channel) => (
            <Channel
              key={channel.id}
              heartColor=''
              thumbnail={channel.thumbnail_url}
              name={channel.display_name}
              title={channel.title}
              isLiveText={channel.is_live ? "Online" : "Offline"}
              islive={
                channel.is_live ? (
                  <IsLive
                    show={(props) => (live ? "green" : props.theme.bgDark)}
                  />
                ) : (
                  <IsNotLive />
                )
              }
            />
          ))}
        </ChannelList>
      ) : null}
    </>
  );
};
