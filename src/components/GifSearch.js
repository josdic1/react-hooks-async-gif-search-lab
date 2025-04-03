import React, { useState } from "react";

function GifSearch({ onSubmit }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(input);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for gifs"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;
