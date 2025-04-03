import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function fetchGifs(query) {
    setLoading(true);
    setError("");
    console.log("Searching for:", query);

    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=5mdQ3iz1dA1t83d3rqM45T5kn3GgOldh&rating=g`
    )
      .then((r) => {
        if (!r.ok) throw new Error("Network response was not ok");
        return r.json();
      })
      .then((data) => {
        console.log("GIPHY response:", data);
        const top3 = data.data.slice(0, 3);
        setGifs(top3);
      })
      .catch((err) => {
        console.error("Error fetching GIFs:", err);
        setError("Could not load GIFs. Try again later.");
      })
      .finally(() => setLoading(false));
  }

  return (
    <div>
      <GifSearch onSubmit={fetchGifs} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
