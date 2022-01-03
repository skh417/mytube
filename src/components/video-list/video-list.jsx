import React from "react";
import VideoItem from "../video-item/video-item";
import styles from "./video-list.module.css";

const VideoList = (props) => {
  return (
    <ul className={styles["video-list-container"]}>
      {props.videos.map((video) => (
        <VideoItem key={video.etag} video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
