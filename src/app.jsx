import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoList from "./components/video-list/video-list";
import Nav from "./nav/nav";
import "./app.css";

function App({ videos, selectVideo, setSelectVideo }) {
  const navigate = useNavigate();

  useEffect(() => {
    setSelectVideo(null);
  }, []);

  const onVideoClick = (video) => {
    console.log("선택된 비디오 : ", video);
    setSelectVideo(video);
    navigate(`/video/${video.id}`, { replace: false, state: video });
  };

  return (
    <>
      <main>
        <VideoList
          videos={videos}
          onVideoClick={onVideoClick}
          selectVideo={selectVideo}
        />
      </main>
    </>
  );
}

export default App;
