import React, { useCallback, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./app";
import VideoDetail from "./components/video-detail/video-detail";
import Nav from "./nav/nav";

const Router = ({ youtube }) => {
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

  return (
    <>
      <Nav
        onSearch={search}
        setSelectVideo={setSelectVideo}
        getMostPopularVideos={getMostPopularVideos}
      />

      <div className="router">
        <Routes>
          <Route
            path="/"
            element={
              <App
                videos={videos}
                selectVideo={selectVideo}
                setSelectVideo={setSelectVideo}
              />
            }
          />
          <Route path="/video">
            <Route path=":id" element={<VideoDetail />} />
          </Route>
          <Route
            path="*"
            element={
              <App
                videos={videos}
                selectVideo={selectVideo}
                setSelectVideo={setSelectVideo}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default Router;
