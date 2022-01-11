import React from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import styles from "./video-detail.module.css";

const VideoDetail = () => {
  const { id } = useParams();
  const {
    state: { snippet },
  } = useLocation();

  console.log(snippet);

  return (
    <section className={styles.container}>
      <div className={styles.player}>
        <h2>{snippet.title}</h2>
        <iframe
          title="youtube-video"
          type="text/html"
          width="720"
          height="405"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoDetail;
