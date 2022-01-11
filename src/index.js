import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import YoutubeAxios from "./service/axios-api";
import axios from "axios";
import "./index.css";
import Router from "./router";

const htmlClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

const youtube = new YoutubeAxios(htmlClient);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router youtube={youtube} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
