import React from "react";
import { useParams, useLocation } from "react-router-dom";
import VideoList from "../video-list/video-list";
import styles from "./video-detail.module.css";

const VideoDetail = ({ videos, onVideoClick }) => {
  const { id } = useParams();
  const {
    state: { snippet },
  } = useLocation();

  return (
    <section className={styles.container}>
      <div className={styles.player}>
        <iframe
          title="youtube-video"
          type="text/html"
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className={styles["video-data"]}>
          <h2 className={styles.title}>{snippet.title}</h2>
          <p className={styles.description}>{snippet.description}</p>
        </div>
      </div>
      <VideoList videos={videos} onVideoClick={onVideoClick} />
    </section>
  );
};

export default VideoDetail;
