class YoutubeAxios {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async getMostPopular() {
    try {
      const response = await this.youtube.get("videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          regionCode: "KR",
          maxResults: 25,
        },
      });
      return response.data.items;
    } catch (error) {
      console.log(error);
    }
  }

  async search(query) {
    try {
      const response = await this.youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 27,
          type: "video",
          q: query,
        },
      });
      console.log(">", response.data.items);
      return response.data.items;
    } catch (error) {
      console.log(error);
    }
  }
}

export default YoutubeAxios;
