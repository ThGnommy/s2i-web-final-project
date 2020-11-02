import React, { useContext } from "react";
import { FavoritesSection } from "../../styled-component";
import { Channel } from "./../Channel";
import { StoreContext } from "./../../StoreContext";
export const FavoritesContainer = () => {
  const { favorites } = useContext(StoreContext);

  return (
    <>
      <FavoritesSection>
        <h1 style={{ color: "#fff", fontSize: "2rem" }}>Favorites</h1>
        {favorites.map((channel) => (
          <Channel
            key={channel.id}
            thumbnail={channel.thumbnail_url}
            name={channel.display_name}
            title={channel.title}
            isLiveText={channel.is_live ? "Online" : "Offline"}
          />
        ))}
      </FavoritesSection>
    </>
  );
};
