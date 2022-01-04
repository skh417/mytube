import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import YoutubeAxios from "./service/axios-api";
import axios from "axios";

const htmlClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

const youtube = new YoutubeAxios(htmlClient);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
