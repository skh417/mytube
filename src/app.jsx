import { useEffect, useState } from "react";
import "./app.css";
import VideoDetail from "./components/video-detail/video-detail";
import VideoList from "./components/video-list/video-list";
import videoList from "./mock-data/video-list.json";
import Nav from "./nav/nav";

function App({ youtube }) {
  const [videos, setVideos] = useState(videoList.items);
  const [selectVideo, setSelectVideo] = useState(null);

  useEffect(() => {
    setVideos(videoList.items);
    console.log("videos:", videos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const search = (query) => {
    youtube
      .search(query) //
      .then((results) => setVideos(results));
  };

  const onVideoClick = (video) => {
    console.log("선택된 비디오 : ", video);
    setSelectVideo(video);
  };

  return (
    <>
      <Nav onSearch={search} />
      <main className={selectVideo ? "play-video" : ""}>
        {selectVideo && <VideoDetail video={selectVideo} />}
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
