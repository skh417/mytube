import React from "react";
import VideoItem from "../video-item/video-item";

const VideoList = (props) => {
  return (
    <ul>
      {props.videos.map((video) => (
        <VideoItem key={video.etag} video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
