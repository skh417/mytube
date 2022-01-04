import React, { memo } from "react";
import styles from "./video-item.module.css";

const VideoItem = memo(({ video, video: { snippet }, onVideoClick }) => {
  return (
    <li className={styles["video-item"]} onClick={() => onVideoClick(video)}>
      <img
        className={styles.thumbnail}
        src={snippet.thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className={styles["video-info"]}>
        <p className={styles["video-title"]}>{snippet.title}</p>
        <p className={styles["video-channel"]}>{snippet.channelTitle}</p>
      </div>
    </li>
  );
});

export default VideoItem;
