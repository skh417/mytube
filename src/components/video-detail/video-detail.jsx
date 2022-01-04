import React from "react";
import styles from "./video-detail.module.css";

const VideoDetail = ({ video }) => {
  const { snippet } = video;

  const createAt = () => {
    const dateData = new Date(snippet.publishTime);
    const year = dateData.getFullYear();
    const month = dateData.getMonth() + 1;
    const date = dateData.getDate();

    return `${year}년 ${month}월 ${date}일`;
  };

  return (
    <section className={styles.container}>
      <div>
        <iframe
          className={styles["video-player"]}
          title={snippet.title}
          type="text/html"
          width="100%"
          height="405"
          src={`https://www.youtube.com/embed/${video.id.videoId}?color=red`}
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <div className={styles.data}>
        <h2 className={styles.title}>{snippet.title}</h2>
        <div className={styles.channel}>
          <em>{snippet.channelTitle}</em>
        </div>
        <div className={styles["publish-time"]}>{createAt()}</div>
      </div>
      <div className={styles["video-description"]}>{snippet.description}</div>
    </section>
  );
};

export default VideoDetail;
