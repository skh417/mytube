import React from "react";
import VideoItem from "../video-item/video-item";
import styles from "./video-list.module.css";

const VideoList = React.memo(({ videos, onVideoClick, selectVideo }) => {
  return (
    <ul
      className={`${styles["video-list-container"]} ${
        selectVideo && styles.play
      }`}
    >
      {videos.map((video) => (
        <VideoItem key={video.etag} video={video} onVideoClick={onVideoClick} />
      ))}
    </ul>
  );
});

export default VideoList;
