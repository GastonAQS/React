import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem video={video} />;
  });
  // props.videos
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
