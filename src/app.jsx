import { useCallback, useEffect, useState } from "react";
import "./app.css";
import VideoDetail from "./components/video-detail/video-detail";
import VideoList from "./components/video-list/video-list";
// import videoList from "./mock-data/video-list.json";
import Nav from "./nav/nav";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectVideo, setSelectVideo] = useState(null);

  useEffect(() => {
    youtube
      .getMostPopular() //
      .then((res) => setVideos(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMostPopularVideos = useCallback(() => {
    youtube
      .getMostPopular() //
      .then((res) => setVideos(res));
  }, [youtube]);

  const search = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((results) => {
          setVideos(results);
          setSelectVideo(null);
        });
    },
    [youtube]
  );

  const onVideoClick = (video) => {
    console.log("선택된 비디오 : ", video);
    setSelectVideo(video);
    window.scroll(0, 0);
  };

  return (
    <>
      <Nav
        onSearch={search}
        setSelectVideo={setSelectVideo}
        getMostPopularVideos={getMostPopularVideos}
      />
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
