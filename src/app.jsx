import { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video-list/video-list";
import videoList from "./mock-data/video-list.json";
import Nav from "./nav/nav";

function App({ youtube }) {
  const [videos, setVideos] = useState(videoList.items);

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

  return (
    <>
      <Nav onSearch={search} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
