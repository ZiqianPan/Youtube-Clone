import React from "react";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import VideoCard from "./VideoCard";
import Error from "./Error";

export default function Home({ videos, search }) {

  return (
    <div>
      <div>
        <h1>Videos</h1>
        {videos.map((video) => {
          return <VideoCard video={video} />;
        })}
      </div>
    </div>
  );
}
