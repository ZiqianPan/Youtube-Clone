import React from "react";
import "./VideoCard.css";
import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle } = video.snippet;

  return (
    <Link to={`/videos/${video.id.videoId}`}>
      <div id ='thumbnail'>
        <img alt="thumbnails" src={thumbnails.default.url} className="video"/>
        <p>
          <strong>{title}</strong>
        </p>
        <span>{channelTitle}</span>
      </div>
    </Link>
  );
}
