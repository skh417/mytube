import React from "react";
import { useParams } from "react-router-dom";
import VideoItem from "../video-item/video-item";
import ViewMore from "../view-more/view-more";
import styles from "./video-list.module.css";

const VideoList = React.memo(({ videos, onVideoClick, onViewMoreClick }) => {
  const { id } = useParams();

  return (
    <>
      <ul className={`${styles["video-list-container"]} ${id && styles.play}`}>
        {videos.map((video) => (
          <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} />
        ))}
      </ul>
      <ViewMore onViewMoreClick={onViewMoreClick} />
    </>
  );
});

export default VideoList;
