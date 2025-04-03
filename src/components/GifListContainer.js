import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  function fetchGifs(query) {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=5mdQ3iz1dA1t83d3rqM45T5kn3GgOldh&rating=g`
    )
      .then((r) => r.json())
      .then((data) => {
        console.log("Fetched gifs:", data); 
        const top3 = data.data.slice(0, 3);
        setGifs(top3);
      })
      .catch((err) => console.error("Fetch error:", err)); 
  }
  
  return (
    <div>
      <GifSearch onSubmit={fetchGifs} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
