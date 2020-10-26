import React, { useContext, useEffect } from "react";
import { ButtonSearch, SearchSection } from "../../styled-component";
import { Channel } from "../Channel";
import { Searchbar } from "../Searchbar";
import { StoreContext, client_id } from "./../../StoreContext";
import axios from "axios";
import { ChannelContainer } from "../ChannelContainer";

export const SearchContainer = () => {
  const { query, setChannels, setQuery, channels } = useContext(StoreContext);

  const handleClick = (e) => {
    setQuery(e.target.value);
    fetchChannels();
  };

  const fetchChannels = async () => {
    await axios
      .get(`https://api.twitch.tv/helix/search/channels?query=${query}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Client-Id": client_id,
        },
      })
      .then((response) => {
        setChannels(response.data.data);
        channels.forEach((channel) => {
          console.log(channel.display_name, channel.title);
        });
      });
  };

  return (
    <>
      <SearchSection>
        <Searchbar />
        <ButtonSearch onClick={handleClick}>Search</ButtonSearch>
        {channels.map((channel) => (
          <Channel
            key={channel.id}
            thumbnail={channel.thumbnail_url}
            name={channel.display_name}
            title={channel.title}
          />
        ))}
      </SearchSection>
    </>
  );
};
