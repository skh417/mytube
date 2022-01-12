import React from "react";
import { useParams } from "react-router-dom";
import VideoItem from "../video-item/video-item";
import styles from "./video-list.module.css";

const VideoList = React.memo(({ videos, onVideoClick }) => {
  const { id } = useParams();

  return (
    <ul className={`${styles["video-list-container"]} ${id && styles.play}`}>
      {videos.map((video) => (
        <VideoItem key={video.etag} video={video} onVideoClick={onVideoClick} />
      ))}
    </ul>
  );
});

export default VideoList;
