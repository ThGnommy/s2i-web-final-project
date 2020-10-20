import React from "react";
import axios from "axios";

export const MainPage = () => {
  const fetchYoutube = async (e) => {
    e.preventDefault();
    await axios
      .get(`https://id.twitch.tv/oauth2/authorize`, {
        params: {
          client_id: "lygnd4tsud660cag5g2354e4w2ucyz",
          redirect_uri: "http://localhost:3000",
          response_type: "token",
          scope: "channel:read:subscriptions",
        },
        headers: {
          mode: "no-cors",
          Authorization: "token",
        },
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <form onSubmit={fetchYoutube}>
        <input type='text' />
        <button>FETCH</button>
      </form>
    </>
  );
};
