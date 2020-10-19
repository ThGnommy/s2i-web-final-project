import React, { useState } from "react";
import axios from "axios";

export const MainPage = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const myKey = process.env.REACT_APP_PEXELS_KEY;

  const fetchYoutube = async (e) => {
    e.preventDefault();
    await axios
      .get(`https://api.pexels.com/v1/search`, {
        params: {
          query: query,
          per_page: 80,
        },
        headers: {
          Authorization: myKey,
        },
      })
      .then((response) => {
        console.log(response.data.photos);
        setData(response.data.photos);
      });
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <form onSubmit={fetchYoutube}>
        <input onChange={handleQuery} type='text' />
        <button>FETCH</button>
      </form>
      {data.map((image) => (
        <>
          <img key={image.id} alt={image.id} src={image.src.medium} />
          <span key={image.photographer_id}>{image.photographer}</span>
        </>
      ))}
    </>
  );
};
