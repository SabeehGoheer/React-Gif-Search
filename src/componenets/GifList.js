import React from "react";
import "./GifList.css";
import GifCard from "./GifCard";
const GifList = props => {
  const gifs = props.gifs.map(gif => {
    return <GifCard gif={gif} key={gif.id} />;
  });
  return <div className="gif-list">{gifs}</div>;
};

export default GifList;
